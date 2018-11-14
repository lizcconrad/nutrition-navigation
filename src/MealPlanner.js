import React, { Component } from 'react';
import './styles/MealPlanner.css';
import { Card, CardTitle, CardActions, CardText } from 'react-md'; 

export default class MealPlanner extends Component {
  render() {
    return (
    <Card className="md-block-centered">
      <CardTitle
        title="Meal Planner"
      />
      <CardActions expander>
      </CardActions>
      <CardText expandable>
        <p>Bloop! :^) Hello! Welcome to your meal!</p>
      </CardText>
    </Card>
    )
  }
}
