import Layout from "../Layout";
import Admin from "../Pages/Admin";
import Basket from "../Pages/Basket";
import Contact from "../Pages/Contact";
import Detail from "../Pages/Detail";
import Favorite from "../Pages/Favorite";
import Grooming from "../Pages/Grooming";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import Shop from "../Pages/Shop";
import Veterinary from "../Pages/Veterinary";
import Work from "../Pages/Work";

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
        path: "/:id",
        element: <Detail />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/grooming",
        element: <Grooming />,
      },
      {
        path: "/veterinary",
        element: <Veterinary />,
      },
      {
        path: "/admin",
        element: <Admin />,
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
  },
  {
    path: "/work",
    element: <Work />,
  },
];
