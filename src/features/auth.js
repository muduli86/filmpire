import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuthenticated: false,
  sessionId: "",
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
      state.isAuthenticated = true;
      state.sessionId = localStorage.getItem("session_Id");
      localStorage.setItem("accountId", action.payload.id);
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
export const userSelector = (state) => state.user;
