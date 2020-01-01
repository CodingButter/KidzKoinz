import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(${({ options }) => options.cols || 1}, 1fr);
  grid-template-rows: repeat(${({ options }) => options.rows || 1}, 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 2px;
  justify-items: stretch;
  align-items: stretch;
  grid-column: ${({ options }) => options.startCol || 1} /
    ${({ options }) => options.startCol + options.width || 1};
  grid-row: ${({ options }) => options.GridstartRow || 1} /
    ${({ options }) => options.startRow + options.height || 1};
  border: 1px solid yellow;
`;

const GridContainer = props => <Grid options={props} >{props.children}</Grid>
export default GridContainer;