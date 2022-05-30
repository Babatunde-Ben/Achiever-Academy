import React from "react";
import "../css/CourseDetails.css";
import db from "../components/db";
import { useNavigate } from "react-router-dom";

const CourseDetails = ({ id }) => {
  let navigate = useNavigate();
  const singleCourse = db.find((item) => {
    return item.id == id;
  });
  const ListItems = ({ item }) => {
    return <li>{item}</li>;
  };

  return (
    <section className="sidebar-article course-details-section">
      <p className="back-btn" onClick={() => navigate(-1)}>
        Back{" "}
      </p>
      <h3 className="title">Course Details</h3>
      <h3 className="course-intro">
        Introduction to{" "}
        <span style={{ textTransform: "capitalize" }}>{singleCourse.name}</span>
      </h3>
      <p className="course-desc">{singleCourse.details.intro}</p>
      <h3 className="course-intro">Branches</h3>
      <ul className="branches">
        {singleCourse.details.branches.map((item, index) => (
          <ListItems item={item} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default CourseDetails;
