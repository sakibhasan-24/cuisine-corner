import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
