import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Main from "../components/Main";
import Menu from "../Pages/Menu/menu/Menu";
import Order from "../Pages/Order/Order";

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
    ],
  },
]);
export default router;
