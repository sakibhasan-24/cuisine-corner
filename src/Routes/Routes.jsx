import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Main from "../components/Main";
import Menu from "../Pages/Menu/menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Register/Login";
import SignUp from "../Pages/Register/SignUp";
import Dashboard from "../components/Dashboard";
import Cart from "../Pages/Dashboard/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/cart",
        element: <Cart />,
      },
    ],
  },
]);
export default router;
