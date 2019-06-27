import React, { Component } from "react";
import NewForm from "./NewForm";
import Box from "./Box";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      box: []
    };

    this.create = this.create.bind(this);
  }
  create(newBox) {
    //Here we take the exsiting state and add on to it by using the spread method
    this.setState({
      box: [...this.state.box, newBox]
    });
  }
  render() {
    const boxes = this.state.box.map(box => (
      <Box
        height={box.height}
        width={box.width}
        color={box.color}
        id={box.id}
        key={box.id}
      />
    ));
    return (
      <div>
        <h1>Box Maker</h1>
        <NewForm createBox={this.create} />
        {boxes}
      </div>
    );
  }
}

export default BoxList;
