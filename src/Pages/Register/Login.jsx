import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

export default function Login() {
  const currentRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [disabled, setDisabled] = useState(true);
  const [captcha, setCaptcha] = useState("");
  const { userLogIn } = useContext(AuthContext);
  //   console.log(captcha);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);
    userLogIn(email, password).then((result) => {
      const user = result.user;
      //   console.log(user);
      form.reset();
      Swal.fire("Login Successfully", "", "success");
      navigate(from, { replace: true });
    });
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidate = () => {
    const value = currentRef.current.value;
    // console.log(value);
    if (validateCaptcha(value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div className="max-w-6xl mx-auto my-12 ">
      <h1 className="text-5xl text-center font-bold text-white">
        Please Login
      </h1>
      <div className=" p-6  items-center justify-center">
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-6 max-w-2xl mx-auto  "
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email..."
            className="border-0 w-full focus:outline-none bg-slate-300 rounded-lg py-4 px-3 text-gray-700"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password..."
            className="border-0 w-full focus:outline-none bg-slate-300 rounded-lg py-4 px-3 text-gray-700"
          />
          <LoadCanvasTemplate />
          <input
            type="captcha"
            name="captcha"
            id="captcha"
            placeholder="captcha..."
            ref={currentRef}
            className="border-0 w-1/4 mx-auto focus:outline-none bg-slate-300 rounded-lg py-2 px-3 text-gray-700"
          />
          <button
            type="button"
            className="w-1/4 mx-auto bg-slate-100 text-slate-800 py-1 px-4 rounded-lg hover:bg-slate-500 font-bold"
            onClick={handleValidate}
          >
            validate
          </button>

          <input
            type="submit"
            disabled={disabled}
            value={disabled ? "not validate yet..." : "submit"}
            className="bg-slate-100 w-1/3 mx-auto cursor-pointer text-slate-800 py-4 px-8 rounded-lg hover:bg-slate-500 font-bold uppercase transition-colors duration-300"
          />
        </form>
        <p className="text-center font-semibold">
          new here?{" "}
          <Link className="text-blue-500" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
