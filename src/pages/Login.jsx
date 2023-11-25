import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Logo from "../components/Logo";
import { login, reset } from "../features/Auth/authSlice";
import Loading from "../components/Loading";

const Login = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });
  const { userAuth, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );

  const { email, password } = formInput;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Redirect when logged in
    if (userAuth) {
      navigate("/getstarted");
    }

    dispatch(reset());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, message, isSuccess, userAuth, navigate]);

  const onChange = (e) => {
    setFormInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(login(formInput));

    console.log(formInput);
  };

  return (
    <div>
      {isLoading && <Loading />}
      <main className="flex h-screen w-full flex-col items-center justify-center px-4">
        <div className="w-full max-w-sm space-y-5 text-gray-600">
          <div className="pb-8 text-center">
            <Logo />
            <div className="mt-5">
              <h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                Log in to your account
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

          <p className="text-center">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              sign up{" "}
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
