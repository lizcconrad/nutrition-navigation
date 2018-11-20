import React, { Component } from 'react';
import './styles/App.css';
import Filters from './Filters.js';
import MealPlanner from './MealPlanner.js';
import FoodList from './FoodList.js';
import Cart from './Cart.js';
import { Grid, Cell } from 'react-md';
import hamburger_data from './food_data/Hamburgers.json'
import chicken_data from './food_data/Chicken.json'
import salad_data from './food_data/Salads.json'
import sides_data from './food_data/Sides.json'
import beverages_data from './food_data/Beverages.json'
import frosty_data from './food_data/Frosty.json'
import bakery_data from './food_data/Bakery.json'
import breakfast_data from './food_data/Breakfast.json'

class App extends Component {

  constructor(props) {
    super(props);
    this.hamburger = hamburger_data;
    this.chicken = chicken_data;
    this.salad = salad_data;
    this.sides = sides_data;
    this.beverages = beverages_data;
    this.frosty = frosty_data;
    this.bakery = bakery_data;
    this.breakfast = breakfast_data;

    this.state = {
      meal: [],
      hamburger: this.hamburger,
      chicken: this.chicken,
      salad: this.salad,
      sides: this.sides,
      beverages: this.beverages,
      frosty: this.frosty,
      bakery: this.bakery,
      breakfast: this.breakfast,
      excluded: []
    }
  }

  // Add items to the cart and meal planner
  addItem = (item) => {
    let currentMeal = this.state.meal;
    currentMeal.push(item);

    this.setState({
      meal: currentMeal
    })
  }

  // Remove items from the cart and meal planner
  removeItem = (item) => {

  }

  // Filter allergens
  filterAllergens = (allergens) => {

  }

  // Filter allergens
  // type is for include or exclude
  filterIngredients = (ingredients, type) => {

  }

  // Filter by the slider
  filterMetric = (metric, amount) => {

  }

  render() {
    return (
      <Grid>
      <Cell size={3}>
        <Filters />
      </Cell>
      <Cell size={7}>
        <MealPlanner meal={this.state.meal}/>
        <FoodList addItem={this.addItem}/>
      </Cell>
      <Cell size={2}>
        <Cart meal={this.state.meal}/>
      </Cell>
      </Grid>
    );
  }
}

export default App;
