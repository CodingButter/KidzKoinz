import React, { Component } from "react";
import Logo from "../../img/logo.png";
class LargeLogo extends Component {
  render() {
    const logoStyle = {
      height: "20vh",
      minHeight: "70px",
      maxHeight: "110px"
    };

    const logoWrapperStyle = {
      padding: "10px",
      margin: "10px",
      backgroundColor: "rgb(255,255,255)",
      background:
        "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)"
    };
    return (
      <div style={logoWrapperStyle}>
        <img src={Logo} alt="KidzKoinz Logo" style={logoStyle} />
      </div>
    );
  }
}

export default LargeLogo;
