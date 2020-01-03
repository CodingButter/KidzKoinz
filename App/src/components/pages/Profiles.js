import React, { useState, useEffect } from "react";
import { getAvatarsByHousehold } from "../../api_managers/Avatar";
import FittedBackgroundComponent from "../presentationals/FittedBackgroundComponent";
import BackgroundImage from "../../img/profiles_background.jpg";
import Container from "../containers/Container";
import ProfileUIList from "../containers/ProfileList";

import Edges from "../Edges";

const containerOptions = {
  cols: 2
};

const maxWidth = 300;

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
      <FittedBackgroundComponent image={BackgroundImage} />

      <Edges>
        <Container
          className={"profile-grid-container"}
          options={containerOptions}
        >
          {!loading && (
            <>
              <Container maxWidth={maxWidth}>
                <ProfileUIList profiles={profiles.parents} />
              </Container>
              <Container maxWidth={maxWidth}>
                <ProfileUIList profiles={profiles.children} />
              </Container>
            </>
          )}
        </Container>
      </Edges>
    </>
  );
};
export default Profile;
