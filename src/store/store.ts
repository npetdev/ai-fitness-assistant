import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import aiPlanReducer from "../features/aiPlan/aiPlanSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    aiPlan: aiPlanReducer,
  },
});

// Types for Redux hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
