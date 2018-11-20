import React, {Component} from 'react';
import {ListItem, FontIcon} from 'react-md';

  
export default class CartItem extends Component {

  handleClick = () => {
    this.props.removeItem(this.props.food);
 
  }

    render() {
      return (
        <ListItem onClick={this.handleClick}
          leftIcon={<FontIcon>close</FontIcon>}
          primaryText={this.props.food.item}
          secondaryText={this.props.food.price}
          key={this.props.listKey}
        />
      );
     }
}