import { RootState } from "../../store";

export const selectIsAuthenticated = (state:RootState) => state.coreReducer.isAuthenticated;

export const selectPreviousPage = (state:RootState) => state.coreReducer.previousPage;