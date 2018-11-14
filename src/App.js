import React, { Component } from 'react';
import './styles/App.css';
import Filters from './Filters.js';
import MealPlanner from './MealPlanner.js';
import FoodList from './FoodList.js';
import Cart from './Cart.js';
import { Grid, Cell } from 'react-md';

class App extends Component {
  render() {
    return (
      <Grid>
      <Cell size={3}>
        <Filters />
      </Cell>
      <Cell size={7}>
        <MealPlanner />
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
