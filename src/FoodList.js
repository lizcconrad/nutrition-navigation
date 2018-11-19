import React, { Component } from 'react';
import FoodItem from './FoodItem.js'
import hamburger_data from './food_data/Hamburgers.json'
import chicken_data from './food_data/Chicken.json'
import salad_data from './food_data/Salads.json'
import sides_data from './food_data/Sides.json'
import beverages_data from './food_data/Beverages.json'
import frosty_data from './food_data/Frosty.json'
import bakery_data from './food_data/Bakery.json'
import breakfast_data from './food_data/Breakfast.json'
import { ExpansionList, ExpansionPanel, List, Divider } from 'react-md';
import './styles/FoodList.css';

export default class FoodList extends Component {
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
  }

  createFoodList = (foodType) => {
    let foodList = []

    for(let i = 0; i < foodType.length; i++) {
        foodList.push(<FoodItem name= { foodType[i].item} cal={ foodType[i].metrics.calories.value}/>)
        if(i!== foodType.length-1) foodList.push(<Divider/>)
    }
    return foodList
  }
  render() {
    return (
      <div className="foodlist">
      <ExpansionList className= "md-cell md-cell--12">

      <ExpansionPanel label="Hamburgers" footer={null}>
        <List>
          {this.createFoodList(this.hamburger)}
        </List>
      </ExpansionPanel>

      <ExpansionPanel label="Chicken, Wraps & More" footer={null}>
        <List>
          {this.createFoodList(this.chicken)}
        </List>
      </ExpansionPanel>

      <ExpansionPanel label="Fresh Made Salads" footer={null}>
        <List>
          {this.createFoodList(this.salad)}
        </List>
      </ExpansionPanel>

      <ExpansionPanel label="Fries & Sides" footer={null}>
        <List>
          {this.createFoodList(this.sides)}
        </List>
      </ExpansionPanel>

      <ExpansionPanel label="Beverages" footer={null}>
        <List>
          {this.createFoodList(this.beverages)}
        </List>
      </ExpansionPanel>

      <ExpansionPanel label="Frosty®" footer={null}>
        <List>
          {this.createFoodList(this.frosty)}
        </List>
      </ExpansionPanel>

      <ExpansionPanel label="Bakery" footer={null}>
        <List>
          {this.createFoodList(this.bakery)}
        </List>
      </ExpansionPanel>

      <ExpansionPanel label="Breakfast" footer={null}>
        <List>
          {this.createFoodList(this.breakfast)}
        </List>
      </ExpansionPanel>

    </ExpansionList>
      </div>
    )
  }
}
