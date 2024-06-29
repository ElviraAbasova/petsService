import { Navigate } from "react-router-dom";
import Layout from "../Layout";
import NoPage from "../Pages/404Page";
import Admin from "../Pages/Admin";
import AsistanChat from "../Pages/AsistanChat/Index";
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
import { ProtectedAdmin, ProtectedAsistan, ProtectedProfile, ProtectedWork } from "./protectedRouter";


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
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedProfile element={<Profile />} profile={true} />
        ),
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
        element: (
          <ProtectedAdmin element={<Admin />} adminOnly={true} />
        ),
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
    element: (
      <ProtectedWork element={<Work/>} worker={true} />
    ),
  },
  {
    path: "/404",
    element: <NoPage/>, 
  },
  {
    path: "*", 
    element: <Navigate to="/404" replace />,
  },
  {
    path: "/assistan",
    element: (
      <ProtectedAsistan element={<AsistanChat/>} adminOnly={true} />
    ),
  },
];
