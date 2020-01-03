import styled from "styled-components/macro";

const MyDiv = styled.div`
  top: 0;
  left: 0;
  z-index: -1;
  background-position: 50% 50%;
  background-size: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  background-image: url(${props => props.image});
`;
export default MyDiv;
