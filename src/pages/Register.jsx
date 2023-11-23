import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const Register = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, password2 } = formInput;

  const onChange = (e) => {
    setFormInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      console.log("passwords do not match");
    }

    console.log(formInput);
  };

  return (
    <div>
      <main className="flex h-screen w-full flex-col items-center justify-center px-4">
        <div className="w-full max-w-sm space-y-5 text-gray-600">
          <div className="pb-8 text-center">
            <Logo />
            <div className="mt-5">
              <h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                Register a New Account
              </h3>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <input
                onChange={onChange}
                type="email"
                id="email"
                name="email"
                value={email}
                required
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                onChange={onChange}
                type="password"
                id="password"
                name="password"
                value={password}
                required
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
              />
            </div>
            <div>
              <label className="font-medium">Confirm Password</label>
              <input
                onChange={onChange}
                type="password"
                id="password2"
                name="password2"
                value={password2}
                required
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <a
                href="javascript:void(0)"
                className="text-center text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
            <button className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white duration-150 hover:bg-indigo-500 active:bg-indigo-600">
              Sign in
            </button>
          </form>
          <button className="flex w-full items-center justify-center gap-x-3 rounded-lg border py-2.5 text-sm font-medium duration-150 hover:bg-gray-50 active:bg-gray-100">
            <FaGoogle />
            Continue with Google
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              login{" "}
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;
