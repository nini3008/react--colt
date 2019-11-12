import React from 'react';
import Food from './Food';
import Meal from './Meal';
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
      <Route
        exact
        path="/food/:foodName/drink/:drinkName"
        component={Meal}
      />
    </div>
  );
}

export default App;
