import { createBrowserRouter } from "react-router-dom";
import Footerpages from "./FooterPages";
import Home from "../../home/components/Home";
import About from "../../about/components/About";
import RolesPage from "../../roles/components/RolesPage";
import ContactUs from "../../contact-us/components/ContactUs";
import AdminAuthWrapper from "../../admin-dashboard/components/AdminAuthWrapper";
import AdminLogin from "../../admin-dashboard/components/AdminLogin";
import ErrorComponent from "../components/ErrorComponent";
import AdminDashboard from "../../admin-dashboard/components/AdminDashboard";
import MenuPagesWrapper from "../components/MenuPagesWrapper";
import RootComponent from "../components/RootComponent";
import ProfileComponent from "../../admin-dashboard/components/ProfileComponent";
import DashboardRolesComponent from "../../admin-dashboard/components/DashboardRolesComponent";
import SettingsComponent from "../../admin-dashboard/components/SettingsComponent";
import { DashboardMenu } from "../../admin-dashboard/types/dashboard.types";
import RoleDetails from "../../roles/components/RoleDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootComponent />,
    children: [
      {
        path: '/',
        element: <MenuPagesWrapper />,
        children: [
          {
            path: '/',
            element: <Footerpages />,
            children: [
              { index: true, element: <Home /> },
              { path: 'home', element: <Home /> },
              { path: 'about', element: <About /> },
              { 
                path: 'roles', 
                element: <RolesPage />, 
                children:[
                  { path: ':roleId', element: <RoleDetails /> },
                ]
              },
            ],
          },
          
        ],
      },
      { path: '/contact', element: <ContactUs /> },
      {
        path: '/admin',
        element: <AdminAuthWrapper />,
        children: [
          { path: 'login', element: <AdminLogin /> },
          { 
            path: 'dashboard', 
            element: <AdminDashboard />,
            children:[
              {index: true, element:<ProfileComponent/>},
              {path:DashboardMenu.PROFILE, element:<ProfileComponent/>},
              {path:DashboardMenu.ROLES, element:<DashboardRolesComponent/>},
              {path:DashboardMenu.SETTINGS, element:<SettingsComponent/>}
            ] 
          },
        ],
      },
    ]
  },
  { path: '*', element: <ErrorComponent /> },

]);

export default router;
