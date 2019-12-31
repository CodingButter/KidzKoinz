import React, { useState, useEffect } from "react";
import { getAvatarsByHousehold } from "../../api_managers/Avatar";
import FittedBackgroundComponent from "../presentationals/FittedBackgroundComponent";
import BackgroundImage from "../../img/profiles_background.jpg";
import LargeLogo from "../presentationals/LargeLogo";
import GridContainer from "../containers/GridContainer";
import ProfileUIList from "../containers/ProfileUIList";

const containerOptions = {
  innerCols: 12,
  innerRows: 8
};

const profileListOptions = {
  startRow: 2,
  startCol: 4,
  width: 8,
  height: 2
};

const Profile = props => {
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState(null);
  useEffect(() => {
    callAPI();
  });

  const callAPI = () => {
    getAvatarsByHousehold(1).then(response => {
      if (!loading) {
        console.log(profiles);
        setProfiles(response);
        setLoading(false);
      }
    });
  };
  return (
    <GridContainer options={containerOptions}>
      <LargeLogo />
      <FittedBackgroundComponent image={BackgroundImage} />
      {!loading && (
        <ProfileUIList profiles={profiles} options={profileListOptions} />
      )}
    </GridContainer>
  );
};
export default Profile;
