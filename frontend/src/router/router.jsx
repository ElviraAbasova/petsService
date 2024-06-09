import Home from "../Home";
import Layout from "../Layout";

export const routes= [
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
            path: "/",
            element: <Home/>,
        }
      ]
    },
  ]