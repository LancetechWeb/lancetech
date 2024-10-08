import { createBrowserRouter } from "react-router-dom";
import RootComponent from "../components/RootComponent";
import Footerpages from "./FooterPages";
import Home from "../../home/components/Home";
import About from "../../about/components/About";
import Roles from "../../roles/components/Roles";
import ContactUs from "../../contact-us/components/ContactUs";
import AdminAuthWrapper from "../../admin-dashboard/components/AdminAuthWrapper";
import AdminLogin from "../../admin-dashboard/components/AdminLogin";
import ErrorComponent from "../components/ErrorComponent";


const router = createBrowserRouter([
    {
      path: '',
      element: <RootComponent />,
      children: [
        {
          path: '',
          element: <Footerpages />,
          children: [
            { path: '', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/roles', element: <Roles /> },
            {
              path:"*",
              element:<ErrorComponent/>
            }
          ],
        },
        
        
      ],
    },
    { path: '/contact', element: <ContactUs /> },
    {
      path:"/admin",
      element:<AdminAuthWrapper/>,
      children:[
        {
          path:"",
          element:<AdminLogin/>
        },
        {
          path:"/admin/login",
          element:<AdminLogin/>
        }
      ]
    },
    
  ]);

  export default router