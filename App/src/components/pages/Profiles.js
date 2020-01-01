import React, { useState, useEffect } from "react";
import { getAvatarsByHousehold } from "../../api_managers/Avatar";
import FittedBackgroundComponent from "../presentationals/FittedBackgroundComponent";
import BackgroundImage from "../../img/profiles_background.jpg";
import LargeLogo from "../presentationals/LargeLogo";
import GridContainer from "../containers/GridContainer";
import ProfileUIList from "../containers/ProfileList";

import Edges from "../Edges";

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

const maxColumns = 4;

const Profile = props => {
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState(null);
  useEffect(() => {
    getAvatarsByHousehold(1).then(response => {
      setProfiles(response);
      setLoading(false);
    });
  }, []);
  if (!loading) {
    //childListOptions.cols = 2;
    //childListOptions.rows = 2;

    childListOptions.cols = Math.min(maxColumns, profiles.children.length);
    childListOptions.row =
      Math.ceil(profiles.children.length / maxColumns) +
      (profiles.children.length % (maxColumns - 1));

    parentListOptions.cols = Math.min(maxColumns, profiles.parents.length);
    parentListOptions.row =
      Math.ceil(profiles.parents.length / maxColumns) +
      (profiles.parents.length % (maxColumns - 1));
  }
  return (
    <>
      <FittedBackgroundComponent image={BackgroundImage} />

      <Edges>
        <GridContainer
          className={"profile-grid-container"}
          options={containerOptions}
        >
          {!loading && (
            <>
              <GridContainer options={parentListOptions}>
                <ProfileUIList
                  maxColumns={maxColumns}
                  profiles={profiles.parents}
                />
              </GridContainer>
              <GridContainer options={childListOptions}>
                <ProfileUIList
                  maxColumns={maxColumns}
                  profiles={profiles.children}
                />
              </GridContainer>
            </>
          )}
        </GridContainer>
      </Edges>
    </>
  );
};
export default Profile;
