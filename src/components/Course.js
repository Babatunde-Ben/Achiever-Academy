import React from "react";
import BookIcon from "../images/book-icon.png";
import "../css/Course.css";

const Course = ({ name }) => {
  return (
    <div className="course">
      <img src={BookIcon} alt="book=icon" className="course-icon" />
      <h3 className="course-name">{name}</h3>
    </div>
  );
};

export default Course;
