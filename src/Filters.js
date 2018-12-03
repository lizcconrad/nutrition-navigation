import React, { Component } from 'react';
import './styles/Filters.css';
import { Button, Checkbox, Autocomplete, Card, CardTitle, Grid, Cell, FontIcon } from 'react-md';
import MetricSlider from './MetricSlider.js';
import ChipList from './ChipList.js';

export default class Filters extends Component {

  render() {
    const { filterType } = Autocomplete.caseInsensitiveFilter; //for AutoComplete Text.
    return (
      <Card>
        <CardTitle className="filters-title" title="Filters" avatar={<FontIcon className="icon" primary>filter_list</FontIcon>}></CardTitle>
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
                onChange={this.props.handleAllergenClick}
              />
              <Checkbox
                id="soy"
                name="soy-checkbox"
                label="Soy"
                value="soy"
                onChange={this.props.handleAllergenClick}
              />
              <Checkbox
                id="eggs"
                name="eggs-checkbox"
                label="Eggs"
                value="egg"
                onChange={this.props.handleAllergenClick}
              />
              <Checkbox
                id="milk"
                name="milk-checkbox"
                label="Milk"
                value="milk"
                onChange={this.props.handleAllergenClick}
              />
              </Cell>
            <Cell size={6}>
              <Checkbox
                id="peanuts"
                name="peanuts-checkbox"
                label="Peanuts"
                value="peanut"
                onChange={this.props.handleAllergenClick}
              />
              <Checkbox
                id="treenuts"
                name="treenuts-checkbox"
                label="Treenuts"
                value="treenut"
                onChange={this.props.handleAllergenClick}
              />
              <Checkbox
                id="fish"
                name="fish-checkbox"
                label="Fish"
                value="fish"
                onChange={this.props.handleAllergenClick}
              />
              <Checkbox
                id="shellfish"
                name="shellfish-checkbox"
                label="Shellfish"
                value="shellfish"
                onChange={this.props.handleAllergenClick}
              />
            </Cell>
          </Grid>
        </Cell>
        
        <Cell size={12}>
          <h3>Exclude Ingredients</h3>
          <Autocomplete
              id="filter-search-by-name"
              ref="autocomplete"
              label="Search by Name"
              placeholder="Exclude items with..."
              clearOnAutocomplete={true}
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
          <br />
          <h3>Nutritional Values</h3>
          <br/ >
          <MetricSlider metric="calories" unit="" max={2000} step={50} handleSliderChange={this.props.handleSliderChange}/>
          <MetricSlider metric="carbohydrates" unit="g" max={200} step={10} handleSliderChange={this.props.handleSliderChange}/>
          <MetricSlider metric="total fat" unit="g" max={100} step={10} handleSliderChange={this.props.handleSliderChange}/>
          <MetricSlider metric="protein" unit="g" max={100} step={10} handleSliderChange={this.props.handleSliderChange}/>
          <MetricSlider metric="sodium" unit="mg" max={2000} step={50} handleSliderChange={this.props.handleSliderChange}/>
          <MetricSlider metric="sugar" unit="g" max={200} step={10} handleSliderChange={this.props.handleSliderChange}/>
        </Cell>
        <Cell size={12}>
          <div className="right-button">
            <Button raised secondary onClick={this.props.handleFilterClick}>Filter</Button>
          </div>
        </Cell>
        </Grid>
      </Card>
    );
  }
}
