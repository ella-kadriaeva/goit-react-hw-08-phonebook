import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import { authApi } from './authApi';
import filter from './filter';
import auth from './auth';
import contacts from './contacts';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistContactsConfig = {
  key: 'contacts',
  version: 1,
  storage,
};
const persistedContactsReducer = persistReducer(
  persistContactsConfig,
  contacts
);
const persistUserConfig = {
  key: 'user',
  version: 1,
  storage,
  whitelist: ['token'],
};
const persistedUserReducer = persistReducer(persistUserConfig, auth);
export const store = configureStore({
  reducer: {
    filter,
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: persistedUserReducer,
    contacts: persistedContactsReducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
});
export const persistor = persistStore(store);
