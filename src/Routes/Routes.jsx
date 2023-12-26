import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Main from "../components/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export default router;
