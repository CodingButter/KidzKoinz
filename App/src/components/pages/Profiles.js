import React, { useState, useEffect } from "react";
import { getAvatarsByHousehold } from "../../api_managers/Avatar";
import FittedBackgroundComponent from "../presentationals/FittedBackgroundComponent";
import BackgroundImage from "../../img/profiles_background.jpg";
import LargeLogo from "../presentationals/LargeLogo";
import GridContainer from "../containers/GridContainer";
import ProfileUIList from "../containers/ProfileList";

const containerOptions = {
  cols: 8,
  rows: 6
};

const parentListOptions = {
  startRow: 2,
  startCol: 3,
  width: 2,
  height: 2
};
const childListOptions = {
  startRow: 2,
  startCol: 5,
  width: 2,
  height: 2
};

const Profile = props => {
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState(null);
  useEffect(() => {
    getAvatarsByHousehold(1).then(response => {
      setProfiles(response);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <LargeLogo />
      <FittedBackgroundComponent image={BackgroundImage} />
      <GridContainer options={containerOptions}>
        {!loading && (
          <>
            <GridContainer options={parentListOptions}>
              <ProfileUIList profiles={profiles.parents} />
            </GridContainer>
            <GridContainer options={childListOptions}>
              <ProfileUIList profiles={profiles.children} />
            </GridContainer>
          </>
        )}
      </GridContainer>
    </>
  );
};
export default Profile;
