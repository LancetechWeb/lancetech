
export interface DashboardInitialState{
    openDashboardMenu: boolean,
}

export enum DashboardMenu {
    PROFILE = "Profile",
    ROLES = "Roles",
    SETTINGS = "Settings"
}


export const DashboardMenuObject:Record<DashboardMenu, {menu:DashboardMenu, icon:string, path:string}> = {
    [DashboardMenu.PROFILE]: {
        menu: DashboardMenu.PROFILE,
        icon: "account_box",
        path: "profile"
    },
    [DashboardMenu.ROLES]: {
        menu: DashboardMenu.ROLES,
        icon: "work",
        path: "roles"
    },
    [DashboardMenu.SETTINGS]: {
        menu: DashboardMenu.SETTINGS,
        icon: "settings",
        path: "settings"
    }
}

export const DashboardMenus = Object.values(DashboardMenuObject)
