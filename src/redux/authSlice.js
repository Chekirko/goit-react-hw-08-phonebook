import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
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

    [refreshUser.fulfilled]: (state, { payload }) => {
      console.log(payload.name);
      return {
        ...state,
        user: {
          ...state.user,
          name: payload.name,
          email: payload.email,
        },
        isLoggedIn: true,
      };
    },
  },
});

export const authReducer = authSlice.reducer;
