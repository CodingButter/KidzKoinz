import React from "react";
import ProfileIcon from "../presentationals/ProfileIcon";

const ProfileList = props => {
  const { profiles } = props;
  return (
    <>
      {profiles.map((profile, index) => {
        return <ProfileIcon key={index} profile={profile} />;
      })}
    </>
  );
};

export default ProfileList;
