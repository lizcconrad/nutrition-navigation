import React, { Component } from 'react';
import './styles/QuickMetric.css';
import { Cell } from 'react-md'; 

// Shows quick information about the metrics of the meal
export default class QuickMetric extends Component {
  render() {
    return (
      <Cell size={this.props.size}>
        <span className="quick-title">{ this.props.metric + ": " }</span>
        <span className="quick-value">{ this.props.value }</span>
      </Cell>
    )
  }
}
