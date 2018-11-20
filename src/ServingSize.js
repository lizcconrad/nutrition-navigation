import React, { Component } from 'react';
import { List, ListItem, FontIcon } from 'react-md';

export default class ServingSize extends Component {

  mouseOver = (event) => {
    let hoverText = event.currentTarget.getElementsByClassName("md-text")[0].textContent
    for(let i=0; i < this.props.meal.length; i++) {
      if(this.props.meal[i].item === hoverText) {
        this.props.mouseOver(this.props.meal[i]);
        return;
      }
    }
    
  }

  createMealList = () => {
    let mealList = []

    for(let i=0; i < this.props.meal.length; i++) {
      mealList.push(
        <ListItem
          className="serving-size-item"
          primaryText={this.props.meal[i].item}
          leftIcon={<FontIcon key="info">close</FontIcon>}
          onClick={this.handleClick}
          onMouseOver={this.mouseOver}
          onMouseLeave={this.props.mouseLeave}
          key={i}
        >
        </ListItem>
      );
    }

    return mealList;
  }

  handleClick = (event) => {
    let text = event.currentTarget.getElementsByClassName("md-text")[0].textContent;
    for(let i=0; i < this.props.meal.length; i++) {
      if(this.props.meal[i].item === text) {
        this.props.removeItem(this.props.meal[i]);
        break;
      }
    }

    if(this.props.meal.length <= 0) {
      this.props.mouseLeave();
    }
  }

  render() {
    return (
      <div className="servingsize">
        <span>Serving size: </span>
        <List>
          {this.createMealList()}
        </List>
      </div>
    )
  }
}
