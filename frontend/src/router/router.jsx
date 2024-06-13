import Layout from "../Layout";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";

export const routes= [
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
            path: "/",
            element: <Home/>,
        },
        {
          path: "/shop",
          element: <Shop/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
    },
      ]
    },
  ]