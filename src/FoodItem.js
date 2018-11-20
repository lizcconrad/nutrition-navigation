import React, {Component} from 'react';
import {Button, Grid, Cell } from 'react-md';
import './styles/FoodItem.css';
import InfoDialog from './InfoDialog';
  
export default class FoodItem extends Component {
  handleClick = () => {
    this.props.addItem(this.props.food);
  }

  render() {
      return (
          <Grid className="FoodItem">
              <Cell size={4}> {this.props.name} </Cell>
              <Cell size={2}> {this.props.cal} cal</Cell>
              <Cell size={1}> ${this.props.price}</Cell>
              <Cell size={3}>
                <InfoDialog food={this.props.food}/>
              </Cell>
              <Cell size={2}>
                <Button flat primary swapTheming onClick={this.handleClick}> ADD </Button>
              </Cell>
          </Grid>
      );
    }
}