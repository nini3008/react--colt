import React, { Component } from 'react';
import "./Food.css";

class Food extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const name = this.props.match.params.name
        const url = `http://source.unsplash.com/1600x900/?${name}`;
        return (
            <div className="Food">
                <h1>I love to eat  {name} </h1>
                <img src={url} alt={name} />
            </div>
        );
    }
}

export default Food;