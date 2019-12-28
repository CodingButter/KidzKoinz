import React, { Component } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm.jsx";
import FittedBackgroundComponent from "../../shared/FittedBackgroundComponent";
import BackgroundImage from "../../../img/login_background.jpg";
import LargeLogo from "../../shared/LargeLogo";

class Login extends Component {
  render() {
    return (
      <div>
        <LargeLogo />
        <FittedBackgroundComponent image={BackgroundImage} />
        <LoginForm />
      </div>
    );
  }
}

export default Login;
