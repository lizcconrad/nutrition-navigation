import React, { Component } from 'react';
import './styles/MealPlanner.css';
import { Card, CardTitle, CardActions, CardText, Grid, Cell, Paper, SelectField, TextField } from 'react-md'; 
import NutritionLabel from './NutritionLabel.js';
import GoalInput from './GoalInput';

export default class MealPlanner extends Component {

  computeMetrics = () =>  {
    const self = this;

    this.props.meal.forEach(function(element) {
      for(var key in element.metrics) {
        self.setState({[key]: element.metrics[key].value})
      }
    });
  }

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
      "calories": 0,
      "calories from fat": 0,
      "saturated fat": 0,
      "trans fat": 0,
      "polyunsaturated fat": 0,
      "monounsaturated fat": 0,
      "cholesterol": 0,
      "sodium": 0,
      "carbohydrates": 0,
      "fiber": 0,
      "sugar": 0,
      "vitamin A": 0,
      "vitamin C": 0,
      "calcium": 0,
      "iron": 0,
      "potassium": 0,
    }
  }

  componentDidMount() {
    this.computeMetrics();
  }

  render() {

    const STRING_SELECTORS = ['At most', 'At least'];

    return (
    <Card className="md-block-centered" defaultExpanded={true}>
      <CardTitle
        title="Meal Planner"
      />
      <CardActions expander>
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
                calories={this.state["calories"]}
                calories_from_fat={this.state["calories from fat"]}
                total_fat={this.state["total fat"]}
                saturated_fat={this.state["saturated fat"]}
                trans_fat={this.state["trans fat"]}
                monounsaturated_fat={this.state["monounsaturated fat"]}
                polyunsaturated_fat={this.state["polyunsaturated fat"]}
                cholesterol={this.state["cholesterol"]}
                sodium={this.state["sodium"]}
                carbohydrates={this.state["carbohydrates"]}
                fiber={this.state["fiber"]}
                sugar={this.state["sugar"]}
                protein={this.state["protein"]}
                vitamin_a={this.state["vitamin A"]}
                vitamin_c={this.state["vitamin C"]}
                calcium={this.state["calcium"]}
                iron={this.state["iron"]}
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
              />
          </Cell>
        </Grid>
      </CardText>
    </Card>
    )
  }
}
