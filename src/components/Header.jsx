import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "./Logo";
import { FaPlus, FaTimes } from "react-icons/fa";
import { useState } from "react";
import MobileNav from "./MobileNav";
import UserIcon from "./UserIcon";

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const { userAuth } = useSelector((state) => state.auth);

  const close = () => {
    setIsMobileMenu(false);
  };
  return (
    <nav className="bg-white text-sm text-gray-500">
      {isMobileMenu && <MobileNav close={close} />}
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-center justify-between p-4">
          <div>
            <Link className="rounded-full focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2">
              <Logo />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex cursor-pointer items-center space-x-8 text-lg lg:space-x-12">
              <li className="group relative">
                <Link
                  to="/"
                  className="rounded-md px-2 py-1 focus:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="/chat"
                  className="rounded-md px-2 py-1 focus:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
                >
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

          {userAuth ? (
            <button className="hidden md:block">
              <UserIcon />
            </button>
          ) : (
            <div className="hidden gap-3 md:flex">
              <Link
                to="/login"
                className="items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-medium text-sky-500 hover:bg-sky-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 lg:flex"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="items-center justify-center rounded-md bg-sky-500 px-4 py-2 text-lg font-medium text-white hover:bg-sky-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 lg:flex"
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile Hamburger */}
          {
            <button onClick={() => setIsMobileMenu(true)} className="md:hidden">
              {isMobileMenu ? (
                <FaTimes size="2.5em" />
              ) : (
                <FaPlus size="2.5em" />
              )}
            </button>
          }
        </div>
      </div>
    </nav>
  );
};

export default Header;
