import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Orders from "../components/Orders";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../components/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
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
                path: "/orders",
                element: (
                    <PrivateRoutes>
                        <Orders />
                    </PrivateRoutes>
                ),
            },
            {
                path: "/profile",
                element: (
                    <PrivateRoutes>
                        <Profile />
                    </PrivateRoutes>
                ),
            },
        ],
    },
]);

export default router;
