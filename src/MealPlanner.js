import React, { Component } from 'react';
import './styles/MealPlanner.css';
import { Card, CardTitle, CardActions, CardText, Grid, Cell, Paper, FontIcon } from 'react-md'; 
import NutritionLabel from './NutritionLabel.js';
import GoalInput from './GoalInput';
import QuickMetric from './QuickMetric.js';

export default class MealPlanner extends Component {
  handleInput = (event) => {
    let metric = event.currentTarget.id;
    let value = event.currentTarget.value;
    if(!isNaN(parseInt(value))) {
      this.setState({[metric]: value });
    } else if(value === "") {
      this.setState({[metric]: "None set" });
    }
  }

  handleSelection = (event) => {
    console.log(event.currentTarget);
    // this.setState({[details.id]: value});
  }

  constructor(props) {
    super(props);

    this.state = {
      meal: this.props.meal,
      "calories-goal": "None set",
      "fat-goal": "None set",
      "cholesterol-goal": "None set",
      "sodium-goal": "None set",
      "carbs-goal": "None set",
      "fiber-goal": "None set",
      "sugar-goal": "None set",
      "protein-goal": "None set",
      "calories-select": "At most",
      "fat-select": "At most",
      "cholesterol-select": "At most",
      "sodium-select": "At most",
      "carbs-select": "At most",
      "fiber-select": "At least",
      "sugar-select": "At least",
      "protein-select": "At least",
    }
  }

  render() {
    const STRING_SELECTORS = ['At most', 'At least'];

    return (
    <Card className="md-block-centered">
      <CardTitle
        title="Meal Planner"
        className="meal-title"
        avatar={<FontIcon className="icon" primary>fastfood</FontIcon>}
      />
      <CardActions expander>
        <QuickMetric size={3} metric="Calories" value={this.props.metrics["calories"]}/>
        <QuickMetric size={3} metric="Fat" value={this.props.metrics["total fat"]}/>
        <QuickMetric size={3} metric="Carbs" value={this.props.metrics["carbohydrates"]}/>
        <QuickMetric size={3} metric="Protein" value={this.props.metrics["protein"]}/>
      </CardActions>
      <CardText expandable>
        
        <Grid>
          <Cell size={6}>
            <Paper zDepth={0}>
              <h3>My Goals</h3>
              <GoalInput id="calories" label="Calories" defaultGoal={this.state["calories-goal"]} defaultSelector="At most" handleInput={this.handleInput} handleSelection={this.handleSelection} STRING_SELECTORS={STRING_SELECTORS} />
              <GoalInput id="fat" label="Fat" defaultGoal={this.state["fat-goal"]} defaultSelector="At most" handleInput={this.handleInput} handleSelection={this.handleSelection} STRING_SELECTORS={STRING_SELECTORS} />
              <GoalInput id="cholesterol" label="Cholesterol" defaultGoal={this.state["cholesterol-goal"]} defaultSelector="At most" handleInput={this.handleInput} handleSelection={this.handleSelection} STRING_SELECTORS={STRING_SELECTORS} />
              <GoalInput id="sodium" label="Sodium" defaultGoal={this.state["sodium-goal"]} defaultSelector="At most" handleInput={this.handleInput} handleSelection={this.handleSelection} STRING_SELECTORS={STRING_SELECTORS} />
              <GoalInput id="carbs" label="Carbohydrates" defaultGoal={this.state["carbs-goal"]} defaultSelector="At most" handleInput={this.handleInput} handleSelection={this.handleSelection} STRING_SELECTORS={STRING_SELECTORS} />
              <GoalInput id="fiber" label="Fiber" defaultGoal={this.state["fiber-goal"]} defaultSelector="At least" handleInput={this.handleInput} handleSelection={this.handleSelection} STRING_SELECTORS={STRING_SELECTORS} />
              <GoalInput id="sugar" label="Sugar" defaultGoal={this.state["sugar-goal"]} defaultSelector="At most" handleInput={this.handleInput} handleSelection={this.handleSelection} STRING_SELECTORS={STRING_SELECTORS} />
              <GoalInput id="protein" label="Protein" defaultGoal={this.state["protein-goal"]} defaultSelector="At least" handleInput={this.handleInput} handleSelection={this.handleSelection} STRING_SELECTORS={STRING_SELECTORS} />
            </Paper>
          </Cell>
          <Cell size={6}>
              <NutritionLabel 
                meal={this.props.meal}
                goals={true}
                metrics={this.props.metrics}
                calories-goal={this.state["calories-goal"]}
                fat-goal={this.state["fat-goal"]}
                cholesterol-goal={this.state["cholesterol-goal"]}
                sodium-goal={this.state["sodium-goal"]}
                carbs-goal={this.state["carbs-goal"]}
                fiber-goal={this.state["fiber-goal"]}
                sugar-goal={this.state["sugar-goal"]}
                protein-goal={this.state["protein-goal"]}
                calories-select={this.state["calories-select"]}
                fat-select={this.state["fat-select"]}
                cholesterol-select={this.state["cholesterol-select"]}
                sodium-select={this.state["sodium-select"]}
                carbs-select={this.state["carbs-select"]}
                fiber-select={this.state["fiber-select"]}
                sugar-select={this.state["sugar-select"]}
                protein-select={this.state["protein-select"]}
                removeItem={this.props.removeItem}
              />
          </Cell>
        </Grid>
      </CardText>
    </Card>
    )
  }
}
