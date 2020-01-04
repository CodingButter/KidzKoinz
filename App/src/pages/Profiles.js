import React from "react";
import styled from "styled-components";

import ProfileIcon from "../components/presentationals/ProfileIcon";
import Edges from "../components/Edges";

// import { useMutation } from "@apollo/react-hooks";

// import { LOGIN_USER_MUTATION } from "../../apollo/mutation";

const Profiles = props => {
  //!called && getAvatars();
  // const loading = false;
  // const data = { parents: [], children: [] };
  return (
    <Edges>
      <Container>
        <h3>Profiles page</h3>
        {/* <button>click me</button> */}
        {/* {!loading ? (
          data &&
          Object.keys(data).map((key, index) => {
            return (
              <ProfileList key={index}>
                {data[key] &&
                  data[key].map((profile, index) => (
                    <StyledProfileIcon key={index} profile={profile} />
                  ))}
              </ProfileList>
            );
          })
        ) : (
          <span>loading...</span>
        )} */}
      </Container>
    </Edges>
  );
};

export default Profiles;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledProfileIcon = styled(ProfileIcon)``;
