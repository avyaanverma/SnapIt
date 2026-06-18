import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import PrivateLayout from "../layouts/PrivateLayout";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Inbox from "../pages/Inbox";

// Optimized: Defined router outside the component to prevent re-creation on re-renders
let router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "inbox", // Fixed: Changed "Inbox" to lowercase "inbox" for URL consistency
        element: <Inbox />,
      },
    ],
  },
]);
const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
