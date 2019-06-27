import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewFile";
class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [{ width: 10, height: 40, color: "orange" }] };
    this.createBox = this.createBox.bind(this);
  }
  createBox(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox]
    });
  }
  render() {
    const boxes = this.state.boxes.map(box => (
      <Box width={box.width} height={box.height} color={box.color} />
    ));
    return (
      <div>
        <h1>Box Maker Generator</h1>
        <NewBoxForm createBox={this.createBox} />
        {boxes}
      </div>
    );
  }
}

export default BoxList;
