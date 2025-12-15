export interface Point {
  x: number; // Percentage 0-100
  y: number; // Absolute pixels from top
}

export enum SceneType {
  INTRO = 'INTRO',
  WALKING = 'WALKING',
  QUIZ_STOP = 'QUIZ_STOP',
  ENDING = 'ENDING'
}

export interface Option {
  text: string;
  type: 'A' | 'B' | 'C' | 'D';
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface WaypointData {
  pos: Point;
  questionId?: number;
  isEnd?: boolean;
  totem?: string; // The emoji/asset for the pop-up
}

export interface SceneryItem {
  id: string;
  asset: string;
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

export interface GameState {
  currentWaypointIndex: number;
  characterPosition: Point;
  cameraY: number;
  scene: SceneType;
  isMoving: boolean;
  answers: string[]; // Store accumulated result types
  finalResult: string | null;
}