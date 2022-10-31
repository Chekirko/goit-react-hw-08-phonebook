import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
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
