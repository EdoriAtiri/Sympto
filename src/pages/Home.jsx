import {
  FaArrowRight,
  FaAt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import onlineTest from "../assets/online_test.svg";
import person from "../assets/person-using-pc-.jpg";
import metrics1 from "../assets/metrics-img-1.png";

const Home = () => {
  return (
    <div>
      {/* Nav */}
      <nav className="bg-white text-sm text-gray-500">
        <div className="relative mx-auto max-w-6xl">
          <div className="flex items-center justify-between p-4">
            <Link className="rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2">
              <span className="font-cursive text-4xl text-sky-900">
                SymptoSage
              </span>
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

      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col bg-white px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
          <h1 className="text-4xl text-gray-800 md:text-6xl">
            Navigate Your Health Journey with AI Wisdom
          </h1>
          <p className="pt-6 text-xl font-light text-gray-400">
            SymptoSage is your AI companion for instant symptom insights and
            medical guidance. Unlock the power of AI-driven conversations,
            providing you with rapid responses and informed suggestions. Your
            virtual health advisor is just a chat away!
          </p>
        </div>

        <Link className="mx-auto mt-8 flex items-center gap-4 rounded-md bg-sky-500 px-6 py-3 text-lg font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400  focus:ring-offset-2">
          <span>Get Started</span> <FaArrowRight />
        </Link>
      </section>

      {/* <!-- Video section --> */}
      <section className="w-full">
        <div className="relative h-full w-full">
          <div className="relative z-30 mx-auto w-4/5 max-w-5xl overflow-hidden rounded-xl px-4 sm:w-full sm:px-8">
            <div className=" aspect-video w-auto overflow-hidden rounded-xl">
              {/*  */}
              <img className="h-full w-full object-cover" src={person} alt="" />
            </div>
          </div>
          <div className="absolute bottom-0 h-1/2 w-full">
            <div className="absolute top-0 z-10 h-[6vw] w-full -translate-y-1/2 -skew-y-3 transform bg-white"></div>
            <div className="absolute top-0 z-0 h-full w-full bg-sky-900"></div>
          </div>
        </div>
      </section>

      {/* <!-- 3 Steps section --> */}
      <section className="w-full bg-sky-900">
        <div className="relative h-full w-full pb-[6vw] pt-24">
          <div className="mx-auto flex max-w-5xl flex-col items-center px-4 sm:flex-row sm:px-8">
            <div className="text-center sm:order-2 sm:text-left">
              <h2 className="text-3xl text-white">
                Revolutionizing the way you approach healthcare, our application
                leverages AI to guide users through symptom descriptions,
                offering preliminary medical advice instantly.
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Say goodbye to uncertainty and hello to informed decisions about
                your health. With our AI-powered chatbot.
              </p>
            </div>
            <div className="mx-[15vw] mt-6 sm:mx-0 sm:mt-0 sm:pr-16">
              <img src={onlineTest} alt="" className="h-auto w-full" />
            </div>
          </div>
          <div className="mx-auto mb-24 mt-12 flex max-w-5xl flex-col px-4 sm:flex-row sm:px-8">
            <div className="relative flex flex-1 flex-row sm:flex-col sm:items-start">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gray-500 p-6 text-xl text-gray-100">
                1
              </div>
              <div className="absolute top-6 z-0 hidden w-full border-b-2 border-gray-600 sm:block"></div>
              <div className="mb-10 ml-6 w-auto sm:mb-0 sm:ml-0 sm:mr-6">
                <h3 className="text-gray-100 sm:mt-4">Register an account</h3>
                <p className="mt-2 text-gray-300">
                  Provide the necessary data about your person to get up and
                  running.
                </p>
              </div>
            </div>
            <div className="relative flex flex-1 flex-row sm:flex-col sm:items-start">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gray-500 p-6 text-xl text-gray-100">
                2
              </div>
              <div className="absolute top-6 z-0 hidden w-full border-b-2 border-gray-600 sm:block"></div>
              <div className="mb-10 ml-6 w-auto sm:mb-0 sm:ml-0 sm:mr-6">
                <h3 className="text-gray-100 sm:mt-4">
                  Share symptoms with SymptoSage
                </h3>
                <p className="mt-2 text-gray-300">
                  through an intuitive conversation discuss your symptoms with
                  our AI health chatbot
                </p>
              </div>
            </div>
            <div className="relative flex flex-1 flex-row sm:flex-col sm:items-start">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gray-500 p-6 text-xl text-gray-100">
                3
              </div>
              <div className="mb-10 ml-6 w-auto sm:mb-0 sm:ml-0 sm:mr-6">
                <h3 className="text-gray-100 sm:mt-4">
                  Recieved informed response{" "}
                </h3>
                <p className="mt-2 text-gray-300">
                  Get a personalized response on the symptoms you shared
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 z-10 h-[6vw] w-full translate-y-1/2 skew-y-3 transform bg-white"></div>
        </div>
      </section>

      {/* <!-- Metrics section --> */}
      <section className="relatvie z-20 w-full">
        <div className="relative -top-24 mx-auto flex max-w-5xl flex-col px-4 pt-8 md:flex-row md:px-8">
          <div className="relative md:order-2 md:w-1/2">
            <div className="mx-auto w-full max-w-md">
              <div className="aspect-w-7 aspect-h-8 relative w-full">
                <div className="absolute h-auto w-full">
                  <img
                    src={metrics1}
                    alt=""
                    className="absolute left-0 top-0 z-20 hidden h-auto w-2/3 rounded-xl border shadow-2xl md:block"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 md:w-1/2">
            <div className="relative z-20 flex h-full flex-col justify-center pt-4 md:pr-8 md:pt-0">
              <h2 className="text-3xl text-gray-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing.{" "}
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Gathering and analyzing your symptoms is a key part of personal
                health, but the amount of time and effort it takes to collect,
                study and research symptoms can be a challenge. We store all of
                your health information in a secure database with powerful
                reporting tools tools to make it easy to manage.
              </p>
              <ul className="grid grid-cols-1 gap-4 py-8 text-green-800 md:grid-cols-2">
                <li className="flex">
                  <div className="mr-2 h-6 w-6 rounded-full bg-green-50 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  Report Summaries
                </li>
                <li className="flex">
                  <div className="mr-2 h-6 w-6 rounded-full bg-green-50 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  Symptom tracking
                </li>
                <li className="flex">
                  <div className="mr-2 h-6 w-6 rounded-full bg-green-50 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  Hospital Liason
                </li>
                <li className="flex">
                  <div className="mr-2 h-6 w-6 rounded-full bg-green-50 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  On/offboarding
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Get started button --> */}
      <section className="w-full bg-sky-900 py-16">
        <hr className="mx-auto max-w-5xl border-gray-600 pb-12" />
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-4 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left lg:px-8">
          <div>
            <h2 className="text-xl text-gray-200">
              Register today. Get started tomorrow.
            </h2>
            <p className="mt-1 text-lg text-gray-400">
              No more headaches. We simplify symptom identification
            </p>
          </div>
          <Link
            to=""
            className="flex items-center justify-center rounded-md bg-sky-600 px-6 py-3 text-lg font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-sky-900"
          >
            Get Started
          </Link>
        </div>
        <hr className="mx-auto mt-12 max-w-5xl border-gray-600" />
      </section>

      <footer className="bg-sky-900">
        <div className="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
          <div className="mt-8 flex justify-center space-x-6">
            <a href="#" className="text-gray-200 hover:text-gray-400">
              <span className="sr-only">Facebook</span>
              <FaFacebook size="1.5em" />
            </a>

            <a href="#" className="text-gray-200 hover:text-gray-400">
              <span className="sr-only">Instagram</span>
              <FaInstagram size="1.5em" />
            </a>

            <a href="#" className="text-gray-200 hover:text-gray-400">
              <span className="sr-only">Twitter</span>
              <FaTwitter size="1.5em" />
            </a>

            <a href="#" className="text-gray-200 hover:text-gray-400">
              <span className="sr-only">Mail</span>
              <FaAt size="1.5em" />
            </a>
          </div>
          <p className="mt-8 text-center text-base text-gray-200">
            &copy; 2023<a href="#"> SymptoSage</a>, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
