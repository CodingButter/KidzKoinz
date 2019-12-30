import React, { useState, useEffect } from "react";
import { getAvatarsByHousehold } from "../../api_managers/Avatar";
import FittedBackgroundComponent from "../page_components/FittedBackgroundComponent";
import BackgroundImage from "../../img/profiles_background.jpg";
import LargeLogo from "../page_components/LargeLogo";
import ProfileUIList from "../page_components/ProfileUIList";
import styled from 'styled-components';
import ClearFix from '../presentationals/ClearFix';

const ProfileWrapper = styled.div`
  margin:auto;
  padding:20px;
  border-radius:10px;
  width:80%;
  max-width:800px;
  background:rgba(0,0,0,.5);
`;

const Login = props => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState(null);
  useEffect(() => {
    callAPI();
  });
  const callAPI = () => {
    getAvatarsByHousehold(1).then(response => {
      if (loading) {
        console.log(response);
        setImages(response);
        setLoading(false);
      }
    });
  };
  return (
    <div>
      <LargeLogo />
      <FittedBackgroundComponent image={BackgroundImage} />
      {!loading && (
        <ProfileWrapper>
          <ProfileUIList name="parent-profile-list" items={images.parents} />
          <ProfileUIList name="child-profile-list" items={images.children} />
          <ClearFix />
        </ProfileWrapper>
      )
      }
    </div>
  )
}
export default Login;
