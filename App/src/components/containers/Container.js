import styled from "styled-components";

const Container = styled.div`
  display: flexbox;
  justify-content: center
  flex-wrap: wrap;
  max-width: ${({ maxWidth }) => maxWidth + "px" || "auto"};
`;

export default Container;
