import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, refreshUser, logOut } from './operations';
import { nanoid } from '@reduxjs/toolkit';
import { CONTACTS, FILTER } from 'redux/constants';

const filterInitialState = '';

const filterSlice = createSlice({
name: FILTER,
initialState: filterInitialState,
reducers: {
setFilter(state, action) {
return action.payload;
},
},
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

const contactsInitialState = [];

const contactsSlice = createSlice({
name: CONTACTS,
initialState: contactsInitialState,
reducers: {
addedContact: {
reducer(state, action) {
return [...state, action.payload];
},
prepare(name, number) {
return {
payload: {
name,
number,
id: nanoid(),
},
};
},
},
deletedContact(state, action) {
return state.filter(contact => contact.id !== action.payload);
},
},
});

export const { addedContact, deletedContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

const initialState = {
user: { name: null, email: null },
token: null,
isLoggedIn: false,
isLoading: false,
isAuthError: false,
isRefreshing: false,
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
state.isLoading = false;
},
[register.pending](state, _action) {
state.isLoading = true;
},
[register.rejected](state, _action) {
state.isAuthError = true;
state.isLoading = false;
},
[logIn.fulfilled](state, action) {
state.user = action.payload.user;
state.token = action.payload.token;
state.isLoggedIn = true;
state.isAuthError = false;
state.isLoading = false;
},
[logIn.pending](state, _action) {
state.isLoading = true;
},
[logIn.rejected](state, _action) {
state.isAuthError = true;
state.isLoading = false;
},
[logOut.fulfilled](state, _action) {
state.user = { name: null, email: null };
state.token = null;
state.isLoggedIn = false;
state.isAuthError = false;
state.isRefreshing = false;
},
[refreshUser.pending](state, action) {
state.isRefreshing = true;
},
[refreshUser.fulfilled](state, action) {
state.user = action.payload;
state.isLoggedIn = true;
state.isRefreshing = false;
},
[refreshUser.rejected] (state, _action) {
state.isRefreshing = false;
},
},
});

export const authReducer = authSlice.reducer;

// boudgsfghj@gmail.com
// jejbiuhufif
// klmfkjtuihueri652