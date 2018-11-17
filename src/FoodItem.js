import React, {Component} from 'react';
import {Button, Grid, Cell} from 'react-md';

export default class FoodItem extends Component {
    render() {
        return (
            <Grid className="FoodItem">
                <Cell Size={2}> {this.props.name} </Cell>
                <Cell size={2}> {this.props.cal} cal</Cell>
                <Cell size={3} offset={1}>
                <Button raised> Nutrition Info</Button>
                </Cell>
                <Cell size={2}>
                <Button flat primary swapTheming> ADD </Button>
                </Cell>
            </Grid>
        )
    }
}