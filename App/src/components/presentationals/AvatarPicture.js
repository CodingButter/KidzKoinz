import React from "react";
import styled from "styled-components/macro";

const MyImage = styled.div`
  top: 0;
  left: 0;
  z-index: 1;
  background-position: 50% 50%;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${props => props.avatarUrl});
`;

const AvatarPicture = ({ avatarUrl }) => (
  <MyImage
    alt="profile avatar"
    avatarUrl={avatarUrl}
    className="avatar-image"
  />
);

export default AvatarPicture;
