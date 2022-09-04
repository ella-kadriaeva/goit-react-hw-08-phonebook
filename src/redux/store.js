import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import { userApi } from './authApi';
import filter from './filter';
import user from './auth';
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
const persistedUserReducer = persistReducer(persistUserConfig, user);
export const store = configureStore({
  reducer: {
    filter,
    [contactsApi.reducerPath]: contactsApi.reducer,
    user: persistedUserReducer,
    contacts: persistedContactsReducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    userApi.middleware,
    contactsApi.middleware,
  ],
});
export const persistor = persistStore(store);
