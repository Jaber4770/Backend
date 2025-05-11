import {
    createBrowserRouter,
    } from "react-router";
import App from "../App";
import Users from "./users";
import NewUsers from "./NewUsers";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: '/',
                Component:Users
            },
            {
                path: "/newusers",
                Component:NewUsers,
            }
        ]
    },
]);