import { Point, Question, WaypointData, SceneryItem } from './types';
import React from 'react';

// The total height of the world in pixels
export const WORLD_HEIGHT = 4200;

// 8 Questions for the personality test
export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "第一题：你如何看待自己在社群中的角色？",
    options: [
      { text: "A. 守护者。我本能地保护身边的人，维护秩序与正义，是大家信赖的依靠。", type: 'A' },
      { text: "B. 智者。我乐于思考与传授知识，是连接过去与未来的桥梁，常为他人指引方向。", type: 'B' },
      { text: "C. 沟通者。我擅长协调矛盾，传递信息，是促进群体和谐与理解的纽带。", type: 'C' },
      { text: "D. 治愈者。我充满同理心，能抚慰他人情绪，并热爱自然与生命的力量。", type: 'D' },
    ]
  },
  {
    id: 2,
    text: "第二题：哪种力量最让你心生向往？",
    options: [
      { text: "A. 雄狮的勇气。无畏、强大，拥有征服一切困难的决心。", type: 'A' },
      { text: "B. 猎豹的灵巧。敏捷、精准，总能洞察先机，找到最佳路径。", type: 'B' },
      { text: "C. 大象的智慧。沉稳、长寿，拥有古老的记忆和家族凝聚力。", type: 'C' },
      { text: "D. 雨水的滋养。温柔、潜移默化，能带来新生与希望。", type: 'D' },
    ]
  },
  {
    id: 3,
    text: "第三题：面对一个未知的挑战，你的第一反应是？",
    options: [
      { text: "A. 正面迎接。制定计划，集结力量，直接而果断地解决问题。", type: 'A' },
      { text: "B. 深入洞察。先观察、分析，理解其本质和规律，再寻求破解之道。", type: 'B' },
      { text: "C. 寻求协作。联系同伴，交换信息，集合众人的智慧共同面对。", type: 'C' },
      { text: "D. 顺应节奏。调整自身状态，像水一样流动，在适应中找到机会。", type: 'D' },
    ]
  },
  {
    id: 4,
    text: "第四题：你希望他人如何记住你？",
    options: [
      { text: "A. 一个强大的传奇。我的存在本身，就是一种力量和庇护。", type: 'A' },
      { text: "B. 一个智慧的源泉。我的思想和话语，能持续启发后人。", type: 'B' },
      { text: "C. 一个和谐的象征。我让世界变得更加包容与美好。", type: 'C' },
      { text: "D. 一个生命的礼赞。我带来了欢乐、治愈与连接。", type: 'D' },
    ]
  },
  {
    id: 5,
    text: "第五题：在社交场合中，你通常是？",
    options: [
      { text: "A. 话题主导者。能自然地引领对话节奏，气场强大。", type: 'A' },
      { text: "B. 深度剖析者。喜欢进行有意义的对话，并提出独特见解。", type: 'B' },
      { text: "C. 氛围调节者。关注每个人的感受，确保场面和谐愉快。", type: 'C' },
      { text: "D. 安静倾听者。善于理解他人，并提供温暖的陪伴和支持。", type: 'D' },
    ]
  },
  {
    id: 6,
    text: "第六题：你更偏爱哪种创作方式？",
    options: [
      { text: "A. 构建宏大的体系。比如策划一个项目，搭建一个清晰的框架。", type: 'A' },
      { text: "B. 解构复杂的概念。比如研究理论，将抽象事物具象化。", type: 'B' },
      { text: "C. 编织精妙的故事。比如通过叙述来连接人与人之间的情感。", type: 'C' },
      { text: "D. 感受即兴的灵感。比如随心的涂鸦、音乐或舞蹈，表达瞬间的情绪。", type: 'D' },
    ]
  },
  {
    id: 7,
    text: "第七题：你认为什么是理想的社区？",
    options: [
      { text: "A. 纪律严明的堡垒。安全、有序，拥有强大的防御和规则。", type: 'A' },
      { text: "B. 思想自由的学城。鼓励探索知识，尊重智慧和创新。", type: 'B' },
      { text: "C. 平等互助的联盟。没有隔阂，人们通过沟通达成共识。", type: 'C' },
      { text: "D. 亲近自然的部落。与环境和诸共处，生活节奏顺应天地。", type: 'D' },
    ]
  },
  {
    id: 8,
    text: "第八题：你如何定义自己的"美"？",
    options: [
      { text: "A. 力量之美。体现在坚韧、果断和实际的成就上。", type: 'A' },
      { text: "B. 智慧之美。体现在深邃的思想、洞察力和创造力上。", type: 'B' },
      { text: "C. 和谐之美。体现在优雅的举止、得体的言行和平衡感上。", type: 'C' },
      { text: "D. 本真之美。体现在质朴的内心、真实的情感和生命力上。", type: 'D' },
    ]
  }
];

