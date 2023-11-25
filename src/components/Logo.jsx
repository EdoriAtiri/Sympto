import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <span className="font-lobster text-4xl text-sky-900">AskDoc</span>
    </Link>
  );
};

export default Logo;
