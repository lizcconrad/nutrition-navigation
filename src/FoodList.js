import React, { Component } from 'react';
import FoodItem from './FoodItem.js'
import { ExpansionList, ExpansionPanel, List, Divider } from 'react-md';
import './styles/FoodList.css';

export default class FoodList extends Component {

  createFoodList = (foodType) => {
    let foodList = []

    for(let i = 0; i < foodType.length; i++) {
        foodList.push(<FoodItem 
          key={i} 
          food={foodType[i]} 
          name= { foodType[i].item} 
          cal={ foodType[i].metrics.calories.value} 
          price={ foodType[i].price}
          addItem={this.props.addItem}
          />)
        if(i!== foodType.length-1) foodList.push(<Divider key={"divider-" + i}/>)
    }
    return foodList
  }
  render() {

    let panels = [];
    let categories = [this.props.hamburger, this.props.chicken, this.props.salad, this.props.sides, 
      this.props.beverages, this.props.frosty, this.props.bakery, this.props.breakfast];
    let labels = ["Hamburgers", "Chicken, Wraps & More", "Fresh Made Salads", "Fries & Sides", 
      "Beverages", "Frosty®", "Bakery", "Breakfast"];

    for(let i=0; i < categories.length; i++) {
      if(categories[i].length > 0) {
        panels.push( 
          <ExpansionPanel 
            key={i}
            label={
              <div className="expansion-title">
                <span className="food-title">{labels[i]}</span>
                <span className="food-count">{"(" + categories[i].length + ")"}</span>
              </div>
            } 
            footer={null}>
            <List>
              {this.createFoodList(categories[i])}
            </List>
          </ExpansionPanel>);
      }
    }
    
    return (
      <div className="foodlist">
      <ExpansionList className= "md-cell md-cell--12">
      {panels}
      {/* <ExpansionPanel 
        label={
          <div className="expansion-title">
            <span className="food-title">Chicken, Wraps & More</span>
            <span className="food-count">{"(" + this.props.chicken.length + ")"}</span>
          </div>
        }
        footer={null}>
        <List>
          {this.createFoodList(this.props.chicken)}
        </List>
      </ExpansionPanel>

      <ExpansionPanel 
        label={
          <div className="expansion-title">
            <span className="food-title">Fresh Made Salads</span>
            <span className="food-count">{"(" + this.props.salad.length + ")"}</span>
          </div>
        }
        footer={null}>
        <List>
          {this.createFoodList(this.props.salad)}
        </List>
      </ExpansionPanel>

      <ExpansionPanel 
        label={
          <div className="expansion-title">
            <span className="food-title">Fries & Sides</span>
            <span className="food-count">{"(" + this.props.sides.length + ")"}</span>
          </div>
        }
        footer={null}>
        <List>
          {this.createFoodList(this.props.sides)}
        </List>
      </ExpansionPanel>

      <ExpansionPanel 
        label={
          <div className="expansion-title">
            <span className="food-title">Beverages</span>
            <span className="food-count">{"(" + this.props.beverages.length + ")"}</span>
          </div>
        }
        footer={null}>
        <List>
          {this.createFoodList(this.props.beverages)}
        </List>
      </ExpansionPanel>

      <ExpansionPanel
        label={
          <div className="expansion-title">
            <span className="food-title">Frosty®</span>
            <span className="food-count">{"(" + this.props.frosty.length + ")"}</span>
          </div>
        }
        footer={null}>
        <List>
          {this.createFoodList(this.props.frosty)}
        </List>
      </ExpansionPanel>

      <ExpansionPanel
        label={
          <div className="expansion-title">
            <span className="food-title">Bakery</span>
            <span className="food-count">{"(" + this.props.bakery.length + ")"}</span>
          </div>
        }
        footer={null}>
        <List>
          {this.createFoodList(this.props.bakery)}
        </List>
      </ExpansionPanel>

      <ExpansionPanel
        label={
          <div className="expansion-title">
            <span className="food-title">Breakfast</span>
            <span className="food-count">{"(" + this.props.breakfast.length + ")"}</span>
          </div>
        }
        footer={null}>
        <List>
          {this.createFoodList(this.props.breakfast)}
        </List>
      </ExpansionPanel> */}

    </ExpansionList>
      </div>
    )
  }
}
