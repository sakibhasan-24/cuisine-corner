import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Main from "../components/Main";
import Menu from "../Pages/Menu/menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Register/Login";
import SignUp from "../Pages/Register/SignUp";
import Dashboard from "../components/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import Allusers from "../components/Allusers";
import AdminRoute from "./AdminRoute";
import AddItems from "../components/AddItems";
import Protected from "./Protected";

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
    element: (
      <Protected>
        <Dashboard />
      </Protected>
    ),
    children: [
      {
        path: "/dashboard/cart",
        element: <Cart />,
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <Allusers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addItems",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
