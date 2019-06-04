import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleButton = e => {
    this.setState({
      clicked: true
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.clicked ? "Clicked!!!" : "Not Clicked!!"}</h1>
        <button onClick={this.handleButton}>click</button>
      </div>
    );
  }
}

export default Button;
