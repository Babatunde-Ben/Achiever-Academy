import React from "react";
import Course from "../components/Course";
import "../css/Courses.css";

import db from "../components/db";

const name = "English";
console.log("courses", db);
const Courses = () => {
  return (
    <section className="courses-section sidebar-article ">
      <h3 className="title">Courses</h3>
      <div className="courses-list">
        {db.map((item) => {
          return <Course name={item.name} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default Courses;
