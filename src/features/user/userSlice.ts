import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface UserState {
  name: string;
  energy: number;
  mood: string;
  time: number; // available workout time in minutes
}

const initialState: UserState = {
  name: "",
  energy: 0,
  mood: "",
  time: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEnergy: (state, action: PayloadAction<number>) => {
      state.energy = action.payload;
    },
    setMood: (state, action: PayloadAction<string>) => {
      state.mood = action.payload;
    },
    setTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload;
    },
  },
});

export const { setName, setEnergy, setMood, setTime } = userSlice.actions;
export default userSlice.reducer;
