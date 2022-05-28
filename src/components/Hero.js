import React from "react";
import "../css/Hero.css";
import student from "../images/student-in-library.jpg";
import "../css/Navbar.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <article>
        <h1 className="hero-title">
          Learn on your <br /> class schedule
        </h1>
        <h4 className="hero-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure aliquid
          vel obcaecati architecto veritatis possimus vero dicta, porro
          temporibus totam iste atque, maiores in a itaque iusto reprehenderit
          unde qui alias facilis cum nesciunt. Magni!
        </h4>
      </article>
      <div className="img-container">
        <img src={student} alt="student in the library" />
      </div>
    </section>
  );
};

export default Hero;
