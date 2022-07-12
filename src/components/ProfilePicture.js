import React from "react";
import "../css/ProfilePicture.css";

const ProfilePicture = ({ link }) => {
  return (
    <div className="profile-picture">
      {/* pass the image link from local storage */}

      <img src={`${link}`} alt="profile" className="profile-img" />
    </div>
  );
};

export default ProfilePicture;
