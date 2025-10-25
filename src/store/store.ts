import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import aiPlanReducer from "../features/aiPlan/aiPlanSlice";

// Configure Redux store with user and AI plan slices
export const store = configureStore({
  reducer: {
    user: userReducer,
    aiPlan: aiPlanReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
