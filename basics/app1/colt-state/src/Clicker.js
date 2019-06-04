import React, { Component } from "react";

class Clicker extends Component {
  state = {
    number: 1
  };

  handleNumberChange = e => {
    let rand = Math.floor(Math.random() * Math.floor(10) + 1);
    this.setState({
      number: rand
    });
  };

  render() {
    return (
      <div>
        <h1>Number is {this.state.number}</h1>
        {this.state.number === 7 ? (
          <h2>You Win!</h2>
        ) : (
          <button onClick={this.handleNumberChange}>click</button>
        )}
      </div>
    );
  }
}

export default Clicker;
