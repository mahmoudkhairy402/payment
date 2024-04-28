import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: "/",
};

const activeSlice = createSlice({
  name: "link",
  initialState,
  reducers: {
    setActiveState: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setActiveState } = activeSlice.actions;
export const getActiveState = (state) => state.link.active;

export default activeSlice.reducer;
