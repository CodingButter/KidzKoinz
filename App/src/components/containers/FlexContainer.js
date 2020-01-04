import styled, { css } from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  ${({ justifyContent, alignItems, flexWrap, maxWidth }) => css`
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-wrap: ${flexWrap};
    max-width: ${maxWidth + "px"};
  `}
`;

FlexContainer.defaultProps = {
  alignItems: "flex-start",
  justifyContent: "center",
  flexWrap: "wrap",
  maxWidth: "auto"
};

export default FlexContainer;
