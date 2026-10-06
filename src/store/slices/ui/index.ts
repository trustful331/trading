import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ThemeMode = "dark" | "light";

type UiState = {
  theme: ThemeMode;
  sidebarCollapsed: boolean;
};

const initialState: UiState = {
  theme: "dark",
  sidebarCollapsed: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
    setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.sidebarCollapsed = action.payload;
    },
  },
});

export const { setTheme, toggleTheme, setSidebarCollapsed } = uiSlice.actions;
const UiSlice = uiSlice.reducer;
export default UiSlice;
