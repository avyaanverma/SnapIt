import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router"
import PrivateLayout from '../layouts/PrivateLayout'
import PublicLayout from '../layouts/PublicLayout'
import Home from '../pages/Home'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Inbox from '../pages/Inbox'

const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path: "/",
            element: <PublicLayout/>,
            children: [
                {
                    index:true,
                    element: <Home/>
                },
                {
                    path: "login",
                    element: <Login/>
                },
                {
                    path: "register",
                    element: <Register/>
                }
            ]
        },
        {
            path: "/",
            element: <PrivateLayout/>,
            children: [
                {
                    path: "Inbox",
                    element: <Inbox/>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router}/>
    )
}

export default AppRoutes