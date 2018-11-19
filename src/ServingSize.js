import React, { Component } from 'react';
import { List, ListItem, Button } from 'react-md';

export default class ServingSize extends Component {

  createMealList = () => {
    let mealList = []

    for(let i=0; i < this.props.meal.length; i++) {
      mealList.push(
        <ListItem
          primaryText={this.props.meal[i].item}
          renderChildrenOutside
          primaryAction={
            <Button icon primary>info</Button>
          }
          onClick={this.handleClick}
        >
          <Button icon primary>cancel</Button>
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
