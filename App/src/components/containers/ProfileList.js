import React from "react";
import ProfileIcon from "../presentationals/ProfileIcon";
import GridContainer from "./GridContainer";

const ProfileList = props => {
  const { profiles } = props;
  return (
    <>
      {profiles.map((profile, index) => {
        return (
          <GridContainer options={{}} key={index}>
            <ProfileIcon profile={profile} />
          </GridContainer>
        );
      })}
    </>
  );
};

export default ProfileList;
