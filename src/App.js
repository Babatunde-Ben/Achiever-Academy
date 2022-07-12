import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import "./css/App.css";

// pages
import LandingPage from "./pages/landing-page";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Student from "./pages/Student";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import { LoginContext } from "./Context/LoginContext";

function App() {
  const [userStatus, setUserStatus] = useState(localStorage.getItem("user"));
  return (
    <LoginContext.Provider value={{ userStatus, setUserStatus }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {userStatus && (
            <Route path="/student" element={<Student />}>
              <Route path="/student/" element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="courses" element={<Courses />}>
                <Route path=":userId" element={<Courses />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Route>
          )}

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </LoginContext.Provider>
  );
}

export default App;
