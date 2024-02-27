export interface Workout {
  id: number;
  type: string;
  date: Date;
  distance: number;
  duration: number;
}

export interface Total {
  type: string;
  _sum: Sum;
  _count: Count;
}

export interface Sum {
  distance: string;
  duration: number;
}
export interface Count {
  type: number;
}
