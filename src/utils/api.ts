import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";
import type {UserState} from "../types/index";
const geminiKey = import.meta.env.VITE_GEMINI_API_KEY!;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY!;
export const supabase = createClient(supabaseUrl, supabaseKey);

// Initialization Gemini AI SDK
const genAI = new GoogleGenerativeAI(geminiKey);
// Calls the Gemini API via the Node.js SDK and returns the generated plan
export const fetchAiPlan = async (payload: UserState): Promise<string> => {
  try {
    const prompt = `
Create a personalized daily workout plan for the user with the following parameters:

Name: ${payload.name}
Gender: ${payload.gender}
Age: ${payload.age}
Height: ${payload.height} cm
Weight: ${payload.weight} kg
Activity Level: ${payload.activityLevel}
Experience Level: ${payload.experienceLevel}
Training Frequency: ${payload.trainingFrequency} times per week
Training Location: ${payload.trainingLocation}
Available Equipment: ${payload.equipment}
Primary Goal: ${payload.goal}
Injuries or Limitations: ${payload.injuries}
Health Conditions: ${payload.healthConditions}
Available Time: ${payload.timeAvailable} minutes
Energy Level: ${payload.energy}/10
Mood: ${payload.mood}
Sleep Quality: ${payload.sleepQuality}
Stress Level: ${payload.stressLevel}/10
Preferred Workout Type: ${payload.preferredWorkoutType}

Generate a workout plan with three clear sections:
1. Warm-up
2. Main Workout
3. Cool-down

Keep instructions concise, structured, and only include exercises, sets, and duration. Do not add motivational phrases or unnecessary details.
`;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const response = result.response;

    return response.text();
  } catch (error: any) {
    console.error("Error fetching AI plan:", error);
    throw new Error("Failed to generate AI plan");
  }
};
