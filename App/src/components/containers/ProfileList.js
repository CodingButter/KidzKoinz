import React from "react";
import ProfileIcon from "../presentationals/ProfileIcon";
import GridContainer from "./GridContainer";

const ProfileList = props => {
  const { profiles, maxColumns } = props;
  return (
    <>
      {profiles.map((profile, index) => {
        let listOptions = {
          startCol: index % maxColumns,
          startRow: 1
        };
        return (
          <GridContainer options={listOptions} key={index}>
            <ProfileIcon profile={profile} />
          </GridContainer>
        );
      })}
    </>
  );
};

export default ProfileList;
