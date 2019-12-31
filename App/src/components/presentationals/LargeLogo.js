import React from "react";
import Logo from "../../img/logo.png";
import styled from "styled-components/macro";

const LogoImg = styled.img`
  height: 20vh;
  min-height: 70px;
  max-height: 110px;
`;
const LogoWrapper = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  width: 80%;
`;
const LargeLogo = () => {
  return (
    <LogoWrapper>
      <LogoImg src={Logo} alt="KidzKoinz Logo" />
    </LogoWrapper>
  );
};

export default LargeLogo;
