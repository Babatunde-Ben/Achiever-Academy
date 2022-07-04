import React, { useEffect, useState } from "react";
import ProfilePicture from "../components/ProfilePicture";
import "../css/Profile.css";

const Profile = () => {
  const [userState, setUserState] = useState("");
  useEffect(() => {
    const status = JSON.parse(localStorage.getItem("user"));
    setUserState(status);
    console.log(status);
  }, []);

  return (
    <section className="sidebar-article profile-section">
      <ProfilePicture link={userState.photoURL} />
      <h2 className="user-name title">{userState.displayName}</h2>
      <p className="email">{userState.email}</p>
    </section>
  );
};

export default Profile;
