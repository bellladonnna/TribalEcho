import React, { useMemo } from 'react';
import { WORLD_HEIGHT, WAYPOINTS, QUESTIONS, RESULTS, SCENERY, RIVER_PATHS } from '../constants.js';

const SceneType = {
  INTRO: 'INTRO',
  WALKING: 'WALKING',
  QUIZ_STOP: 'QUIZ_STOP',
  ENDING: 'ENDING'
};

const World = ({ gameState, onStart, onAnswer, onReset }) => {
  const { characterPosition, scene, currentWaypointIndex, finalResult, isMoving } = gameState;

  const currentWaypointData = WAYPOINTS[currentWaypointIndex];
  const currentQuestion = currentWaypointData?.questionId 
    ? QUESTIONS.find(q => q.id === currentWaypointData.questionId) 
    : null;

  // Determine facing direction
  const isMovingLeft = currentWaypointIndex % 2 === 0;

  // --- Footprint Logic ---
  const footprints = useMemo(() => {
    const prints = [];
    
    // We assume a reference width for angle calculation to handle the mixed units (x%, y px)
    const REF_WIDTH = 400; 

    const generateSegment = (start, end, maxDist) => {
      // Convert start/end to consistent pixel-like space for angle/dist calc
      const sx = (start.x / 100) * REF_WIDTH;
      const sy = start.y;
      const ex = (end.x / 100) * REF_WIDTH;
      const ey = end.y;

      const dx = ex - sx;
      const dy = ey - sy;
      const fullDist = Math.sqrt(dx*dx + dy*dy);
      const angleRad = Math.atan2(dy, dx);
      const angleDeg = (angleRad * 180) / Math.PI;

      // Distance between footprints
      const stepSize = 25; 
      
      const count = Math.floor(fullDist / stepSize);
      
      for (let i = 1; i <= count; i++) {
        const distFromStart = i * stepSize;
        
        // If we have a cutoff (current movement), stop generating if we pass it
        if (maxDist !== undefined && distFromStart > maxDist) break;

        const t = distFromStart / fullDist;
        
        // Base position on the line
        const bx = sx + dx * t;
        const by = sy + dy * t;

        // Offset for left/right foot
        const isRight = i % 2 === 0;
        const offsetAmt = 5; 
        
        // Perpendicular vector (-y, x) for right, (y, -x) for left
        // Normal vector (nx, ny)
        const nx = -Math.sin(angleRad);
        const ny = Math.cos(angleRad);

        const sideMult = isRight ? 1 : -1;
        
        const fx = bx + (nx * offsetAmt * sideMult);
        const fy = by + (ny * offsetAmt * sideMult);

        // Convert back X to percentage
        const xPct = (fx / REF_WIDTH) * 100;

        prints.push({
          x: xPct,
          y: fy,
          rotation: angleDeg + 90, // +90 because default oval is vertical? Check later.
          id: `${start.x}-${start.y}-${i}`
        });
      }
    };

    // 1. History segments
    for (let i = 0; i < currentWaypointIndex; i++) {
      if (WAYPOINTS[i+1]) {
        generateSegment(WAYPOINTS[i].pos, WAYPOINTS[i+1].pos);
      }
    }

    // 2. Current active segment
    if (isMoving && WAYPOINTS[currentWaypointIndex] && WAYPOINTS[currentWaypointIndex+1]) {
      // Calculate distance traveled so far
      const start = WAYPOINTS[currentWaypointIndex].pos;
      
      const sx = (start.x / 100) * REF_WIDTH;
      const sy = start.y;
      const cx = (characterPosition.x / 100) * REF_WIDTH;
      const cy = characterPosition.y;
      
      const travelledDist = Math.sqrt(Math.pow(cx - sx, 2) + Math.pow(cy - sy, 2));
      
      generateSegment(start, WAYPOINTS[currentWaypointIndex+1].pos, travelledDist);
    }

    return prints;
  }, [currentWaypointIndex, isMoving, characterPosition]);

  return React.createElement('div', { className: "relative w-full h-full overflow-hidden bg-stone-200" },
    
    // === LAYER 1: SCROLLING WORLD ===
    React.createElement('div', {
      className: "absolute top-0 left-0 w-full bg-notebook-paper transition-transform duration-500 ease-out will-change-transform",
      style: { 
        height: `${WORLD_HEIGHT}px`,
        transform: `translateY(${-gameState.cameraY}px)`
      }
    },
      
      // River Layer (Watercolor style)
      React.createElement('svg', { className: "absolute top-0 left-0 w-full h-full pointer-events-none", style: { zIndex: 0 } },
        RIVER_PATHS.map((path, idx) =>
          React.createElement('path', {
            key: idx,
            d: path,
            fill: "none",
            stroke: "#a5d8ff",
            strokeWidth: "40",
            strokeLinecap: "round",
            style: { mixBlendMode: 'multiply', opacity: 0.6 }
          })
        )
      ),

      // Footprints Layer (New)
      footprints.map((fp) =>
        React.createElement('div', {
          key: fp.id,
          className: "absolute opacity-30 pointer-events-none",
          style: {
            left: `${fp.x}%`,
            top: `${fp.y}px`,
            width: '8px',
            height: '10px',
            backgroundColor: '#5D4037',
            borderRadius: '50%',
            transform: `translate(-50%, -50%) rotate(${fp.rotation}deg)`,
            zIndex: 0, 
          }
        })
      ),

      // Scenery Items (Hand-drawn Illustration Style - Flat)
      SCENERY.map((item) =>
        React.createElement('div', {
          key: item.id,
          className: "absolute pointer-events-none select-none",
          style: {
            left: `${item.x}%`,
            top: `${item.y}px`,
            fontSize: '3.5rem',
            zIndex: 1,
            filter: 'contrast(1.1) sepia(0.3)',
            mixBlendMode: 'multiply',
            opacity: 0.85,
            transform: `rotate(${item.rotation}deg) scale(${item.scale})`
          }
        }, item.asset)
      ),

      // Waypoint Totems (3D Pop-up interactive elements)
      WAYPOINTS.map((wp, idx) => {
        if (!wp.totem) return null;
        const isReached = idx <= currentWaypointIndex + (isMoving ? 1 : 0);
        
        return React.createElement('div', {
          key: `totem-${idx}`,
          className: "absolute z-10 perspective-container",
          style: {
            left: `${wp.pos.x}%`,
            top: `${wp.pos.y}px`,
            width: '60px',
            height: '60px',
            marginLeft: '-30px', 
            marginTop: '-50px',
          }
        },
          React.createElement('div', {
            className: `absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-black/10 rounded-[100%] blur-[2px] transition-opacity duration-500 ${isReached ? 'opacity-100' : 'opacity-0'}`
          }),
          React.createElement('div', {
            className: `w-full h-full flex items-end justify-center text-5xl pop-up-item ${isReached ? 'is-standing' : 'is-flat'}`
          },
            React.createElement('div', { className: "relative filter drop-shadow-sm" }, wp.totem)
          )
        );
      }),

      // Intro Text
      React.createElement('div', { className: "absolute w-full top-[60px] flex flex-col items-center text-center px-6 z-20" },
        React.createElement('h1', { className: "text-6xl font-hand font-black text-amber-900 mb-6 tracking-tighter mix-blend-multiply opacity-90" }, "面具之魂"),
        React.createElement('div', { className: "font-hand text-amber-800 leading-relaxed max-w-sm mix-blend-multiply opacity-80 flex flex-col items-center" },
          React.createElement('span', { className: "block border-b-2 border-amber-900/10 pb-3 mb-3 text-3xl font-bold" }, "探寻你的非洲部落化身"),
          React.createElement('span', { className: "text-xl font-normal" }, "测测你是什么类型的非洲部落面具")
        ),
        
        scene === SceneType.INTRO && 
          React.createElement('button', {
            onClick: onStart,
            className: "mt-80 px-8 py-3 bg-[#fdfbf7] border-2 border-amber-900 text-amber-900 font-hand text-2xl rounded-sm shadow-[4px_4px_0px_0px_#5D4037] hover:bg-amber-50 active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
          }, "开始旅程")
      ),

      // Character (3D Style - SVG Tribal Theme)
      React.createElement('div', {
        className: "absolute z-30 pointer-events-none will-change-[left,top]",
        style: {
          left: `${characterPosition.x}%`,
          top: `${characterPosition.y}px`,
          transform: `translate(-50%, -90%) scaleX(${isMovingLeft ? -1 : 1})`, 
          transition: 'transform 0.1s linear'
        }
      },
        // Shadow
        React.createElement('div', { 
          className: "absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-3 bg-black/20 rounded-[100%] blur-[1.5px]" 
        }),
        
        // SVG Character
        React.createElement('div', { 
          className: `relative w-20 h-20 origin-bottom ${isMoving ? 'animate-bounce-move' : ''}` 
        },
          React.createElement('svg', { viewBox: "0 0 100 100", className: "w-full h-full drop-shadow-md" },
            React.createElement('g', null,
              // === Back Leg (Left) ===
              React.createElement('g', { style: { transformOrigin: '45px 75px' }, className: isMoving ? 'animate-leg' : '' },
                React.createElement('path', { d: "M45 75 L45 95", stroke: "#8D5524", strokeWidth: "6", strokeLinecap: "round" })
              ),

              // === Back Arm ===
              React.createElement('g', { style: { transformOrigin: '40px 55px' }, className: isMoving ? 'animate-arm' : '' },
                React.createElement('path', { d: "M40 55 L30 65", stroke: "#8D5524", strokeWidth: "5", strokeLinecap: "round" })
              ),

              // === Grass Skirt (Back Layers) ===
              React.createElement('path', { d: "M36 70 L42 85 L48 70", fill: "#b45309" }),
              React.createElement('path', { d: "M42 70 L48 85 L54 70", fill: "#b45309" }),

              // === Torso / Body ===
              React.createElement('rect', { x: "38", y: "48", width: "24", height: "26", rx: "4", fill: "#8D5524" }),
              React.createElement('path', { d: "M38 48 L38 72 L46 72 L46 48 Z", fill: "#9a3412" }),
              React.createElement('path', { d: "M54 48 L54 72 L62 72 L62 48 Z", fill: "#9a3412" }),
              
              // === Front Leg (Right) ===
              React.createElement('g', { style: { transformOrigin: '55px 75px' }, className: isMoving ? 'animate-leg-opp' : '' },
                React.createElement('path', { d: "M55 75 L55 95", stroke: "#8D5524", strokeWidth: "6", strokeLinecap: "round" })
              ),

              // === Grass Skirt (Front Layer) ===
              React.createElement('path', { d: "M34 72 L38 88 L42 75 L46 88 L50 75 L54 88 L58 75 L62 88 L66 72", fill: "#eab308", stroke: "#a16207", strokeWidth: "1", strokeLinejoin: "round" }),
              React.createElement('path', { d: "M34 72 L66 72", stroke: "#713f12", strokeWidth: "3", strokeLinecap: "round" }),

              // === Head ===
              React.createElement('circle', { cx: "50", cy: "38", r: "17", fill: "#8D5524" }),
              
              // Headpiece / Hair
              React.createElement('path', { d: "M33 32 Q50 22 67 32", stroke: "#fbbf24", strokeWidth: "3", fill: "none" }),
              // Feather
              React.createElement('path', { d: "M44 22 L40 5 L48 15", fill: "#ef4444" }),

              // === Face (Facing slightly right) ===
              React.createElement('circle', { cx: "54", cy: "36", r: "2", fill: "#1a1a1a" }),
              React.createElement('circle', { cx: "62", cy: "36", r: "2", fill: "#1a1a1a" }),
              // Tribal Face Paint (White Stripes)
              React.createElement('path', { d: "M52 42 L56 44", stroke: "#fff", strokeWidth: "2", opacity: "0.6", strokeLinecap: "round" }),
              React.createElement('path', { d: "M60 42 L64 44", stroke: "#fff", strokeWidth: "2", opacity: "0.6", strokeLinecap: "round" }),

              // === Front Arm ===
              React.createElement('g', { style: { transformOrigin: '60px 55px' }, className: isMoving ? 'animate-arm-opp' : '' },
                React.createElement('path', { d: "M60 55 L70 65", stroke: "#8D5524", strokeWidth: "5", strokeLinecap: "round" })
              )
            )
          )
        )
      )
    ),

    // === LAYER 2: UI OVERLAYS (Fixed Position) ===

    // Quiz Modal
    scene === SceneType.QUIZ_STOP && currentQuestion && 
      React.createElement('div', { className: "absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/10 backdrop-blur-[1px]" },
        React.createElement('div', { className: "w-full max-w-md bg-[#fffdf5] p-6 border-2 border-amber-900 shadow-[8px_8px_0px_0px_rgba(60,40,30,0.15)] rounded-sm flex flex-col max-h-[85vh] relative transform rotate-1" },
          // Washi Tape effect
          React.createElement('div', { className: "absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-amber-400/30 rotate-[-2deg] shadow-sm backdrop-blur-sm" }),

          React.createElement('div', { className: "text-amber-800/40 text-xs font-bold uppercase tracking-widest mb-4 text-center shrink-0 font-hand" }, `Checkpoint ${currentQuestion.id}`),
          
          React.createElement('div', { className: "overflow-y-auto no-scrollbar mb-6 shrink-0 text-center" },
            React.createElement('h3', { className: "text-2xl font-hand font-bold text-amber-950 leading-tight" }, currentQuestion.text)
          ),

          React.createElement('div', { className: "space-y-3 overflow-y-auto flex-1 pr-1 custom-scrollbar" },
            currentQuestion.options.map((opt, idx) =>
              React.createElement('button', {
                key: idx,
                onClick: (e) => {
                  e.stopPropagation();
                  onAnswer(opt);
                },
                className: "w-full text-left p-4 bg-transparent border-2 border-stone-200 hover:border-amber-400 hover:bg-amber-50 transition-all font-hand text-lg text-amber-900 rounded-sm active:scale-[0.99]"
              },
                React.createElement('span', { className: "font-bold mr-2 text-amber-600" }, `${opt.text.split('.')[0]}.`),
                opt.text.split('.').slice(1).join('.')
              )
            )
          )
        )
      ),

    // Result Card
    scene === SceneType.ENDING && finalResult &&
      React.createElement('div', { className: "absolute inset-0 z-50 flex items-center justify-center bg-[#fdfbf7]/95 animate-in fade-in duration-700" },
        React.createElement('div', { className: "w-full h-full max-w-md overflow-y-auto p-6 flex flex-col items-center justify-start md:justify-center" },
          React.createElement('div', { 
            className: "w-full bg-white border-2 border-amber-950 p-6 shadow-[10px_10px_0_0_rgba(0,0,0,0.05)] rounded-sm relative shrink-0 transform -rotate-1" 
          },
            // Result Tape
            React.createElement('div', { className: "absolute -top-4 right-10 w-24 h-8 bg-red-400/20 rotate-3 backdrop-blur-sm" }),

            React.createElement('div', { className: "text-center mb-6 mt-4" },
              React.createElement('div', { className: "text-7xl mb-4 opacity-90 mix-blend-multiply" }, RESULTS[finalResult].icon),
              React.createElement('h2', { className: "text-2xl md:text-3xl font-bold font-hand text-amber-900 leading-none mb-2" }, RESULTS[finalResult].name),
              React.createElement('div', { className: "w-full h-px bg-amber-900/20 my-3" }),
              React.createElement('h3', { className: "text-lg font-hand text-amber-700 italic" }, RESULTS[finalResult].title)
            ),

            React.createElement('div', { className: "grid grid-cols-3 gap-2 text-center font-hand text-sm text-amber-900 mb-6 bg-stone-50 p-3 rounded border border-dashed border-stone-300" },
              React.createElement('div', { className: "flex flex-col justify-center" },
                React.createElement('div', { className: "opacity-50 text-[10px] uppercase mb-1" }, "特质"),
                React.createElement('span', { className: "font-bold" }, RESULTS[finalResult].trait)
              ),
              React.createElement('div', { className: "border-l border-r border-stone-200 px-1 flex flex-col justify-center" },
                React.createElement('div', { className: "opacity-50 text-[10px] uppercase mb-1" }, "优势"),
                React.createElement('span', { className: "font-bold" }, RESULTS[finalResult].strength)
              ),
              React.createElement('div', { className: "flex flex-col justify-center" },
                React.createElement('div', { className: "opacity-50 text-[10px] uppercase mb-1" }, "拿手好戏"),
                React.createElement('span', { className: "font-bold" }, RESULTS[finalResult].skill)
              )
            ),

            React.createElement('p', { className: "text-center font-hand text-amber-950 text-lg leading-relaxed mb-8 px-2" }, RESULTS[finalResult].desc),
            
            React.createElement('button', {
              onClick: (e) => {
                e.stopPropagation();
                onReset();
              },
              className: "w-full py-4 bg-amber-900 text-white font-bold font-hand text-xl rounded shadow hover:bg-amber-800 transition-colors flex items-center justify-center gap-2 group active:scale-95"
            },
              React.createElement('span', null, "🔄"),
              React.createElement('span', null, "再测一次")
            )
          ),

          React.createElement('div', { className: "mt-8 text-amber-900/30 font-hand text-sm text-center pb-8" }, "Mask Soul Personality Test")
        )
      )
  );
};

export { World };