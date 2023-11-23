import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <div className="font-montserrat min-h-screen w-full">
          <Routes>
            <Route path="/" element={<Home />} />
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
