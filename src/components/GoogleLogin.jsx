import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";
import usePublicAxios from "../Hooks/usePublicAxios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function GoogleLogin() {
  const { googleLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const useAxious = usePublicAxios();
  const handleGoogleLogin = () => {
    googleLogIn().then((result) => {
      const user = result.user;
      const userInfo = {
        name: user.displayName,
        email: user.email,
      };

      useAxious.post("/users", userInfo).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Successfully Logged In",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/");
      });
    });
  };
  return (
    <div className="flex items-center justify-center my-6">
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="flex 
        items-center justify-center gap-2 bg-slate-600 p-4 rounded-lg text-white hover:bg-slate-700"
      >
        <FaGoogle className="inline " /> Sign In with Google
      </button>
    </div>
  );
}
