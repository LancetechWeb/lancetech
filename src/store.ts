import { configureStore } from '@reduxjs/toolkit';
import { coreReducer } from './core/reducers/coreSlice';
import { uIReducer } from './core/reducers/uiSlice';

export const store = configureStore({
  reducer: {
    uIReducer,
    coreReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat();
  },
});

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;