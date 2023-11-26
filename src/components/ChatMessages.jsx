import PropTypes from "prop-types";

const ChatMessages = ({ message, role }) => {
  return (
    <div className={`flex h-fit w-full ${role === "user" && "bg-sky-50"}`}>
      <p
        className={`prose lg:prose-xl w-1 ${
          role === "user" ? "bg-sky-500" : "bg-green-500"
        }`}
      ></p>
      <p className="prose lg:prose-xl w-full p-6">{message}</p>
    </div>
  );
};

ChatMessages.propTypes = {
  message: PropTypes.string,
  role: PropTypes.string,
};

export default ChatMessages;
