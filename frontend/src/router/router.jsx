import Layout from "../Layout";
import Basket from "../Pages/Basket";
import Contact from "../Pages/Contact";
import Detail from "../Pages/Detail";
import Favorite from "../Pages/Favorite";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import Shop from "../Pages/Shop";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
];
