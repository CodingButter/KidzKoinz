import React, { useState, useEffect } from "react";
import { getAvatarsByHousehold } from "../../api_managers/Avatar";
import FittedBackgroundComponent from "../presentationals/FittedBackgroundComponent";
import BackgroundImage from "../../img/profiles_background.jpg";
import LargeLogo from "../presentationals/LargeLogo";
import GridContainer from "../containers/GridContainer";
import ProfileUIList from "../containers/ProfileUIList";
import styled from "styled-components";

const containerOptions = {
  cols: 12,
  rows: 8
};

const profileListOptions = {
  startRow: 2,
  startCol: 4,
  width: 8,
  height: 2
};

const MyContainer = styled.div`
  grid-column: 1;
  grid-row:1;
`;

const Profile = props => {
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState(null);
  useEffect(() => {
    callAPI();
  });

  const callAPI = () => {
    getAvatarsByHousehold(1).then(response => {
      if (loading) {
        setProfiles(response);
        setLoading(false);
      }
    });
  };
  return (
    <MyContainer>
      <LargeLogo />
      <FittedBackgroundComponent image={BackgroundImage} />
      <GridContainer options={containerOptions}>
        {!loading && (
          <ProfileUIList profiles={profiles.parents} options={profileListOptions} />
        )}
      </GridContainer>
      <MyContainer />
      );
    };
    export default Profile;
