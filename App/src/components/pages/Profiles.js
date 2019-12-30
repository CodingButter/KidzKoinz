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

const ParentUL = styled.div`
  width:30%;
  border-right:1px solid rgba(255,255,0,.4);
  float:left
`;

const ChildUL = styled.div`
  width:60%;
  float:right;
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
          <ParentUL>
            <ProfileUIList items={images.parents} />
            <ClearFix />
          </ParentUL>
          <ChildUL>
            <ProfileUIList items={images.children} />
            <ClearFix />
          </ChildUL>
          <ClearFix />
        </ProfileWrapper>
      )
      }
    </div>
  )
}
export default Login;
