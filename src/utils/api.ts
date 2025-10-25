import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";

const geminiKey = import.meta.env.VITE_GEMINI_API_KEY!;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY!;
export const supabase = createClient(supabaseUrl, supabaseKey);
// Initialization Gemini AI SDK
const genAI = new GoogleGenerativeAI(geminiKey);

interface AiPlanPayload {
  energy: number;
  mood: string;
  time: number;
}

// Calls the Gemini API via the Node.js SDK and returns the generated plan.
export const fetchAiPlan = async (payload: AiPlanPayload): Promise<string> => {
  try {
    const prompt = `
Create a personalized daily workout plan for the user with the following parameters:
Energy level: ${payload.energy}
Mood: ${payload.mood}
Available time: ${payload.time} minutes.
Include sections for warm-up, main workout, and cool-down.
The response should be clear and concise, without motivational phrases—only list what to do.
Remove all unnecessary details and keep it as short as possible.
`;
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const response = result.response;
    // Return the text from the response
    return response.text();
  } catch (error: any) {
    console.error("Error fetching AI plan:", error);
    throw new Error("Failed to generate AI plan");
  }
};
