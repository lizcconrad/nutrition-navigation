import React, { Component } from 'react';
import "./styles/NutritionEntry.css";
import { Cell } from 'react-md';


export default class NutritionEntry extends Component {
  render() {

    // Label
    let label;
    if (this.props.bold) {
      label = <span className="bold">{this.props.label} </span>
    } else if (this.props.inset) {
      label = <span className="inset">{this.props.label} </span>
    } else {
      label = <span>{this.props.label} </span>
    }

    // Color class
    let colorClass = "";
    let goal;
    if(this.props.type === "At most") {
      if (this.props.goal >= 100) {
        colorClass = "red";
      } else if (this.props.goal >= 50) {
        colorClass = "orange";
      } else if (this.props.goal >= 0) {
        colorClass = "green";
      }
    } else {
      if (this.props.goal >= 100) {
        colorClass = "green";
      } else if (this.props.goal >= 50) {
        colorClass = "orange";
      } else if (this.props.goal >= 0) {
        colorClass = "red";
      }
    }
    

    if (this.props.goal === "None set") {
      goal = <span className="gray">{this.props.goal}</span>
    } else if (this.props.goal) {
      goal = <span>{this.props.goal}%</span>
    }

    return (
      <Cell size={12} className={"skinny-cell container goal-container " + colorClass}>
        <div> 
          {label}
          <span>{this.props.value}</span>
        </div>
        {goal}
      </Cell>
    )
  }
}
