import React from "react";
import Profiles from "./components/pages/Profiles";
import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  body,html {
    width:100%;
    height:100%;
    margin:none;
    padding:none;
    overflow:hidden;
    box-sizing:border-box;
  }
  #root{
    width:100%;
    height:100%;
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:1fr;
  }

  .grid > * {
    border: 2px solid rgb(214,232,182);
  }
`;

function App() {
  return (
    <>
      <GlobalStyle whiteColor />
      <Profiles />
    </>
  );
}

export default App;
