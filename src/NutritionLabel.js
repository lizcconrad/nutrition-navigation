import React, { Component } from 'react';
import './styles/NutritionLabel.css';
import { Divider, Grid, Cell } from 'react-md';
import NutritionEntry from './NutritionEntry';
import ServingSize from './ServingSize.js'

export default class NutritionLabel extends Component {

  getAllergens = () => {
    let allergens = new Set();

    for(let i=0; i < this.props.meal.length; i++) {
      for(let j=0; j < this.props.meal[i].allergens.length; j++) {
        allergens.add(this.props.meal[i].allergens[j]);
      }
    }

    let allergenString = "";
    allergens.forEach(function(allergen) {
      allergenString += allergen + ", "
    });
    allergenString = allergenString.substring(0, allergenString.length - 2).toLocaleUpperCase();

    console.log(allergenString);

    return allergenString;

  }

  calculateGoalPercentage = (current, goal) => {
    if(isNaN(goal)) {
      return goal;
    } else {
      return parseInt((current / goal) * 100);
    }
  }

  render() {

    console.log(this.props.meal);
    console.log(this.getAllergens());

    return (
      <div className="nutrition-label">
        <h2>Nutrition Facts</h2>
        <Grid>

          <ServingSize  meal={this.props.meal} />

          <Divider className="big-divider"/>
          <Cell size={12} className="goal-cell">
            <span>% Goal/Limit</span>
          </Cell>
          <Divider className="small-divider" />
          <NutritionEntry 
            bold={true} 
            label="Calories " 
            value={ this.props.calories + " (" + this.props.calories_from_fat + " from Fat)" } 
            goal={this.calculateGoalPercentage(this.props.calories, this.props["calories-goal"])}
            type={this.props["calories-select"]} />
          <Divider className="medium-divider" />
          <NutritionEntry 
            bold={true} 
            label="Total Fat " 
            value={this.props.total_fat + "g"} 
            goal={this.calculateGoalPercentage(this.props.total_fat, this.props["fat-goal"])}
            type={this.props["fat-select"]} />
          <Divider className="small-divider inset" />
          <NutritionEntry 
            inset={true} 
            label="Saturated Fat" 
            value={this.props.saturated_fat + "g"} />
          <Divider className="small-divider inset" />
          <NutritionEntry 
            inset={true} 
            label="Trans Fat" 
            value={this.props.trans_fat + "g"} />
          <Divider className="small-divider inset" />
          <NutritionEntry 
            inset={true} 
            label="Monounsaturated Fat" 
            value={this.props.monounsaturated_fat + "g"} />
          <Divider className="small-divider inset" />
          <NutritionEntry 
            inset={true} 
            label="Polyunsaturated Fat" 
            value={this.props.polyunsaturated_fat + "g"} />
          <Divider className="small-divider" />
          <NutritionEntry 
            bold={true} 
            label="Cholesterol " 
            value={this.props.cholesterol + "mg"} 
            goal={this.calculateGoalPercentage(this.props.cholesterol, this.props["cholesterol-goal"])}
            type={this.props["cholesterol-select"]} />
          <Divider className="small-divider" />
          <NutritionEntry 
            bold={true} 
            label="Sodium " 
            value={this.props.sodium + "mg"} 
            goal={this.calculateGoalPercentage(this.props.sodium, this.props["sodium-goal"])}
            type={this.props["sodium-select"]} />
          <Divider className="small-divider" />
          <NutritionEntry 
            bold={true} 
            label="Carbohydrates " 
            value={this.props.carbohydrates + "g"} 
            goal={this.calculateGoalPercentage(this.props.carbohydrates, this.props["carbs-goal"])}
            type={this.props["carbs-select"]} />
          <Divider className="small-divider inset" />
          <NutritionEntry 
            inset={true} 
            label="Fiber" 
            value={this.props.fiber + "g"} 
            goal={this.calculateGoalPercentage(this.props.fiber, this.props["fiber-goal"])}
            type={this.props["fiber-select"]} />
          <Divider className="small-divider inset" />
          <NutritionEntry 
            inset={true} 
            label="Sugar" 
            value={this.props.sugar + "g"} 
            goal={this.calculateGoalPercentage(this.props.sugar, this.props["sugar-goal"])}
            type={this.props["sugar-select"]} />
          <Divider className="small-divider" />
          <NutritionEntry 
            bold={true} 
            label="Protein " 
            value={this.props.protein + "g"} 
            goal={this.calculateGoalPercentage(this.props.protein, this.props["protein-goal"])}
            type={this.props["protein-select"]} />
          <Divider className="big-divider" />
          <NutritionEntry 
            label="Vitamin A " 
            value={this.props.vitamin_a + "% DV"} />
          <Divider className="small-divider" />
          <NutritionEntry 
            label="Vitamin C " 
            value={this.props.vitamin_c + "% DV"} />
          <Divider className="small-divider" />
          <NutritionEntry 
            label="Calcium " 
            value={this.props.calcium + "% DV"} />
          <Divider className="small-divider" />
          <NutritionEntry 
            label="Iron " 
            value={this.props.iron + "% DV"} />
          <Divider className="medium-divider" />
          <Cell size={12} className="skinny-cell"> 
            <span className="bold">{"CONTAINS: " + this.getAllergens()}</span>
          </Cell>
        </Grid>
      </div>
    )
  }
}
