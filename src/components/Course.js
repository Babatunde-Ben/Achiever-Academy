import React from "react";
import { useNavigate } from "react-router-dom";
import BookIcon from "../images/book-icon.png";
import "../css/Course.css";

const Course = ({ name, id }) => {
  let navigate = useNavigate();
  return (
    <div
      className="course"
      onClick={() => {
        navigate(`/student/courses/${id}`);
      }}
    >
      <img src={BookIcon} alt="book=icon" className="course-icon" />
      <h3 className="course-name">{name}</h3>
    </div>
  );
};

export default Course;
