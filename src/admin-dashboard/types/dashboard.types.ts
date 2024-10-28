export enum DashboardMenu {
    PROFILE = "Profile",
    ROLES = "Roles"
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
    }
}

export const DashboardMenus = Object.values(DashboardMenuObject)
