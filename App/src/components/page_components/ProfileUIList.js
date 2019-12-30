import React from "react";
import AvatarPicture from "../presentationals/AvatarPicture";
import styled from "styled-components";

const MyUl = styled.ul`
  max-width: 1000px;
  width: 100%;
  padding: 20px;
  margin: auto;
  text-align: center;
`;

const MyLi = styled.li``;
const MyAvatarWrapper = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  border: 3px solid yellow;
  border-radius: 10%;
  overflow: hidden;
`;

const ProfileName = styled.p`
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
`;

const ProfileUIList = ({ items }) => {
  return (
    <MyUl>
      {items.map((item, index) => {
        return (
          <MyLi key={index}>
            <MyAvatarWrapper>
              <AvatarPicture avatarUrl={item.avatar} />
              <ProfileName>{item.nickname}</ProfileName>
            </MyAvatarWrapper>
          </MyLi>
        );
      })}
    </MyUl>
  );
};

export default ProfileUIList;
