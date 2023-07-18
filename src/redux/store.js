import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './auth/slice';
import { filterReducer } from './auth/slice';
import { CONTACTS } from 'redux/constants';
import { authReducer } from './auth/slice';

const persistConfig = {
key: 'root',
storage,
whitelist: ['auth', CONTACTS],
};

console.log(persistConfig);

const rootReducer = {
contacts: contactsReducer,
filter: filterReducer,
auth: persistReducer({
key: 'auth',
storage,
whitelist: ['token'],
}, authReducer),
};

const middleware = [
...getDefaultMiddleware({
serializableCheck: {
ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
},
}),
];

export const store = configureStore({
reducer: rootReducer,
middleware,
devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);