import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Doglist.css"

class Doglist extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="DogList">
                <h1 className="display-1 text-center">DogList</h1>
                <div className="container">
                    <div className="row">
                        {this.props.dogs.map(d => (
                            <div className="Dog col-lg-4 text-center" key={d.name}>
                                <img src={d.src} alt={d.name} />
                                <h3><Link to={`/dogs/${d.name}`} >{d.name}</Link></h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Doglist;