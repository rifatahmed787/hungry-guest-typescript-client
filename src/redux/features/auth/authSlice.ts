import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { IAuthState } from "./authSlice.type";
import { RootState } from "../../store";

const initialState: IAuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<IAuthState>) {
      // Cookies.set("token", action.payload.accessToken);
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },

    logout(state) {
      Cookies.remove("token");
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    },

    updateToken: (
      state,
      action: PayloadAction<{
        accessToken: string;
        refreshToken: string | null;
      }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
export const selectAuth = (state: RootState) => state.auth;

export const { login, logout, updateToken } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
