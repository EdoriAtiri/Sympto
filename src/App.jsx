import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <div className="min-h-screen w-full font-montserrat">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
            {/* <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
             */}
            {/* <Route path="/dashboard" element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="profile" element={<Profile />} />
              </Route>
            </Route> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
