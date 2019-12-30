import React from "react";
import styled from "styled-components";

const MyDiv = styled.div`
  top: 0;
  left: 0;
  z-index: -1;
  background-position: 50% 50%;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${props => props.image});
`;

const FittedBackgroundComponent = ({ image }) => <MyDiv image={image} />;

export default FittedBackgroundComponent;
