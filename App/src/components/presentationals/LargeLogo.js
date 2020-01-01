import React from "react";
import Logo from "../../img/logo.png";
import styled from "styled-components/macro";

const LogoImg = styled.img`
  height: 100px;
  width: 100px;
`;
const LogoWrapper = styled.div`
  width: 80%;
  height: 110px;
  padding: 10px 20px;
  text-align: left;
  position: absolute;
  background-color: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 70%
  );
`;

const LargeLogo = () => {
  return (
    <LogoWrapper>
      <LogoImg src={Logo} alt="KidzKoinz Logo" />
    </LogoWrapper>
  );
};

export default LargeLogo;
