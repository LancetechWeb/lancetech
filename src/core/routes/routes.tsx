import { createBrowserRouter } from "react-router-dom";
import RootComponent from "../components/RootComponent";
import Footer from "../../footer/components/Footer";
import Home from "../../home/components/Home";
import About from "../../about/components/About";
import Roles from "../../roles/components/Roles";
import ContactUs from "../../contact-us/components/ContactUs";


const router = createBrowserRouter([
    {
      path: '',
      element: <RootComponent />,
      children: [
        {
          path: '',
          element: <Footer />,
          children: [
            { path: '', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/roles', element: <Roles /> },
          ],
        },
      ],
    },
    { path: '/contact', element: <ContactUs /> },
  ]);

  export default router