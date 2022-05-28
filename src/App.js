import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import "./css/App.css";

// pages
import LandingPage from "./pages/landing-page";
import Login from "./pages/Login";

function App() {
  const [userState, setUserState] = useState(false);
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Navbar userState={userState} />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<h1>student</h1>} />
          <Route path="/dashboard" element={<h1>dashboard</h1>} />
          <Route path="/contact" element={<h1>contact</h1>} />
          <Route path="/luxury" element={<h1>luxury</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
