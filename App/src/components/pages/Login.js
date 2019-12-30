import React, { Component } from "react";
import FittedBackgroundComponent from "../page_components/FittedBackgroundComponent";
import BackgroundImage from "../../img/login_background.jpg";
import LargeLogo from "../page_components/LargeLogo";

class Login extends Component {
  render() {
    return (
      <div>
        <LargeLogo />
        <FittedBackgroundComponent image={BackgroundImage} />
      </div>
    );
  }
}

export default Login;
