import { createSlice } from '@reduxjs/toolkit';
import { register, logIn } from './operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isAuthError: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
      [register.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isAuthError = false;
      },
      [register.rejected](state, _action){
        state.isAuthError = true;
      },
      [logIn.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isAuthError = false;
      },
      [logIn.rejected](state, _action){
        state.isAuthError = true;
      },
    },
});

export const authReducer = authSlice.reducer;

// boudgsfghj@gmail.com
// jejbiuhufif
// klmfkjtuihueri652