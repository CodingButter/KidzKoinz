import React from "react";
import { createGlobalStyle } from "styled-components/macro";

import { apolloClient } from "./apollo";

import miniReset from "./miniReset";
import Header from "./components/Header";
import FittedBackgroundComponent from "./components/FittedBackgroundComponent";

import backgroundImage from "./img/profiles_background.jpg";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/index";
import Login from "./pages/Login";
import Profiles from "./pages/Profiles";

const GlobalStyle = createGlobalStyle`
  ${miniReset}
`;

//
// Set up global state with useContext
// Impliment a router

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <GlobalStyle />
        <FittedBackgroundComponent image={backgroundImage} />
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
