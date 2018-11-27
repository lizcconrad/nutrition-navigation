import React, { Component } from 'react';
import './styles/App.css';
import ToolBar from './ToolBar.js';
import Filters from './Filters.js';
import MealPlanner from './MealPlanner.js';
import ExcludedItems from './ExcludedItems.js';
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

  // COMPILE FULL LIST OF INGREDIENTS
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

  // COMPUTE MEAL METRICS AND PRICE
  computePrice = () => {
    let price = 0
    this.state.meal.forEach(function(element) {
      price += element.price;
    });

    this.setState({
      price: price
    })
  }
  computeMetrics = () =>  {
    let metrics = {
      "calories": 0,
      "calories from fat": 0,
      "total fat": 0,
      "saturated fat": 0,
      "trans fat": 0,
      "monounsaturated fat": 0,
      "polyunsaturated fat": 0,
      "cholesterol": 0,
      "sodium": 0,
      "carbohydrates": 0,
      "fiber": 0,
      "sugar": 0,
      "protein": 0,
      "vitamin A": 0,
      "vitamin C": 0,
      "calcium": 0,
      "iron": 0,
    };

    this.state.meal.forEach(function(element) {
      for(var key in element.metrics) {
        metrics[key] += element.metrics[key].value
      }
    });

    this.setState({
      metrics: metrics
    });
  }

  // ADD AND REMOVE ITEMS FROM MEAL/CART
  addItem = (item) => {
    let currentMeal = this.state.meal;
    currentMeal.push(item);

    this.setState({
      meal: currentMeal
    })

    this.computePrice();
    this.computeMetrics();
  }
  removeItem = (item) => {
    let currentMeal = this.state.meal;
    for(let i = 0; i < currentMeal.length;i++){
      if(currentMeal[i] === item){
        currentMeal.splice(i,1);
        break; // added break to fix the removal of multiple of the same item.
      }
    }
    this.setState({
      meal: currentMeal
    })

    this.computePrice();
    this.computeMetrics();
  }

  // UPDATE STATES THAT DEPEND ON FILTERS
  updateExcludedAllergens = (checked, event) => {
    let currentAllergens = this.state.excludedAllergens;
    let allergen = event.target.value;

    if(checked && currentAllergens.indexOf(allergen) < 0) {
      currentAllergens.push(allergen);
    } else if (!checked && currentAllergens.indexOf(allergen) > -1) {
      currentAllergens.splice(currentAllergens.indexOf(allergen));
    }

    this.setState({
      excludedAllergens: currentAllergens
    });   
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
    if(index > -1) {
      currentExcluded.splice(index);
      this.setState({
        excludedIngredients: currentExcluded
      })
    }
  }
  updateMetricFilters = (value, metric) => {
    let currentMetricFilters = this.state.metricFilters;
    currentMetricFilters[metric] = value;

    this.setState({
      metricFilters: currentMetricFilters
    });
  }

  // PERFORM FILTERING
  // Filter allergens
  filterAllergens = (foodList, allergensData) => {
    let foodItems = foodList;
    let excludedFoodItems = [];
    let filteredList = [];
    
    
    if(allergensData === null || allergensData.length <= 0){
      return {
        excludedList: excludedFoodItems,
        filteredList: foodItems
      }
    }

    let check = 0;
    let reasonString;
    for(let i = 0; i < foodItems.length; i++){
      check = 0; // reset counter
      for(let j = 0; j < allergensData.length; j++){
        if(foodItems[i].allergens && foodItems[i].allergens.indexOf(allergensData[j]) > -1) {
          check = 1;
          reasonString = "Contains " + allergensData[j].toUpperCase();
          excludedFoodItems.push({food: foodItems[i], reason: reasonString});
          break;
        }
      }
      if(check <= 0){ //value passed tests. insert.
        filteredList.push(foodItems[i]);
      }
    }

    return {
      excludedList: excludedFoodItems,
      filteredList: filteredList
    }
  }
  // Filter ingredients
  // type is for include or exclude
  filterIngredients = (foodList, excludedIngredients) => {
    // exclude
    let filteredList = [];
    let excludedFoodItems = [];
    let foodItems = foodList;
    let found;
    let reasonString;
  
    if(excludedIngredients === null || excludedIngredients.length <= 0){
      return {
        excludedList: excludedFoodItems,
        filteredList: foodList
      }
    }

    // for ingredient in list of excluded ingredients
    for(let i=0; i < excludedIngredients.length; i++) {
      // for food in list of foods to filter
      for(let j=0; j < foodItems.length; j++) {
        found = false;
        // for key in the dictionary of ingredients for the current food to check

        for(let key in foodItems[j].ingredients) {
          if(key.toLowerCase() === excludedIngredients[i].toLowerCase()) {
            found = true;
            reasonString = "Contains " + excludedIngredients[i].toUpperCase();
            excludedFoodItems.push({food: foodItems[j], reason: reasonString});
            break;
          } else if (foodItems[j].ingredients[key].indexOf(excludedIngredients[i]) > -1) {
            found = true;
            reasonString = "Contains " + excludedIngredients[i].toUpperCase();
            excludedFoodItems.push({food: foodItems[j], reason: reasonString});
            break;
          }
        }
        if(!found) {
          filteredList.push(foodItems[j]);
        }
      }
    }
    
    return {
      excludedList: excludedFoodItems,
      filteredList: filteredList
    }

  }
  // Filter by the slider
  filterMetric = (foodList, metricData) => {
    let foodItems = foodList;
    let filteredList = [];
    let excludedFoodItems = [];

    let check = 0;
    let reasonString = 0;
    for(let i = 0; i < foodItems.length;i++){
      check = 0; // reset counter
      for(let key in metricData){
        if(foodItems[i].metrics[key].value > metricData[key]){
          check = 1;
          if(key === "calories") {
            reasonString = "Greater than " + metricData[key] + " " + key;
          } else {
            reasonString = "Greater than " + metricData[key] + foodItems[i].metrics[key].unit + " of " + key;
          }
          
          excludedFoodItems.push({food: foodItems[i], reason: reasonString});
          break;
        }
      }
      if(check <= 0){
        filteredList.push(foodItems[i]);
      }
    }

    return {
      excludedList: excludedFoodItems,
      filteredList: filteredList
    }
  }
  // Filter Wrapper
  filterData = () => {
    let updatedFood = {}
    let fullExcluded = [];

    let categories = ["hamburger", "chicken", "salad", "sides", "beverages", "frosty", "bakery", "breakfast"];
    let currentList;
    for(let i=0; i < categories.length; i++) {
      currentList = this.categories[categories[i]];
      updatedFood = this.filterAllergens(currentList, this.state.excludedAllergens);
      fullExcluded = fullExcluded.concat(updatedFood.excludedList);

      updatedFood = this.filterIngredients(updatedFood.filteredList, this.state.excludedIngredients);
      fullExcluded = fullExcluded.concat(updatedFood.excludedList);

      updatedFood = this.filterMetric(updatedFood.filteredList, this.state.metricFilters);
      fullExcluded = fullExcluded.concat(updatedFood.excludedList);

      this.setState({
        [categories[i]]: updatedFood.filteredList
      });
    }

    this.setState({
      excludedFoods: fullExcluded
    });
  }


  

  constructor(props) {
    super(props);
    this.categories = {
      hamburger: hamburger_data,
      chicken: chicken_data,
      salad: salad_data,
      sides: sides_data,
      beverages: beverages_data,
      frosty: frosty_data,
      bakery: bakery_data,
      breakfast: breakfast_data
    }
    this.allFoods = [this.hamburger, this.chicken, this.salad, this.sides, this.beverages, this.frosty, this.bakery, this.breakfast].flat();
    this.allIngredients = this.getIngredientsList(
      [this.categories.hamburger, this.categories.chicken, this.categories.salad, this.categories.sides, 
        this.categories.beverages, this.categories.frosty, this.categories.bakery, this.categories.breakfast].flat()
    );

    this.state = {
      meal: [],
      hamburger: this.categories.hamburger,
      chicken: this.categories.chicken,
      salad: this.categories.salad,
      sides: this.categories.sides,
      beverages: this.categories.beverages,
      frosty: this.categories.frosty,
      bakery: this.categories.bakery,
      breakfast: this.categories.breakfast,
      excludedFoods: [],
      excludedAllergens: [],
      excludedIngredients: [],
      metricFilters: {
        "calories": 2000,
        "carbohydrates": 200,
        "total fat": 100,
        "protein": 100,
        "sodium": 3000,
        "sugar": 200
      },
      price: 0,
      metrics: {
        "calories": 0,
        "calories from fat": 0,
        "total fat": 0,
        "saturated fat": 0,
        "trans fat": 0,
        "monounsaturated fat": 0,
        "polyunsaturated fat": 0,
        "cholesterol": 0,
        "sodium": 0,
        "carbohydrates": 0,
        "fiber": 0,
        "sugar": 0,
        "protein": 0,
        "vitamin A": 0,
        "vitamin C": 0,
        "calcium": 0,
        "iron": 0,
      }
    }
  }

  render() {

    let excludedCard;
    if(this.state.excludedFoods.length > 0) {
      excludedCard = <ExcludedItems excluded={this.state.excludedFoods} />;
    }

    return (
      <div>
      <ToolBar />
      <Grid>
      <Cell size={3}>
        <Filters 
          ref="filters"
          ingredientList={this.allIngredients} 
          excludedIngredients={this.state.excludedIngredients} 
          handleAllergenClick={this.updateExcludedAllergens}
          handleAutocomplete={this.addExcludedIngredient}
          handleExcludeClick={this.removeExcludedIngredient}
          handleSliderChange={this.updateMetricFilters}
          handleFilterClick={this.filterData}
          />
      </Cell>
      <Cell size={7}>
        <div className="sticky-div">
          <MealPlanner meal={this.state.meal} metrics={this.state.metrics} removeItem={this.removeItem}/>
          {excludedCard}
          <FoodList 
            addItem={this.addItem}
            hamburger={this.state.hamburger}
            chicken={this.state.chicken}
            salad={this.state.salad}
            sides={this.state.sides}
            beverages={this.state.beverages}
            frosty={this.state.frosty}
            bakery={this.state.bakery}
            breakfast={this.state.breakfast}
            />
          </div>
      </Cell>
      <Cell size={2}>
        <Cart meal={this.state.meal} price={this.state.price}  removeItem={this.removeItem}/>
      </Cell>
      </Grid>
      </div>
    );
  }
}

export default App;