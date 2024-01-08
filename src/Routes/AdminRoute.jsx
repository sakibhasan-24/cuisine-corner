import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

export default function AdminRoute({ children }) {
  const location = useLocation();
  const [isAdmin, isAdminLoading] = useAdmin();
  const { user, loading } = useAuth();
  if (loading || isAdminLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 className="text-gray-6000 text-xl font-semibold">Loading...</h2>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  <Navigate to="/login" state={{ from: location }} replace />;
}
