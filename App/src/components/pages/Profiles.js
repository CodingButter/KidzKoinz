import React, { useState, useEffect } from "react";
import { getAvatarsByHousehold } from "../../api_managers/Avatar";
import FittedBackgroundComponent from "../page_components/FittedBackgroundComponent";
import BackgroundImage from "../../img/profiles_background.jpg";
import LargeLogo from "../page_components/LargeLogo";
import ProfileUIList from "../page_components/ProfileUIList";

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
        <>
          <ProfileUIList items={images.parents} />
          <ProfileUIList items={images.children} />
        </>
      )}
    </div>
  );
};
export default Login;
