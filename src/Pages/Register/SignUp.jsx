import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

export default function SignUp() {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      return alert("password must be 6 characters long");
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      return alert("password must contain one uppercase");
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      return alert("password must contain one special character");
    }
    createUser(email, password).then((user) => {
      const currentUser = user.user;
      currentUser.displayName = name;
      console.log(currentUser);
    });
  };
  return (
    <div className="max-w-6xl mx-auto my-12 ">
      <h1 className="text-5xl text-center font-bold text-white">
        Please SignUp
      </h1>
      <div className=" p-6  items-center justify-center">
        <form
          onSubmit={handleSignUp}
          className="flex flex-col gap-6 max-w-2xl mx-auto  "
        >
          <input
            type="name"
            name="name"
            id="name"
            placeholder="name..."
            className="border-0 w-full focus:outline-none bg-slate-300 rounded-lg py-4 px-3 text-gray-700"
          />
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

          <input
            type="submit"
            value="signUp"
            className="bg-slate-100 w-1/3 mx-auto cursor-pointer text-slate-800 py-4 px-8 rounded-lg hover:bg-slate-500 font-bold uppercase transition-colors duration-300"
          />
        </form>
        <p className="text-center font-semibold">
          register?{" "}
          <Link className="text-blue-500" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
