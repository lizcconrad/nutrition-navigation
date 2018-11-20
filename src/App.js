import React, { Component } from 'react';
import './styles/App.css';
import Filters from './Filters.js';
import MealPlanner from './MealPlanner.js';
import FoodList from './FoodList.js';
import Cart from './Cart.js';
import { Grid, Cell, TabsContainer, Tabs, Tab, Media } from 'react-md'; 
import hamburger_data from './food_data/Hamburgers.json'
import chicken_data from './food_data/Chicken.json'
import salad_data from './food_data/Salads.json'
import sides_data from './food_data/Sides.json'
import beverages_data from './food_data/Beverages.json'
import frosty_data from './food_data/Frosty.json'
import bakery_data from './food_data/Bakery.json'
import breakfast_data from './food_data/Breakfast.json'

class App extends Component {

  getIngredientsList = (categoryList) => {
    let ingredientList = new Set();
    let ingredientsOfItem;
    for(let i=0; i < categoryList.length; i++) {
      ingredientsOfItem = categoryList[i].ingredients;
      for(let key in ingredientsOfItem) {
        ingredientList.add(key);
        for(let j=0; j < ingredientsOfItem[key].length; j++) {
          ingredientList.add(ingredientsOfItem[key][j]);
        }
      }
    }

    return [...ingredientList];
  }

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
    this.allFoods = [this.hamburger, this.chicken, this.salad, this.sides, this.beverages, this.frosty, this.bakery, this.breakfast].flat();
    this.allIngredients = this.getIngredientsList(
      [this.hamburger, this.chicken, this.salad, this.sides, this.beverages, this.frosty, this.bakery, this.breakfast].flat()
    );

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
      excludedFoods: [],
      excludedAllergens: [],
      excludedIngredients: [],
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

  isIn = (dataToSearch, dataToCheck) => {
    for(let i = 0; i < dataToCheck.length;i++){
      if(dataToSearch === dataToCheck[i]){
        return true;
      }
    }
    return false;
  }

  // Filter Wrapper
  filterData = (allergens, ingredients, sliderData, foodItems) => {
    var filteredList = [];
    foodItems = this.allFoods;
    //fake data
    var testAllergy = ["egg", "milk", "soy"];
    var testIngredients = [];
    var testSliders = {"calories": {"value": 310},
    "calories from fat": {"value": 140},
    "sugar": {"value": 24, "unit": "g"},
    "protein": {"value": 3, "unit": "g"},
    "total fat": {"value": 16, "unit": "g"},
    "sodium": {"value": 210, "unit": "mg"},
    "carbohydrates": {"value": 40, "unit": "g"}
    };
    //

    filteredList = this.filterAllergens(foodItems,testAllergy);
    console.log(filteredList)
    console.log(filteredList.length)
    //filteredList = this.filterIngredients(filteredList,ingredients);
    filteredList = this.filterMetric(filteredList,testSliders);
    console.log(filteredList)
    console.log(filteredList.length)
    return filteredList;
  }

  // Filter allergens
  filterAllergens = (foodItems, allergensData) => {
    var filteredList = [];
    
    if(allergensData === null || allergensData.length === 0){
      return foodItems;
    }

    let check = 0;
    for(let i = 0; i < foodItems.length;i++){
      check = 0; // reset counter
      for(let j = 0; j < allergensData.length;j++){
        if(this.isIn(allergensData[j],foodItems[i].allergens)){
          check = 1;
          break; // don't need to seethe rest.
        }
      }
      if(check === 0){ //value passed tests. insert.
        filteredList.push(foodItems[i]);
      }
    }

    return foodItems;
  }

  // Filter allergens
  // type is for include or exclude
  filterIngredients = (ingredients, type) => {

  }

  // Filter by the slider
  filterMetric = (foodItems, metricData) => {
    var filteredList = [];

    let check = 0;
    for(let i = 0; i < foodItems.length;i++){
      check = 0; // reset counter
      for(let key in metricData){
        if(foodItems[i].metrics.key.value > metricData.key.value){
          check = 1;
          break;
        }
      }
      if(check === 0){
        filteredList.push(foodItems[i]);
      }
    }
    return filteredList;
  }


  addExcludedIngredient = (value) => {
    let currentExcluded = this.state.excludedIngredients;
    currentExcluded.push(value);
    this.setState({
      excludedIngredients: currentExcluded
    })
  }
  removeExcludedIngredient = (event) => {
    let ingredient = event.currentTarget.getElementsByClassName("md-chip-text")[0].textContent;
    let currentExcluded = this.state.excludedIngredients;
    let index = currentExcluded.indexOf(ingredient);
    if(index !== -1) {
      currentExcluded.splice(index);
      this.setState({
        excludedIngredients: currentExcluded
      })
    }
  }

  render() {
    return (
      <div>
      <TabsContainer panelClassName="md-grid" fixed colored>
        <Tabs tabId="simple-tab">
          <Tab icon={<img src="http://pluspng.com/img-png/wendys-logo-png-logo-wendy-s-1110.png" alt="Wendys" height="30" width="100"/>}/>
          <Tab label="Explore Our Food"/>
          <Tab label="What We Value"/>
          <Tab label="Who We Are"/>
          <Tab label="Find Jobs"/>
          <Tab label=""/>
          <Tab label="Sign In"/>
          <Tab label="Find a Wendy's"/>
          <Tab label="Order Online"/>
       </Tabs>
      </TabsContainer>
      <Grid>
      <Cell size={3}>
        <Filters 
          ingredientList={this.allIngredients} 
          excludedIngredients={this.state.excludedIngredients} 
          handleAutocomplete={this.addExcludedIngredient}
          handleExcludeClick={this.removeExcludedIngredient}
          handleFilterClick={this.filterData}
          />
      </Cell>
      <Cell size={7}>
        <MealPlanner meal={this.state.meal}/>
        <FoodList addItem={this.addItem}/>
      </Cell>
      <Cell size={2}>
        <Cart meal={this.state.meal}/>
      </Cell>
      </Grid>
      </div>
    );
  }
}

export default App;