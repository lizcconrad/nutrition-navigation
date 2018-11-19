import React, {Component} from 'react';
import {Button, Grid, Cell } from 'react-md';
import './styles/FoodItem.css';
import InfoDialog from './InfoDialog';
  
export default class FoodItem extends Component {
    state = { visible: false };
  
    show = () => {
      this.setState({ visible: true });
    };
  
    hide = () => {
      this.setState({ visible: false });
    };
  
    handleKeyDown = (e) => {
      const key = e.which || e.keyCode;
      if (key === 13 || key === 32) {
        // also close on enter or space keys
        this.hide();
      }
    };

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
                  <Button flat primary swapTheming> ADD </Button>
                </Cell>
            </Grid>
        );
     }
}