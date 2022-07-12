import React from "react";
import { useParams } from "react-router-dom";
import Course from "../components/Course";
import CourseDetails from "./CourseDetails";
import "../css/Courses.css";

import db from "../components/db";

const Courses = () => {
  const { userId } = useParams();

  return userId ? (
    <div>
      <CourseDetails id={userId} />
    </div>
  ) : (
    <section className="courses-section sidebar-article ">
      <h3 className="title">Courses</h3>
      <div className="courses-list">
        {db.map((item) => {
          return <Course name={item.name} id={item.id} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default Courses;
