import React from "react";
import ProfileIcon from "../presentationals/ProfileIcon";
import GridContainer from "./GridContainer";

const ProfileUIList = ({ profiles, options }) => {
  const gridOptions = {};
  return (
    <GridContainer options={gridOptions}>
      {profiles.map((profile, index) => (
        <ProfileIcon key={index} profile={profile} />
      ))}
    </GridContainer>
  );
};

export default ProfileUIList;
