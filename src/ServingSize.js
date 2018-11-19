import React, { Component } from 'react';
import { List, ListItem, Button, FontIcon } from 'react-md';

export default class ServingSize extends Component {

  createMealList = () => {
    let mealList = []

    for(let i=0; i < this.props.meal.length; i++) {
      mealList.push(
        <ListItem
          className="serving-size-item"
          primaryText={this.props.meal[i].item}
          leftIcon={<FontIcon key="info">info</FontIcon>}
          // renderChildrenOutside
          onClick={this.handleClick}
          key={i}
        >
          {/* <Button icon primary>close</Button> */}
        </ListItem>
      );
    }

    return mealList;
  }

  handleClick = () => {
    alert("howdy");
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
