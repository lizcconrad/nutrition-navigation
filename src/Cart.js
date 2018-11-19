import React, { Component } from 'react';
import './styles/Cart.css';
import { Card, CardTitle, CardActions, CardText } from 'react-md'; 


export default class Cart extends Component {
  render() {
    return (
      <Card >
        <CardTitle
        title="Cart"
        />
        <CardActions expander>
        </CardActions>
        <CardText expandable>
          <p>This is Your Cart</p>
        </CardText>
      </Card>
    )
  }
}

