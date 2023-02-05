import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    darkModeStyle: false,
  },
  reducers: {
    selectDarkMode: (state) => {
      state.darkModeStyle = true;
    },
    deselectDarkMode: (state) => {
      state.darkModeStyle = false;
    },
  },
});

export const { selectDarkMode, deselectDarkMode } = darkModeSlice.actions;

export const selectOpenDarkMode = (state) => state.darkMode.darkModeStyle;

export default darkModeSlice.reducer;
