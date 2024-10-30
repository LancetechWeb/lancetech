import { createBrowserRouter } from "react-router-dom";
import Footerpages from "./FooterPages";
import Home from "../../home/components/Home";
import About from "../../about/components/About";
import Roles from "../../roles/components/Roles";
import ContactUs from "../../contact-us/components/ContactUs";
import AdminAuthWrapper from "../../admin-dashboard/components/AdminAuthWrapper";
import AdminLogin from "../../admin-dashboard/components/AdminLogin";
import ErrorComponent from "../components/ErrorComponent";
import AdminDashboard from "../../admin-dashboard/components/AdminDashboard";
import MenuPagesWrapper from "../components/MenuPagesWrapper";
import RootComponent from "../components/RootComponent";
import ProfileComponent from "../../admin-dashboard/components/ProfileComponent";
import RolesComponent from "../../admin-dashboard/components/RolesComponent";
import SettingsComponent from "../../admin-dashboard/components/SettingsComponent";

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
              { path: 'roles', element: <Roles /> },
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
              {path:'profile', element:<ProfileComponent/>},
              {path:'roles', element:<RolesComponent/>},
              {path:'settings', element:<SettingsComponent/>}
            ] 
          },
        ],
      },
    ]
  },
  { path: '*', element: <ErrorComponent /> },

]);

export default router;
