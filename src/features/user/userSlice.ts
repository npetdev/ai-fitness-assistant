import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { UserState } from "../../types/index";
import { initialUserState } from "../../constants/initialUserState";

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
    clearUserData: () => initialUserState,
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
