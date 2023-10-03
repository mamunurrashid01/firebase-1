import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLAyout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../pages/Private/PrivateRoute";
import Orders from "../pages/orders/Orders";
import Profile from "../pages/profile/Profile";


const myCeatedRouter = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children: [
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"/about",
                element:<About></About>,
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/orders",
                element:<PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path:"/profile",
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])

export default myCeatedRouter;