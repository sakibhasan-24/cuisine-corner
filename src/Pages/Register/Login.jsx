import React from "react";

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
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
          <input
            type="submit"
            value="Login"
            className="bg-slate-100 w-1/3 mx-auto cursor-pointer text-slate-800 py-4 px-8 rounded-lg hover:bg-slate-500 font-bold uppercase transition-colors duration-300"
          />
        </form>
      </div>
    </div>
  );
}
