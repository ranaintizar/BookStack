import React from "react";
import Profile from "../Profile";

const ProfileScreen = ({ theme, handleLogout }) => {
  return <Profile theme={theme} handleLogout={handleLogout} />;
};

export default ProfileScreen;
