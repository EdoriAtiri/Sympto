import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="mx-auto flex max-w-6xl flex-col bg-white px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
          <h1 className="text-4xl text-gray-800 md:text-6xl">
            Navigate Your Health Journey with AI Wisdom
          </h1>
          <p className="pt-6 text-xl font-light text-gray-400">
            Introducing SymptoSage, your AI companion for instant symptom
            insights and medical guidance. Unlock the power of AI-driven
            conversations, providing you with rapid responses and informed
            suggestions. Your virtual health advisor is just a chat away! Trust
            the future of healthcare, tailored to you, in the palm of your hand.
          </p>
        </div>

        <Link className="bg mx-auto mt-8 flex items-center justify-center rounded-md bg-sky-500 px-6 py-3 text-lg font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Home;
