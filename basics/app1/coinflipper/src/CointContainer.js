import React, { Component } from "react";
import CoinDisplay from "./Coin";
import { choice } from "./helper";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {
        side: "heads",
        imgSrc: "https://tinyurl.com/react-coin-heads-jpg"
      },
      {
        side: "tails",
        imgSrc: "https://tinyurl.com/react-coin-tails-jpg"
      }
    ]
  };

  state = {
    currCoin: null,
    nFlips: 0,
    nHeads: 0,
    nTails: 0
  };

  flipCoin = () => {
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      let newState = {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
      };

      return newState;
    });
  };

  handleClick = e => {
    this.flipCoin();
  };

  render() {
    return (
      <div className="coinContainer">
        <h2>Lets flip a coin</h2>
        {this.state.currCoin && <CoinDisplay info={this.state.currCoin} />}
        <button onClick={this.handleClick}>flip me</button>
        <p>
          Out of {this.state.nFlips} flips, There have been {this.state.nHeads}
          heads and {this.state.nTails} tails
        </p>
      </div>
    );
  }
}

export default CoinContainer;
