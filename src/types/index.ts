export interface UserState {
  name: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  activityLevel: string;
  experienceLevel: string;
  trainingFrequency: number;
  trainingLocation: string;
  equipment: string;
  goal: string;
  injuries: string;
  healthConditions: string;
  timeAvailable: number;
  energy: number;
  mood: string;
  sleepQuality: string;
  stressLevel: number;
  preferredWorkoutType: string;
}

export interface AiPlanPayload {
  energy: number;
  mood: string;
  timeAvailable: number;
}
