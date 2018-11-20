import React, { Component } from 'react';
import './styles/Filters.css';
import { Button, Checkbox, Autocomplete, Card, CardTitle, Grid, Cell } from 'react-md';
import './sass/Filters.scss';
import MetricSlider from './MetricSlider.js';
import ChipList from './ChipList.js';

export default class Filters extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    const { filterType } = Autocomplete.caseInsensitiveFilter; //for AutoComplete Text.

    return (
      <Card className="sticky-card">
        <CardTitle className="filters-title" title="Filters"></CardTitle>
        <Grid className="div-class">
        <Cell size={12}>
          <h3>Exclude Allergens</h3>
            <Grid>
            <Cell size={6}>
                <Checkbox
                  id="wheat"
                  name="wheat-checkbox"
                  label="Wheat"
                  value="wheat"
                />
                <Checkbox
                  id="soy"
                  name="soy-checkbox"
                  label="Soy"
                  value="soy"
                />
                <Checkbox
                  id="eggs"
                  name="eggs-checkbox"
                  label="Eggs"
                  value="eggs"
                />
                <Checkbox
                  id="milk"
                  name="milk-checkbox"
                  label="Milk"
                  value="milk"
                />
              </Cell>
            <Cell size={6}>
              <Checkbox
                id="peanuts"
                name="peanuts-checkbox"
                label="Peanuts"
                value="wheat"
              />
              <Checkbox
                id="treenuts"
                name="treenuts-checkbox"
                label="Treenuts"
                value="treenuts"
              />
              <Checkbox
                id="fish"
                name="fish-checkbox"
                label="Fish"
                value="fish"
              />
              <Checkbox
                id="shellfish"
                name="shellfish-checkbox"
                label="Shellfish"
                value="shellfish"
              />
            </Cell>
          </Grid>
        </Cell>
        
        <Cell size={12}>
          <h3>Exclude Ingredients</h3>
          <Autocomplete
              id="filter-search-by-name"
              label="Search by Name"
              placeholder="Exclude items with..."
              data={this.props.ingredientList} // sample data to filter goes here
              filter={filterType}
              onAutocomplete={this.props.handleAutocomplete}
            />
            <ChipList 
              ingredients={this.props.excludedIngredients} 
              handleExcludeClick={this.props.handleExcludeClick}
            />
        </Cell>

        {/* <Cell size={12}>
          <h3>Include ingredients</h3>
          <Autocomplete
              id="filter-search-by-name"
              label="Search by Name"
              placeholder="Include items with..."
              data={["one", "two", "three"]} // sample data to filter goes here
              filter={filterType}
            />
        </Cell> */}
      
        <Cell size={12}>
          <h3>Nutritional Values</h3>
          <MetricSlider metric="calories" unit="" max={2000} step={50}/>
          <MetricSlider metric="carbs" unit="g" max={100} step={10}/>
          <MetricSlider metric="fat" unit="g" max={100} step={10}/>
          <MetricSlider metric="protein" unit="g" max={100} step={10}/>
          <MetricSlider metric="sodium" unit="mg" max={3000} step={50}/>
          <MetricSlider metric="sugar" unit="g" max={200} step={10}/>
        </Cell>
        <Cell size={12}>
          <Button raised primary onClick={this.props.handleFilterClick}>Filter</Button>
        </Cell>
        </Grid>
      </Card>
    );
  }
}
