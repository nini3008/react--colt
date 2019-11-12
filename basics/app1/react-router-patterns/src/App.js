import React from 'react';
import Food from './Food';
import { Route } from 'react-router-dom'
import './App.css';

function App() {

  return (
    <div className="App">
      <Route
        exact
        path="/food/:name"
        render={(routeProps) => <Food {...routeProps} />}
      />
    </div>
  );
}

export default App;
