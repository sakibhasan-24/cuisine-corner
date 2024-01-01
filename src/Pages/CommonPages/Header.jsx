import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

export default function Header() {
  const { user, userLogOut } = useContext(AuthContext);
  const handleLogOut = () => {
    userLogOut().then(() => {
      Swal.fire("Logout", "User Logout Successfully", "success");
    });
  };
  return (
    <header>
      <nav className="max-w-6xl shadow-2xl my-6 mx-auto p-6 flex items-center justify-between">
        <div>
          <h2 className="font-bold text-xl">
            Cuisine corner <br />
            <span className="block  text-orange-700 text-2xl"> restaurant</span>
          </h2>
        </div>
        <div className="flex gap-4">
          <a href="#" className="p-2 font-bold">
            Home
          </a>
          <Link to="/menu" className="p-2 font-bold">
            Menu
          </Link>
          <Link to="/order/salad" className="p-2 font-bold">
            Order
          </Link>
          <a href="#" className="p-2 font-bold">
            Contact
          </a>
          {user ? (
            <Link onClick={handleLogOut} to="/login" className="p-2 font-bold">
              LogOut
            </Link>
          ) : (
            <Link to="/login" className="p-2 font-bold">
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
