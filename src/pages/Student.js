import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
// import LoginButton from "../components/LoginButton";
import "../css/Student.css";

const Student = () => {
  let navigate = useNavigate();
  return (
    <section className="student-page">
      <div
        onClick={() => {
          navigate("./student/tests          ");
        }}
      >
        This is my sidebar
      </div>
      {/* <div>
        <Routes>
          <Route path="test" element={<LoginButton />} />
        </Routes>
      </div> */}
      <Outlet />
    </section>
  );
};

export default Student;
