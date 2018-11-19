import React, { Component } from 'react';
import { TextField, SelectField } from 'react-md';

export default class GoalInput extends Component {
  render() {

    let textField;
    if(this.props.defaultGoal === "None set") {
      textField = <TextField size={15} fullWidth={false} onBlur={this.props.handleInput} className="textfield-margin" id={this.props.id + "-goal"} label={this.props.label} />
    } else {
      textField = <TextField size={15} fullWidth={false} onBlur={this.props.handleInput} className="textfield-margin" id={this.props.id + "-goal"} label={this.props.label} defaultValue={this.props.defaultGoal} />
    }

    return (
      <div>
        <SelectField
            id={this.props.id + "-select"}
            className="md-cell selector md-cell--5"
            menuItems={this.props.STRING_SELECTORS}
            defaultValue={this.props.defaultSelector}
            onBlur={this.props.handleSelection}
          />
          {textField}
      </div>
    )
  }
}
