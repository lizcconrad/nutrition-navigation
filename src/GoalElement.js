import React, { Component } from 'react';
import { TextField } from 'react-md'; 

export default class GoalElement extends Component {

  onChange(value, event) {
    this.props.onChange(event.target.id, value);
  }

  render() {
    return (
      <TextField
        id={this.props.metric + "Goal"}
        label={this.props.metric}
        lineDirection="center"
        className="md-cell md-cell--bottom"
        onChange={this.onChange.bind(this)}
        defaultValue={this.props.defaultGoal}
      />
    )
  }
}
