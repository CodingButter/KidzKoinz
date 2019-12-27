import React, { Component } from "react";
import axios from "axios";
class ButtonComponent extends Component {
  state = {
    isPressed: false,
    dataLoaded: false
  };
  togglePressed = () => {
    this.setState(state => ({
      dataLoaded: state.dataLoaded,
      isPressed: !state.isPressed
    }));
    if (!this.state.dataLoaded) {
      axios
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => {
          response.data.dataLoaded = true;
          this.setState(response.data);
          console.log(this.state);
        });
    }
  };
  render() {
    console.log(this.props);
    return (
      <button onClick={this.togglePressed}>
        {this.state.isPressed ? "Pressed" : "Not Pressed"}
      </button>
    );
  }
}

export default ButtonComponent;
