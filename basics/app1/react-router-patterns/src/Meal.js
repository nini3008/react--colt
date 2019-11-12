import React, { Component } from 'react';

class Meal extends Component {

    render() {
        const foodName = this.props.match.params.foodName;
        const drinkName = this.props.match.params.drinkName;
        return (
            <div className="Meal">
                <h1> I enjoy this meal called {foodName} & drinking {drinkName}</h1>
            </div>
        );
    }
}

export default Meal;