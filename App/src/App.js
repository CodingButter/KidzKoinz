import React from "react";
import Profiles from "./components/pages/Profiles";
import { createGlobalStyle } from "styled-components/macro";

import miniReset from "./miniReset";

import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  ${miniReset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Profiles />
    </>
  );
}

export default App;
