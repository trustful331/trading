import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, AuthUser } from "./types";

const initialState: AuthState = {
  user: {
    id: "demo-client",
    firstName: "Amina",
    lastName: "Rahman",
    email: "amina.rahman@email.com",
  },
  token: "",
  currentRole: "CLIENT",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<AuthUser | null>) => {
      state.user = action.payload;
    },
    setRole: (state, action: PayloadAction<string | null>) => {
      state.currentRole = action.payload;
    },
  },
});

export const setUser = authSlice.actions.setUser;
export const setToken = authSlice.actions.setToken;
export const setRole = authSlice.actions.setRole;

const AuthSlice = authSlice.reducer;
export default AuthSlice;
