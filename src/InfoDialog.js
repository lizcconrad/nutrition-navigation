import React, {Component} from 'react';
import {Button, DialogContainer, Grid, Cell, Media } from 'react-md';
import './styles/InfoDialog.css';
import NutritionLabel from './NutritionLabel.js';
  
export default class InfoDialog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }

  }

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

    const food = this.props.food;
    const metrics = {
      "calories": food.metrics["calories"].value,
      "calories from fat": food.metrics["calories from fat"].value,
      "total fat": food.metrics["total fat"].value,
      "saturated fat": food.metrics["saturated fat"].value,
      "trans fat": food.metrics["trans fat"].value,
      "monounsaturated fat": food.metrics["monounsaturated fat"].value,
      "polyunsaturated fat": food.metrics["polyunsaturated fat"].value,
      "cholesterol": food.metrics["cholesterol"].value,
      "sodium": food.metrics["sodium"].value,
      "carbohydrates": food.metrics["carbohydrates"].value,
      "fiber": food.metrics["fiber"].value,
      "sugar": food.metrics["sugar"].value,
      "protein": food.metrics["protein"].value,
      "vitamin A": food.metrics["vitamin A"].value,
      "vitamin C": food.metrics["vitamin C"].value,
      "calcium": food.metrics["calcium"].value,
      "iron": food.metrics["iron"].value
    }

    const { visible } = this.state;
    const actions = [{
        onClick: this.hide,
        primary: true,
        children: 'OK',
      }];
    return (
      <div>
      <Button raised onClick={this.show}> Nutrition Info</Button>
        <DialogContainer
        id="nutrition-dialog"
        visible={visible}
        title={food.item}
        onHide={this.hide}
        actions={actions}
        aria-describedby="nutrition-dialog-child"
        width="60%"
        >
          <Grid id="nutrition-dialog-child" className="md-color--secondary-text">
            <Cell size={8}>
              <p>{food.description}</p>
            </Cell>
            <Cell size={6}>
              <NutritionLabel 
                metrics={metrics}
                goals={false}
                meal={[food]}
            />
            </Cell>
            <Cell size={6}>
            <Media aspectRatio="1-1">
              <img className="food-image" src={food.img} alt={food.item} />
            </Media>
            </Cell>
          </Grid>
        </DialogContainer>
      </div>
    );
  }
}