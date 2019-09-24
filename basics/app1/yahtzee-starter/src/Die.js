import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    let classesList = `Die fas fa-dice-${
      this.props.numberWords[this.props.val - 1]
    } fa-5x `;
    if (this.props.locked) classesList += "Die-locked";
    return <i className={classesList} onClick={this.handleClick} />;
  }
}

export default Die;