export const ASSETS = {
  avatar: "🗿", 
  totems: ["🦁", "🏺", "🐍", "🔥", "🥁", "🎭", "🦅", "🌞"], // One for each question
  trees: ["🌳", "🌴", "🌵", "🌿"],
  houses: ["🛖", "⛺"],
  rocks: ["🪨", "⛰️"],
};

// Isometric zigzag path
export const WAYPOINTS: WaypointData[] = [
  // Start
  { pos: { x: 50, y: 320 } },
  
  // Q1 - Diagonal Left
  { pos: { x: 20, y: 450 }, questionId: 1, totem: ASSETS.totems[0] },
  
  // Q2 - Diagonal Right
  { pos: { x: 80, y: 750 }, questionId: 2, totem: ASSETS.totems[1] },
  
  // Q3 - Diagonal Left
  { pos: { x: 30, y: 1100 }, questionId: 3, totem: ASSETS.totems[2] },
  
  // Q4 - Diagonal Right
  { pos: { x: 70, y: 1450 }, questionId: 4, totem: ASSETS.totems[3] },
  
  // Q5 - Diagonal Left
  { pos: { x: 25, y: 1850 }, questionId: 5, totem: ASSETS.totems[4] },
  
  // Q6 - Diagonal Right
  { pos: { x: 75, y: 2200 }, questionId: 6, totem: ASSETS.totems[5] },
  
  // Q7 - Diagonal Left
  { pos: { x: 20, y: 2600 }, questionId: 7, totem: ASSETS.totems[6] },
  
  // Q8 - Center
  { pos: { x: 50, y: 3000 }, questionId: 8, totem: ASSETS.totems[7] },
  
  // End
  { pos: { x: 50, y: 3400 }, isEnd: true },
];

// Randomly placed scenery for the background
// Arranged to fill the empty spaces of the zigzag
export const SCENERY: SceneryItem[] = [
  { id: 's1', asset: ASSETS.trees[0], x: 70, y: 350, scale: 1.2, rotation: -5 },
  { id: 's2', asset: ASSETS.houses[0], x: 80, y: 400, scale: 1.5, rotation: 5 },
  
  { id: 's3', asset: ASSETS.rocks[1], x: 20, y: 650, scale: 1.0, rotation: 0 },
  { id: 's4', asset: ASSETS.trees[1], x: 30, y: 750, scale: 1.3, rotation: 10 },
  
  { id: 's5', asset: ASSETS.trees[2], x: 75, y: 1050, scale: 0.9, rotation: -8 },
  { id: 's6', asset: ASSETS.houses[1], x: 85, y: 1150, scale: 1.4, rotation: 3 },
  
  { id: 's7', asset: ASSETS.trees[3], x: 20, y: 1400, scale: 1.1, rotation: -3 },
  { id: 's8', asset: ASSETS.rocks[0], x: 10, y: 1500, scale: 0.8, rotation: 15 },
  
  { id: 's9', asset: ASSETS.trees[0], x: 80, y: 1800, scale: 1.5, rotation: 5 },
  { id: 's10', asset: ASSETS.houses[0], x: 70, y: 1900, scale: 1.2, rotation: -5 },
  
  { id: 's11', asset: ASSETS.trees[1], x: 25, y: 2150, scale: 1.0, rotation: 8 },
  { id: 's12', asset: ASSETS.rocks[1], x: 15, y: 2250, scale: 1.3, rotation: -2 },
  
  { id: 's13', asset: ASSETS.trees[2], x: 80, y: 2550, scale: 1.4, rotation: 4 },
  { id: 's14', asset: ASSETS.houses[1], x: 70, y: 2650, scale: 1.1, rotation: -6 },
];

export const RIVER_PATHS = [
  "M -10 900 C 100 950, 200 850, 400 1000",
  "M 500 2300 C 300 2350, 100 2250, -10 2400"
];

interface ResultType {
  id: string;
  name: string;
  title: string;
  trait: string;
  strength: string;
  skill: string;
  desc: string;
  color: string;
  icon: string;
}

