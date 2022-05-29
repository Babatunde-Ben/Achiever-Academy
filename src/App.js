import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import "./css/App.css";

// pages
import LandingPage from "./pages/landing-page";
import Login from "./pages/Login";
import Student from "./pages/Student";
import Dashboard from "./pages/Dashboard";

function App() {
  const [userState, setUserState] = useState(false);

  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Navbar userState={userState} />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login userState={userState} />} />
          <Route path="/student" element={<Student />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="courses" element={<h1>Courses</h1>} />
            <Route path="profile" element={<h1>Profile</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
