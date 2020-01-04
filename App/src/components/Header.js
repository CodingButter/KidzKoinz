import React from "react";
import styled from "styled-components";
import Edges from "./Edges";

import LogoImage from "../img/logo.png";

import { Link } from "react-router-dom";

export default props => {
  return (
    <Header>
      <Edges>
        <Link to="/">
          <Logo src={LogoImage} />
        </Link>
        <Nav>
          <Link to="/profiles">Profiles</Link>
          <Link to="/login">Login</Link>
        </Nav>
      </Edges>
    </Header>
  );
};

const Nav = styled.nav`
  display: flex;
  > a {
    margin-right: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 70%
  );

  padding: 10px 20px;
  height: 110px;
`;

const Logo = styled.img`
  width: 110px;
`;
