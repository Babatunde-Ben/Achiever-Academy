import React, { useEffect, useState } from "react";
import ProfilePicture from "../components/ProfilePicture";
import { CgProfile } from "react-icons/cg";
import "../css/Profile.css";

const Profile = () => {
  const [userState, setUserState] = useState("");
  useEffect(() => {
    const status = JSON.parse(localStorage.getItem("user"));
    setUserState(status);
  }, []);

  return (
    <section className="sidebar-article profile-section">
      {userState.photoURL ? (
        <ProfilePicture link={userState.photoURL} />
      ) : (
        <CgProfile className="profile-icon" />
      )}
      <h2 className="user-name title">
        {userState.displayName ? userState.displayName : "User"}
      </h2>
      <p className="email">{userState.email}</p>
    </section>
  );
};

export default Profile;
