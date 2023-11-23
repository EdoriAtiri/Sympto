import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import onlineTest from "../assets/online_test.svg";
import person from "../assets/person-using-pc-.jpg";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
