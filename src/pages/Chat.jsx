import { useState } from "react";

const Chat = () => {
  const [chatLog, setChatLog] = useState([
    {
      role: "gpt",
      message: "how can i help you",
    },
    {
      role: "user",
      message: "i want to use chatgpt today",
    },
  ]);

  return (
    <div className="relative min-h-screen w-full bg-sky-200">
      <div className="tranform absolute left-1/2 top-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2 ">
        {/* Chat box */}
        <div className="h-[500px] overflow-auto rounded-t-lg bg-sky-100">
          {chatLog.map((chat, index) => (
            <div key={index} className="flex h-fit w-full bg-sky-50">
              <div className="w-1 bg-green-500"></div>
              <div className="w-full p-3">{chat.message}</div>
            </div>
          ))}
        </div>

        {/* input */}

        <form action="" className="">
          <div className="flex h-20 w-full rounded-b-lg bg-white px-4 py-4 text-lg font-bold shadow-xl shadow-sky-400">
            <input
              className="h-full w-5/6 rounded-lg outline-none"
              type="text"
              placeholder="message"
            />
            <div className="grid h-full w-1/6 place-items-center">
              <button className="h-full w-24 rounded-lg bg-sky-500 text-white shadow-inner shadow-sky-200 drop-shadow-2xl transition-shadow active:shadow-none">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
