import React, { Component } from 'react';
import { Chip } from 'react-md';
import './styles/ChipList.css'

export default class ChipList extends Component {

  createChipList = () => {
    let chipList = []

    for(let i = 0; i < this.props.ingredients.length; i++) {
      chipList.push(<Chip 
        key={i} 
        className="chip" 
        label={this.props.ingredients[i]} 
        removable
        onClick={this.props.handleExcludeClick}
        />);
    }
    return chipList
  }

  render() {
    return (
      <div className="chips__list">
        {this.createChipList()}
      </div>
    )
  }
}
