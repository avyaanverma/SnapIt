import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Inbox from "../pages/Inbox";
import PublicLayout from "../layouts/PublicLayout";
import PrivateLayout from "../layouts/PrivateLayout";
import { AuthProvider } from "../context/AuthContext";
import { SocketProvider } from "../context/SocketContext";

const AppContextWrapper = () => {
  return (
    <AuthProvider>
      <SocketProvider>
        <Outlet /> 
      </SocketProvider>
    </AuthProvider>
  );
};

const router = createBrowserRouter([
  {
    element: <AppContextWrapper />, 
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <PublicLayout />, 
        children: [
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
        ],
      },
      {
        element: <PrivateLayout />, 
        children: [
          { path: "inbox", element: <Inbox /> },
        ],
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;