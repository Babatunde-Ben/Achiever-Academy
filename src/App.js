import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
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
  const state = localStorage.getItem("user");
  const [userState, setUserState] = useState(state);
  console.log("logged in user is :", userState);
  // JSON.parse(localStorage.getItem("user")).email
  return (
    <div className="App">
      <BrowserRouter basename="Achiever-Academy">
        {!userState && <Navbar />}

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login userState={userState} />} />
          <Route path="/student" element={<Student />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="courses" element={<Courses />}>
              <Route path=":userId" element={<Courses />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
