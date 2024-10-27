import { configureStore } from '@reduxjs/toolkit';
import { coreReducer } from './core/reducers/coreSlice';
import { uIReducer } from './core/reducers/uiSlice';
import { dashboardReducer } from './admin-dashboard/reducers/dashboard.reducers';

export const store = configureStore({
  reducer: {
    uIReducer,
    coreReducer,
    dashboardReducer
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat();
  },
});

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;