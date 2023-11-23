import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <nav className="bg-white text-sm text-gray-500">
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-center justify-between p-4">
          <Link className="rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2">
            <Logo />
          </Link>
          <div className="hidden lg:block">
            <ul className="flex cursor-pointer items-center space-x-12 text-lg">
              <li className="group relative">
                <Link className="rounded-md px-2 py-1 focus:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2">
                  Home
                </Link>
              </li>
              <li className=" relative">
                <Link className="rounded-md px-2 py-1 focus:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2">
                  Chat
                </Link>
              </li>
              <li className="group relative">
                <Link className="rounded-md px-2 py-1 focus:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex gap-3">
            <Link
              to="#"
              className="hidden items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-medium text-sky-500 hover:bg-sky-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 lg:flex"
            >
              Login
            </Link>
            <Link
              to="#"
              className="hidden items-center justify-center rounded-md bg-sky-500 px-4 py-2 text-lg font-medium text-white hover:bg-sky-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 lg:flex"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
