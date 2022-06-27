import { createSlice } from "@reduxjs/toolkit";

const toggleVisibility = createSlice({
  name: "toggle",
  initialState: { show: false },
  reducers: {
    toggleVisibility(state) {
      state.show = !state.show;
    },
  },
});

export const toggleActions = toggleVisibility.actions;
export default toggleVisibility.reducer;
