import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        user: {
          ...state.user,
          name: payload.user.name,
          email: payload.user.email,
        },
        token: payload.token,
        isLoggedIn: true,
        error: null,
      };
    },

    [register.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload.name,
      };
    },

    [logIn.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        user: {
          ...state.user,
          name: payload.user.name,
          email: payload.user.email,
        },
        token: payload.token,
        isLoggedIn: true,
        error: null,
      };
    },

    [logIn.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload.name,
      };
    },

    [logOut.fulfilled]: state => {
      return {
        ...state,
        user: {
          ...state.user,
          name: null,
          email: null,
        },
        token: null,
        isLoggedIn: false,
        error: null,
      };
    },

    [logOut.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload.name,
      };
    },

    [refreshUser.pending]: state => {
      return {
        ...state,
        isRefreshing: true,
      };
    },

    [refreshUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        user: {
          ...state.user,
          name: payload.name,
          email: payload.email,
        },
        isLoggedIn: true,
        isRefreshing: false,
      };
    },

    [refreshUser.rejected]: state => {
      return {
        ...state,
        isRefreshing: false,
      };
    },
  },
});

export const authReducer = authSlice.reducer;
