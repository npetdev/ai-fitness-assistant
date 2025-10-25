import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAiPlan } from "../../utils/api";
import type { UserState } from "../../types";

interface AiPlanState {
  plan: string | null;
  status: "idle" | "loading" | "failed";
}

const initialState: AiPlanState = {
  plan: null,
  status: "idle",
};

export const generateAiPlan = createAsyncThunk(
  "aiPlan/generate",
  async (payload: UserState) => {
    return await fetchAiPlan(payload);
  }
);

export const aiPlanSlice = createSlice({
  name: "aiPlan",
  initialState,
  reducers: {
    clearPlan: (state) => {
      state.plan = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateAiPlan.pending, (state) => { state.status = "loading"; })
      .addCase(generateAiPlan.fulfilled, (state, action) => {
        state.plan = action.payload;
        state.status = "idle";
      })
      .addCase(generateAiPlan.rejected, (state) => { state.status = "failed"; });
  },
});

export const { clearPlan } = aiPlanSlice.actions;
export default aiPlanSlice.reducer;
