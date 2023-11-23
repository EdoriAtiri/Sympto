import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MobileNav = ({ close }) => {
  return (
    <div className="absolute inset-0 z-50 h-full w-full">
      {/* Dark overlay */}
      <button
        onClick={close}
        className=" h-full w-full bg-black opacity-30"
      ></button>

      <div className="z-60 absolute left-1/2 top-1/2 h-96 w-64 -translate-x-1/2 -translate-y-1/2 rounded bg-sky-50 p-4 text-gray-900">
        <ul className="flex flex-col gap-3">
          <li className="border-b  text-xl font-bold hover:border-sky-500 focus:border-sky-500">
            <Link onClick={close} className="block w-full p-2" to="/">
              Home
            </Link>
          </li>
          <li className="border-b  text-xl font-bold hover:border-sky-500 focus:border-sky-500">
            <Link onClick={close} className="block w-full p-2" to="/chat">
              Chat
            </Link>
          </li>
          <li className="border-b  text-xl font-bold hover:border-sky-500 focus:border-sky-500">
            <Link onClick={close} className="block w-full p-2" to="">
              About
            </Link>
          </li>
          <li className="border-b  text-xl font-bold hover:border-sky-500 focus:border-sky-500">
            <Link onClick={close} className="block w-full p-2" to="/login">
              Login
            </Link>
          </li>
          <li className=" text-xl font-bold hover:border-b hover:border-sky-500 focus:border-sky-500">
            <Link onClick={close} className="block w-full p-2" to="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

MobileNav.propTypes = {
  close: PropTypes.func,
};

export default MobileNav;
