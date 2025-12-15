
import React, { useState, useEffect, useRef } from 'react';
import { World } from './components/World';
import { GameState, SceneType, Option } from './types';
import { WAYPOINTS, WORLD_HEIGHT, RESULTS } from './constants';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentWaypointIndex: 0,
    characterPosition: WAYPOINTS[0].pos,
    cameraY: 0,
    scene: SceneType.INTRO,
    isMoving: false,
    answers: [],
    finalResult: null,
  });

  const [targetIndex, setTargetIndex] = useState(0);
  const movementRef = useRef<number | null>(null);

  // Animation Loop for Movement
  useEffect(() => {
    if (gameState.currentWaypointIndex === targetIndex) {
       setGameState(prev => ({ ...prev, isMoving: false }));
       
       const currentPoint = WAYPOINTS[gameState.currentWaypointIndex];
       if (currentPoint.questionId && gameState.scene !== SceneType.QUIZ_STOP) {
         setGameState(prev => ({ ...prev, scene: SceneType.QUIZ_STOP }));
       }
       
       if (currentPoint.isEnd && gameState.scene !== SceneType.ENDING) {
         calculateResult();
       }
       return;
    }

    const nextIndex = gameState.currentWaypointIndex + 1;
    const startPos = gameState.characterPosition;
    const endPos = WAYPOINTS[nextIndex].pos;
    
    let progress = 0;
    // Speed adjusted to 0.009 for ~1.85 seconds duration (at 60fps)
    const speed = 0.009;

    const animate = () => {
      progress += speed;
      if (progress >= 1) progress = 1;

      const newX = startPos.x + (endPos.x - startPos.x) * progress;
      const newY = startPos.y + (endPos.y - startPos.y) * progress;

      const viewportHeight = window.innerHeight;
      let targetCameraY = newY - (viewportHeight * 0.5);
      if (targetCameraY < 0) targetCameraY = 0;
      if (targetCameraY > WORLD_HEIGHT - viewportHeight) targetCameraY = WORLD_HEIGHT - viewportHeight;

      setGameState(prev => ({
          ...prev,
          characterPosition: { x: newX, y: newY },
          cameraY: targetCameraY,
          scene: SceneType.WALKING,
          isMoving: true
      }));

      if (progress < 1) {
        movementRef.current = requestAnimationFrame(animate);
      } else {
        setGameState(prev => ({
           ...prev,
           currentWaypointIndex: nextIndex,
        }));
      }
    };

    movementRef.current = requestAnimationFrame(animate);

    return () => {
      if (movementRef.current) cancelAnimationFrame(movementRef.current);
    };
  }, [gameState.currentWaypointIndex, targetIndex]);

  const calculateResult = () => {
    const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
    gameState.answers.forEach(a => {
      if (counts[a] !== undefined) counts[a]++;
    });

    const maxScore = Math.max(counts.A, counts.B, counts.C, counts.D);
    
    // Check for 4-way tie (e.g. 2,2,2,2)
    if (counts.A === counts.B && counts.B === counts.C && counts.C === counts.D) {
      setGameState(prev => ({ ...prev, scene: SceneType.ENDING, finalResult: '7' }));
      return;
    }

    // Find dominant trait
    let dominant = '';
    // Priority check if needed, but let's just pick the first one that matches maxScore
    // Or we can prioritize strictly: A, then B, then C, then D.
    if (counts.A === maxScore) dominant = 'A';
    else if (counts.B === maxScore) dominant = 'B';
    else if (counts.C === maxScore) dominant = 'C';
    else dominant = 'D';

    // Map dominant trait to result IDs
    let possibleResults: string[] = [];
    if (dominant === 'A') possibleResults = ['1', '5'];
    if (dominant === 'B') possibleResults = ['3', '8'];
    if (dominant === 'C') possibleResults = ['4', '7', '9'];
    if (dominant === 'D') possibleResults = ['2', '6', '10'];

    // Deterministic selection based on answer hash to add variety within the trait
    // (e.g. If you answered more C's among the non-dominants, or just position of answers)
    // Simple hash: sum of char codes of all answers
    const hash = gameState.answers.join('').split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const resultId = possibleResults[hash % possibleResults.length];

    setGameState(prev => ({
      ...prev,
      scene: SceneType.ENDING,
      finalResult: resultId
    }));
  };

  const handleStart = () => {
    setTargetIndex(1);
  };

  const handleAnswer = (option: Option) => {
    setGameState(prev => ({
      ...prev,
      answers: [...prev.answers, option.type],
      scene: SceneType.WALKING
    }));
    setTargetIndex(prev => prev + 1);
  };

  const handleReset = () => {
    setTargetIndex(0);
    setGameState({
      currentWaypointIndex: 0,
      characterPosition: WAYPOINTS[0].pos,
      cameraY: 0,
      scene: SceneType.INTRO,
      isMoving: false,
      answers: [],
      finalResult: null,
    });
  };

  return (
    <div className="relative w-full h-screen bg-stone-200 overflow-hidden flex justify-center font-hand">
      <div className="relative w-full max-w-[480px] h-full bg-orange-50 shadow-2xl overflow-hidden">
        <World 
          gameState={gameState} 
          onStart={handleStart}
          onAnswer={handleAnswer}
          onReset={handleReset}
        />
      </div>
    </div>
  );
};

export default App;
