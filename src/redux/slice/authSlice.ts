import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserType = {
  email: string;
  username: string;
};

export interface AuthState {
  isAuthenticated: boolean;
  user: UserType | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserType>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("user");
    },
    checkAuth: (state) => {
      const user = localStorage.getItem("user");
      if (user) {
        state.isAuthenticated = true;
        state.user = JSON.parse(user) as UserType;
      }
    },
  },
});

export const { login, logout, checkAuth } = authSlice.actions;
export default authSlice.reducer;
