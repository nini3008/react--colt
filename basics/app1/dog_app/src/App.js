import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from './Header';
import DogList from './Doglist';
import Dog from './Dog'

import whiskey from './images/whiskey.jpg';
import tubby from './images/tubby.jpg';
import hazel from './images/hazel.jpg';

import './App.css';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn",
          "Whiskey is a terribke guard dog",
          "whiskey wants to cuddle with you",
          "whiskey na baba"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel loves eating popcorn",
          "Hazel is a terribke guard dog",
          "Hazel wants to cuddle with you"
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby loves eating popcorn",
          "Tubby is a terribke guard dog",
          "Tubby wants to cuddle with you"
        ]
      }
    ]
  }
  render() {
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <Dog {...props} dog={currentDog} />
    }
    return (
      <div>
        <Header dogs={this.props.dogs} />
        <Switch>
          <Route exact path="/dogs" render={() => <DogList dogs={this.props.dogs} />} />
          <Route exact path="/dogs/:name" render={getDog} />
          <Redirect to="/dogs" />
        </Switch>
      </div>
    );
  }

}

export default App;
