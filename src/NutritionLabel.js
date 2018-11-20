import React, { Component } from 'react';
import './styles/NutritionLabel.css';
import { Divider, Grid, Cell } from 'react-md';
import NutritionEntry from './NutritionEntry';
import ServingSize from './ServingSize.js'

export default class NutritionLabel extends Component {

  getAllergens = () => {
    let allergenString = "";
    let allergens = new Set();

    for(let i=0; i < this.props.meal.length; i++) {
      if(this.props.meal[i].allergens) {
        for(let j=0; j < this.props.meal[i].allergens.length; j++) {
          allergens.add(this.props.meal[i].allergens[j]);
        }
      }
    }

    allergens.forEach(function(allergen) {
      allergenString += allergen + ", "
    });
    allergenString = allergenString.substring(0, allergenString.length - 2).toLocaleUpperCase();

    return allergenString;
  }

  calculateGoalPercentage = (current, goal) => {
    if(isNaN(goal)) {
      return goal;
    } else {
      return parseInt((current / goal) * 100);
    }
  }

  mouseOver = (item) => {
    this.setState({
      hoverCalories: item.metrics["calories"].value,
      hoverCalFromFat: item.metrics["calories from fat"].value,
      hoverTotalFat: item.metrics["total fat"].value,
      hoverSaturatedFat: item.metrics["saturated fat"].value,
      hoverTransFat: item.metrics["trans fat"].value,
      hoverMonoFat: item.metrics["monounsaturated fat"].value,
      hoverPolyFat: item.metrics["polyunsaturated fat"].value,
      hoverCholesterol: item.metrics["cholesterol"].value,
      hoverSodium: item.metrics["sodium"].value,
      hoverCarbs: item.metrics["carbohydrates"].value,
      hoverFiber: item.metrics["fiber"].value,
      hoverSugar: item.metrics["sugar"].value,
      hoverProtein: item.metrics["protein"].value,
      hoverVitA: item.metrics["vitamin A"].value,
      hoverVitC: item.metrics["vitamin C"].value,
      hoverCalcium: item.metrics["calcium"].value,
      hoverIron: item.metrics["iron"].value
    });
  }
  mouseLeave = () => {
    this.setState({
      hoverCalories: null,
      hoverCalFromFat: null,
      hoverTotalFat: null,
      hoverSaturatedFat: null,
      hoverTransFat: null,
      hoverMonoFat: null,
      hoverPolyFat: null,
      hoverCholesterol: null,
      hoverSodium: null,
      hoverCarbs: null,
      hoverFiber: null,
      hoverSugar: null,
      hoverProtein: null,
      hoverVitA: null,
      hoverVitC: null,
      hoverCalcium: null,
      hoverIron: null
    })
  }

  constructor(props) {
    super(props);

    this.state = {
      hoverCalories: null,
      hoverCalFromFat: null,
      hoverTotalFat: null,
      hoverSaturatedFat: null,
      hoverTransFat: null,
      hoverMonoFat: null,
      hoverPolyFat: null,
      hoverCholesterol: null,
      hoverSodium: null,
      hoverCarbs: null,
      hoverFiber: null,
      hoverSugar: null,
      hoverProtein: null,
      hoverVitA: null,
      hoverVitC: null,
      hoverCalcium: null,
      hoverIron: null
    }
  }

