import React from "react";
import ProfileIcon from "../presentationals/ProfileIcon";
import GridContainer from "./GridContainer";


const ProfileUIList = (props) => {
  const { profiles, cols } = props;
  const GridOptions = {
    cols: Math.min(cols, profiles.length),
    rows: profiles.length % 2
  };
  return (
    <GridContainer options={GridOptions}>
      {profiles.map((profile, index) => (
        <ProfileIcon key={index} profile={profile} />
      ))}
    </GridContainer>
  );
};

export default ProfileUIList;
