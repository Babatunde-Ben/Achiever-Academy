import React from "react";
import ProfilePicture from "../components/ProfilePicture";
import "../css/Profile.css";

const Profile = () => {
  return (
    <section className="sidebar-article profile-section">
      <ProfilePicture />
      <h2 className="user-name title">John Doe</h2>
      <p className="email">email@email.com</p>
    </section>
  );
};

export default Profile;
