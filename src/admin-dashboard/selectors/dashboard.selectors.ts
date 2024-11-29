import { RootState } from "../../store";

export const selectOpenDashboardMenu = (state:RootState)=> state.dashboardReducer.openDashboardMenu
export const selectEditRole = (state:RootState)=> state.dashboardReducer.editRole