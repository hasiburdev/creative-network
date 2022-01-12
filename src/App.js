import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Welcome from "./pages/Welcome/Welcome";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
