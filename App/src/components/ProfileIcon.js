import React from "react";
import styled from "styled-components/macro";
import AvatarPicture from "./AvatarPicture";

const MyAvatarWrapper = styled.div`
  position: relative;
  width: 100px;
  padding-bottom: 100px;

  border: 3px solid yellow;
  border-radius: 10%;
  overflow: hidden;
`;

const ProfileName = styled.p`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  z-index: 3;
  bottom: 0px;
  position: absolute;
`;

//Name Style Compoents
MyAvatarWrapper.displayName = "Avatar-Wrapper";

const ProfileIcon = ({ profile }) => {
  return (
    <MyAvatarWrapper>
      <AvatarPicture avatarUrl={profile.avatar} />
      <ProfileName>{profile.nickname}</ProfileName>
    </MyAvatarWrapper>
  );
};

export default ProfileIcon;