export const RESULTS: Record<string, ResultType> = {
  '1': {
    id: '1',
    name: "刚果王国 · 恩基西勇士面具",
    title: "守护型人格 · 秩序铁拳",
    trait: "权威",
    strength: "裁决",
    skill: "主持公道",
    desc: "你是部落规则的化身，公正的捍卫者。气场自带边界感，能镇住一切骚动，是让人安心托付的"人间秤砣"。",
    color: "bg-red-100",
    icon: "🛡️"
  },
  '2': {
    id: '2',
    name: "班巴拉部落 · 契瓦拉羚羊顶饰",
    title: "创造型人格 · 丰饶大师",
    trait: "勤奋",
    strength: "高产",
    skill: "点土成金",
    desc: "你的创造力如同沃土，总能孕育出惊艳的果实。是天生的建设者，在你身边总能感受到万物生长的蓬勃朝气。",
    color: "bg-green-100",
    icon: "🌾"
  },
  '3': {
    id: '3',
    name: "多贡部落 · 大面具",
    title: "哲思型人格 · 宇宙模组",
    trait: "深邃",
    strength: "洞察",
    skill: "参透本质",
    desc: "你的精神连接着星辰与古老智慧。喜欢探寻万物规律，是朋友中行走的"百科圣光"，总能带来降维打击的启发。",
    color: "bg-indigo-100",
    icon: "🌌"
  },
  '4': {
    id: '4',
    name: "鲍勒部落 · 人面神灵面具",
    title: "和谐型人格 · 美学标杆",
    trait: "优雅",
    strength: "平衡",
    skill: "颜值维稳",
    desc: "你崇尚并创造着一切形式的美与和谐。是社交圈里的定海神针，能用温柔的力量抚平毛躁，让世界变得优雅从容。",
    color: "bg-pink-100",
    icon: "🎭"
  },
  '5': {
    id: '5',
    name: "塞努福部落 · 火法师面具",
    title: "力量型人格 · 野性图腾",
    trait: "狂野",
    strength: "威慑",
    skill: "气场全开",
    desc: "你体内封印着最原始的生命力，无畏且强大。是攻坚克难的不二人选，拥有用行动粉碎一切障碍的硬核魅力。",
    color: "bg-orange-100",
    icon: "🔥"
  },
  '6': {
    id: '6',
    name: "马康德部落 · 谢塔尼面具",
    title: "灵感型人格 · 梦境捕手",
    trait: "抽象",
    strength: "创意",
    skill: "脑洞开花",
    desc: "你的思维不受重力束缚，是天生的幻想建筑师。总能从异次元带来惊喜，是团队里不可或缺的灵感永动机。",
    color: "bg-purple-100",
    icon: "🌀"
  },
  '7': {
    id: '7',
    name: "丹部落 · 格莱面具",
    title: "调解型人格 · 和平基站",
    trait: "宁静",
    strength: "凝聚",
    skill: "化干戈为玉帛",
    desc: "你拥有让对立双方冷静下来的魔力。是人际关系的润滑剂，总能精准找到共识，让世界因你而更团结。",
    color: "bg-teal-100",
    icon: "🕊️"
  },
  '8': {
    id: '8',
    name: "库巴王国 · 姆瓦什·安博伊面具",
    title: "领袖型人格 · 天选贵族",
    trait: "华丽",
    strength: "统御",
    skill: "华丽控场",
    desc: "你的魅力来自与生俱来的格局与气场。无需刻意强调，就能成为人群的中心，指引方向，天生就是大场面玩家。",
    color: "bg-yellow-100",
    icon: "👑"
  },
  '9': {
    id: '9',
    name: "约鲁巴部落 · 盖莱德面具",
    title: "沟通型人格 · 幽默观察家",
    trait: "诙谐",
    strength: "警世",
    skill: "寓教于乐",
    desc: "你擅长用幽默包裹智慧，在欢声笑语中点破真相。是洞察人性的社交艺术家，你的"吐槽"总让人心服口服。",
    color: "bg-blue-100",
    icon: "👁️"
  },
  '10': {
    id: '10',
    name: "潘格威部落 · 布洛面具",
    title: "治愈型人格 · 月光灵医",
    trait: "通透",
    strength: "抚慰",
    skill: "情绪SPA",
    desc: "你散发着月光般温柔而强大的治愈力。能轻易共情，倾听并净化负能量，是朋友信赖的"心灵按摩师"。",
    color: "bg-cyan-100",
    icon: "🌙"
  },
};