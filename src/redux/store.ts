import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import projectReducer from '@/redux/reducers/projectReducer';
import taskReducer from '@/redux/reducers/taskReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tasks', 'projects'],
};

const rootReducer = combineReducers({
  tasks: taskReducer,
  project: projectReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
