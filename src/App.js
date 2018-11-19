import React, { Component } from 'react';
import './styles/App.css';
import Filters from './Filters.js';
import MealPlanner from './MealPlanner.js';
import FoodList from './FoodList.js';
import Cart from './Cart.js';
import { Grid, Cell } from 'react-md';
import hamburger_data from './food_data/Hamburgers.json';

class App extends Component {

  constructor(props) {
    super(props);

    this.meal = hamburger_data;
  }

  render() {
    return (
      <Grid>
      <Cell size={3}>
        <Filters />
      </Cell>
      <Cell size={7}>
        <MealPlanner meal={[this.meal[0], this.meal[1]]}/>
        <FoodList />
      </Cell>
      <Cell size={2}>
        <Cart />
      </Cell>
      </Grid>
    );
  }
}

export default App;
