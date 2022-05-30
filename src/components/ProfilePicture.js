import React from "react";
import "../css/ProfilePicture.css";
import Student from "../images/student-in-library.jpg";

const ProfilePicture = ({ link }) => {
  console.log(JSON.stringify(link), ":photo url");
  return (
    <div className="profile-picture">
      {/* pass the image link from local storage */}

      <img src={`${link}`} alt="profile-picture" className="profile-img" />
    </div>
  );
};

export default ProfilePicture;
