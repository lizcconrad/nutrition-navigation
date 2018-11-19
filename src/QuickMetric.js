import React, { Component } from 'react';
import './styles/MealPlanner.css';
import { Cell } from 'react-md'; 

// Shows quick information about the metrics of the meal
export default class QuickMetric extends Component {
  render() {
    return (
      <Cell size={this.props.size}>
      { this.props.metric }
      { this.props.value }
      </Cell>
    )
  }
}
