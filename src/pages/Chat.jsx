import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import ChatMessages from "../components/ChatMessages";
import { FaArrowRight } from "react-icons/fa";
import Header from "../components/Header";

const Chat = () => {
  const [input, setInput] = useState("");
  const chatBoxRef = useRef(null);

  const [chatLog, setChatLog] = useState([
    {
      role: "gpt",
      message: "how can i help you?",
    },
    {
      role: "user",
      message: "i want to use sympto sage today",
    },
    {
      role: "gpt",
      message:
        "lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ratione iure delectus tempora porro officiis culpa quo dolorum ducimus, mollitia magnam in eligendi quasi accusantium vero molestias veritatis et nobis ullam omnis eveniet aliquam, cumque deserunt? Dolores dolorum consequuntur dolorem optio, vitae sunt?",
    },
    {
      role: "user",
      message:
        "lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ratione iure delectus tempora porro officiis culpa quo dolorum ducimu dolorum consequuntur dolorem optio, vitae sunt?",
    },
    {
      role: "gpt",
      message:
        "lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ratione iure delectus tempora porro officiis culpa quo dolorum ducimus, mollitia magnam in eligendi quasi accusantium vero molestias veritatis et nobis ullam omnis eveniet aliquam, cumque deserunt? Dolores dolorum consequuntur dolorem optio, vitae sunt?",
    },
    {
      role: "user",
      message:
        "lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ratione iure delectus tempora porro officiis culpa quo dolorum ducimu dolorum consequuntur dolorem optio, vitae sunt?",
    },
  ]);

  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newChatLog = [...chatLog, { role: "user", message: `${input}` }];

    setInput("");

    setChatLog(newChatLog);
  };

  useEffect(() => {
    console.log(chatLog);
    setTimeout(() => {
      scrollToBottom();
    }, 0);
  }, [chatLog]);

  return (
    <div className="relative min-h-screen w-full bg-sky-200">
      <Header />
      <div className="tranform absolute bottom-7 left-1/2 w-3/4 -translate-x-1/2  [&>*]:border-b [&>*]:border-sky-500">
        {/* Chat box */}
        <div
          ref={chatBoxRef}
          className="h-[500px] overflow-auto rounded-t-lg bg-sky-100"
        >
          {chatLog.map((chat, index) => (
            <ChatMessages key={index} message={chat.message} role={chat.role} />
          ))}
        </div>

        {/* input */}
        <form
          onSubmit={handleSubmit}
          className="flex h-16 w-full rounded-b-lg bg-white px-4 py-4 text-lg font-bold shadow-xl shadow-sky-400 sm:h-20"
        >
          <input
            className="h-full w-11/12 rounded-lg outline-none sm:w-5/6"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="message"
          />
          <div className="grid h-full w-1/12 place-items-end sm:w-1/6 sm:place-items-center">
            <button className="h-full rounded-lg text-white shadow-sky-200 drop-shadow-2xl transition-shadow active:shadow-none sm:w-16 sm:bg-sky-500 sm:shadow-inner md:w-24">
              <span className="hidden sm:block">Send</span>
              <FaArrowRight className="text-gray-800 sm:hidden" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
