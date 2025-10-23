import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface AiPlanState {
  plan: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: AiPlanState = {
  plan: null,
  status: "idle",
};

// AI plan simulation
//Prepare for true API requst
export const generateAiPlan = createAsyncThunk<
  string,
  { energy: number; mood: string; time: number }
>("aiPlan/generateAiPlan", async ({ energy, mood, time }) => {
  // small simulations differente plans
  const routines = [
    "Warm-up: 5 min stretching\nMain: 20 min bodyweight exercises\nCool-down: 5 min breathing",
    "Warm-up: 10 min jogging\nMain: 15 min core exercises\nCool-down: 5 min stretching",
    "Warm-up: 5 min yoga\nMain: 20 min HIIT\nCool-down: 5 min meditation",
    "Warm-up: 5 min jump rope\nMain: 15 min strength training\nCool-down: 5 min stretching",
  ];

  // Adjust routine
  let index = 0;
  if (energy <= 3) index = 0;
  else if (energy <= 6) index = 1;
  else if (energy <= 8) index = 2;
  else index = 3;

  // Delay simulation
  await new Promise((res) => setTimeout(res, 1000));

  return `Mood: ${mood}\nTime available: ${time} min\n\n${routines[index]}`;
});

const aiPlanSlice = createSlice({
  name: "aiPlan",
  initialState,
  reducers: {
    clearPlan(state) {
      state.plan = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateAiPlan.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        generateAiPlan.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.status = "succeeded";
          state.plan = action.payload;
        }
      )
      .addCase(generateAiPlan.rejected, (state) => {
        state.status = "failed";
        state.plan = "Failed to generate plan.";
      });
  },
});

export const { clearPlan } = aiPlanSlice.actions;
export default aiPlanSlice.reducer;
