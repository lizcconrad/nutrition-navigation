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
    return (
      <div className="foodlist">
      <ExpansionList className= "md-cell md-cell--12">

      <ExpansionPanel 
        label={
          <div className="expansion-title">
            <span className="food-title">Hamburgers</span>
            <span className="food-count">{"(" + this.props.hamburger.length + ")"}</span>
          </div>
        } 
        footer={null}>
        <List>
          {this.createFoodList(this.props.hamburger)}
        </List>
      </ExpansionPanel>

      <ExpansionPanel 
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
      </ExpansionPanel>

    </ExpansionList>
      </div>
    )
  }
}
