import React, { Component } from 'react';
import './styles/MetricSlider.css'
import { Slider } from 'react-md';

export default class MetricSlider extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.max
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value
    });

    this.props.handleSliderChange(value, this.props.metric);
  }

  render() {
    return (
      <div>
        <span className="slider-label">
          {this.props.metric.charAt(0).toUpperCase() + this.props.metric.slice(1) + ": "}
        </span>
        <span>{this.state.value + this.props.unit}</span>
        <Slider
          id={this.props.metric + "-custom-range-slider"}
          min={0}
          max={this.props.max}
          step={this.props.step}
          discrete
          onChange={this.handleChange}
          defaultValue={this.props.max}
          className="slider"
        />
      </div>
    )
  }
}
