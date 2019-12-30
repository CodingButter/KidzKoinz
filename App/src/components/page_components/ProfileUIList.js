import React from "react";
import AvatarPicture from "../presentationals/AvatarPicture";
import styled from "styled-components";

const MyUl = styled.ul`
  float:left;
  padding: 20px;
  margin: auto;
  text-align: center;
`;

const MyLi = styled.li`
  list-style:none;
  float:left;
  margin:10px;
`;
const MyAvatarWrapper = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  border: 3px solid yellow;
  border-radius: 10%;
  overflow: hidden;
`;

const ProfileName = styled.p`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  z-index:3;
  bottom:0px;
  position:absolute;
`;

const ProfileUIList = ({ items, name }) => {
  return (
    <MyUl className={"profile-list" + name}>
      {
        items.map((item, index) => {
          return (
            <MyLi key={index}>
              <MyAvatarWrapper>
                <AvatarPicture avatarUrl={item.avatar} />
                <ProfileName>{item.nickname}</ProfileName>
              </MyAvatarWrapper>
            </MyLi>
          );
        })
      }
    </MyUl >
  );
};

export default ProfileUIList;
