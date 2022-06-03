import { HashRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./css/App.css";

// pages
import LandingPage from "./pages/landing-page";
import Login from "./pages/Login";
import Student from "./pages/Student";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";

function App() {
  const [userState, setUserState] = useState(localStorage.getItem("user"));
  const updateState = () => {
    setUserState(localStorage.getItem("user"));
  };

  return (
    <div className="App">
      <Navbar userState={userState} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login updateState={updateState} />} />
        <Route path="/student" element={<Student updateState={updateState} />}>
          <Route path="/student/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="courses" element={<Courses />}>
            <Route path=":userId" element={<Courses />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
