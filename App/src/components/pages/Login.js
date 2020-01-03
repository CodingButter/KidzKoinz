import React, { Component } from "react";
import FittedBackgroundComponent from "../page_components/FittedBackgroundComponent";
import BackgroundImage from "../../img/login_background.jpg";

class Login extends Component {
  render() {
    return (
      <div>
        <FittedBackgroundComponent image={BackgroundImage} />
      </div>
    );
  }
}

export default Login;