  render() {

    let servingSize;
    let goalCell;
    if(this.props.goals) {
      servingSize = <ServingSize  meal={this.props.meal} mouseOver={this.mouseOver} mouseLeave={this.mouseLeave} removeItem={this.props.removeItem}/>
      goalCell = 
      <Cell size={12} className="goal-cell">
        <span>% Goal/Limit</span>
      </Cell>;
    }

    return (
      <div className="nutrition-label">
        <h2>Nutrition Facts</h2>
        <Grid>
          {servingSize}
          <Divider className="big-divider"/>
          {goalCell}
          <Divider className="small-divider" />
          <NutritionEntry 
            bold={true} 
            label="Calories " 
            hoverValue={this.state.hoverCalories}
            value={ this.props.metrics["calories"] + " (" + this.props.metrics["calories from fat"] + " from Fat)" } 
            goal={this.calculateGoalPercentage(this.props.metrics["calories"], this.props["calories-goal"])}
            type={this.props["calories-select"]}
          />
          <Divider className="medium-divider" />
          <NutritionEntry 
            bold={true} 
            label="Total Fat " 
            hoverValue={this.state.hoverTotalFat}
            value={this.props.metrics["total fat"] + "g"} 
            goal={this.calculateGoalPercentage(this.props.metrics["total fat"], this.props["fat-goal"])}
            type={this.props["fat-select"]} />
          <Divider className="small-divider inset" />
          <NutritionEntry 
            inset={true} 
            label="Saturated Fat" 
            hoverValue={this.state.hoverSaturatedFat}
            value={this.props.metrics["saturated fat"] + "g"} />
          <Divider className="small-divider inset" />
          <NutritionEntry 
            inset={true} 
            label="Trans Fat" 
            hoverValue={this.state.hoverTransFat}
            value={this.props.metrics["trans fat"] + "g"} />
          <Divider className="small-divider inset" />
          <NutritionEntry 
            inset={true} 
            label="Monounsaturated Fat" 
            hoverValue={this.state.hoverMonoFat}
            value={this.props.metrics["monounsaturated fat"] + "g"} />
          <Divider className="small-divider inset" />
          <NutritionEntry 
            inset={true} 
            label="Polyunsaturated Fat" 
            hoverValue={this.state.hoverPolyFat}
            value={this.props.metrics["polyunsaturated fat"] + "g"} />
          <Divider className="small-divider" />
          <NutritionEntry 
            bold={true} 
            label="Cholesterol " 
            hoverValue={this.state.hoverCholesterol}
            value={this.props.metrics["cholesterol"] + "mg"} 
            goal={this.calculateGoalPercentage(this.props.metrics["cholesterol"], this.props["cholesterol-goal"])}
            type={this.props["cholesterol-select"]} />
          <Divider className="small-divider" />
          <NutritionEntry 
            bold={true} 
            label="Sodium " 
            hoverValue={this.state.hoverSodium}
            value={this.props.metrics["sodium"] + "mg"} 
            goal={this.calculateGoalPercentage(this.props.metrics["sodium"], this.props["sodium-goal"])}
            type={this.props["sodium-select"]} />
          <Divider className="small-divider" />
          <NutritionEntry 
            bold={true} 
            label="Carbohydrates " 
            hoverValue={this.state.hoverCarbs}
            value={this.props.metrics["carbohydrates"] + "g"} 
            goal={this.calculateGoalPercentage(this.props.metrics["carbohydrates"], this.props["carbs-goal"])}
            type={this.props["carbs-select"]} />
          <Divider className="small-divider inset" />
          <NutritionEntry 
            inset={true} 
            label="Fiber" 
            hoverValue={this.state.hoverFiber}
            value={this.props.metrics["fiber"] + "g"} 
            goal={this.calculateGoalPercentage(this.props.metrics["fiber"], this.props["fiber-goal"])}
            type={this.props["fiber-select"]} />
          <Divider className="small-divider inset" />
          <NutritionEntry 
            inset={true} 
            label="Sugar" 
            hoverValue={this.state.hoverSugar}
            value={this.props.metrics["sugar"] + "g"} 
            goal={this.calculateGoalPercentage(this.props.metrics["sugar"], this.props["sugar-goal"])}
            type={this.props["sugar-select"]} />
          <Divider className="small-divider" />
          <NutritionEntry 
            bold={true} 
            label="Protein " 
            hoverValue={this.state.hoverProtein}
            value={this.props.metrics["protein"] + "g"} 
            goal={this.calculateGoalPercentage(this.props.metrics["protein"], this.props["protein-goal"])}
            type={this.props["protein-select"]} />
          <Divider className="big-divider" />
          <NutritionEntry 
            label="Vitamin A " 
            hoverValue={this.state.hoverVitA}
            value={this.props.metrics["vitamin A"] + "% DV"} />
          <Divider className="small-divider" />
          <NutritionEntry 
            label="Vitamin C " 
            hoverValue={this.state.hoverVitC}
            value={this.props.metrics["vitamin A"] + "% DV"} />
          <Divider className="small-divider" />
          <NutritionEntry 
            label="Calcium " 
            hoverValue={this.state.hoverCalcium}
            value={this.props.metrics["calcium"] + "% DV"} />
          <Divider className="small-divider" />
          <NutritionEntry 
            label="Iron " 
            hoverValue={this.state.hoverIron}
            value={this.props.metrics["iron"] + "% DV"} />
          <Divider className="medium-divider" />
          <Cell size={12} className="skinny-cell"> 
            <span className="bold">{"CONTAINS: " + this.getAllergens()}</span>
          </Cell>
        </Grid>
      </div>
    )
  }
}
