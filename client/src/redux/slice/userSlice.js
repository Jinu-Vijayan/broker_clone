import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SIGNIN_START: (state) => {
      state.loading = true;
    },
    SIGNIN_SUCCESS: (state, action) => {
      state.currentUser = action.payload;
      state.error = null;
      state.loading = false;
    },
    SIGNIN_FAILE: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    UPDATE_USER_START: (state) => {
      state.loading = true;
    },
    UPDATE_USER_SUCCESS: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    UPDATE_USER_FAIL: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    DELETE_USER_START: (state) => {
      state.loading = true;
    },
    DELETE_USER_SUCCESS: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    DELETE_USER_FAIL: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    SIGN_OUT_USER_START: (state) => {
      state.loading = true;
    },
    SIGN_OUT_USER_SUCCESS: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    SIGN_OUT_USER_FAIL: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  SIGNIN_FAILE,
  SIGNIN_START,
  SIGNIN_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  SIGN_OUT_USER_FAIL,
  SIGN_OUT_USER_START,
  SIGN_OUT_USER_SUCCESS
} = userSlice.actions;

export default userSlice.reducer;
