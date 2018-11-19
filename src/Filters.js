import React, { Component } from 'react';
import './styles/Filters.css';
import {
  DataTable, TableHeader, TableBody, TableRow, TableColumn,
  ExpansionList, ExpansionPanel, Button, Slider,
  Autocomplete, Card, CardTitle, Grid, Cell
} from 'react-md';
import './sass/Filters.scss';

/*
* Notes:
* -----------------------------
* Allergens:
*   Uses: Expansion Lists, Expansion Panels, DataTables, TableHeader, TableBody, TableRow, TableColumn, Button
*   Description: an Expansion Panel for Allergens which when clicked, opens to display Include and Exclude, as well as a remove button.
*   Include: a DataTable which shows at max 5 items in a Scrollable List  of 'n' items. it will display number of items.
*   Exclude: a DataTable which shows at max 5 items in a Scrollable List  of 'n' items. it will display number of items.
*   (X)Remove Button: A button which, when clicked removes the item from their respective Lists. 
* 
* Ingredients:
*   Uses: Expansion Lists, Expansion Panels, DataTables, TableHeader, TableBody, TableRow, TableColumn, Button
*   Description: an Expansion Panel for Allergens which when clicked, opens to display Include and Exclude, as well as a remove button.
*   Include: a DataTable which shows at max 5 items in a Scrollable List  of 'n' items. it will display number of items.
*   Exclude: a DataTable which shows at max 5 items in a Scrollable List  of 'n' items. it will display number of items.
*   (X)Remove Button: A button which, when clicked removes the item from their respective Lists.   
*
* Sliders (Calories, Carbs, Fat, Protein, Sodium, Sugar):
*   Uses: Sliders
*   Description: a Slider which displays 'Helper Text', displays a min and max value at beginning and end respectively, as well as the value the slider is on when the Slider Button is clicked.
*   Helper Text: "Only items with BELOW the SELECTED VALUES will be displayed when Filtered."
*/


export default class Filters extends Component {
  
  render() {
    
    const { filterType } = Autocomplete.caseInsensitiveFilter; //for AutoComplete Text.

    return (
      <Card className="sticky-card">
        <CardTitle className="filters-title" title="Filters"></CardTitle>
        <Grid className="div-class">
        <Cell size={12}>
          <Autocomplete
            id="filter-search-by-name"
            label="Search by Name"
            placeholder="Enter Name of Food/Drink"
            data={["one", "two", "three"]} // sample data to filter goes here
            filter={filterType}
          />
        </Cell>
        <Cell size={12}>
          <ExpansionList>
        <ExpansionPanel label = "Allergens" footer={null}>
        <Autocomplete
          id="filter-search-by-name"
          label="Search by Allergen"
          placeholder="Enter Allergen"
          data={["one", "two", "three"]} // sample data to filter goes here
          filter={filterType}
        />
        <DataTable baseId="menu-table-allergens-buttons" plain>
          <TableRow>
              <TableColumn grow><Button raised primary>Include</Button></TableColumn>
              <TableColumn grow><Button raised primary>Exclude</Button></TableColumn>
          </TableRow>
        </DataTable>
        <br></br>
        <div><b>Included Items</b></div>
        <DataTable baseId="menu-table-allergens-include" plain>
        <TableHeader>
          <TableRow>
            <TableColumn grow>Item Name(# of Orders):</TableColumn>
            <TableColumn grow>Click To Remove:</TableColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from(Array(5)).map((_, i) => (
            <TableRow key={i}>
              <TableColumn>Item {i}</TableColumn>
              <Button raised>X</Button>
            </TableRow>
          ))}
        </TableBody>
        </DataTable>
        <hr></hr>
        <br></br>
        <div><b>Excluded Items</b></div>
        <DataTable baseId="menu-table-allergens-exclude" plain>
        <TableHeader>
          <TableRow>
            <TableColumn grow>Item Name(# of Orders):</TableColumn>
            <TableColumn grow>Click To Remove:</TableColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from(Array(5)).map((_, i) => (
            <TableRow key={i}>
              <TableColumn>Item {i}</TableColumn>
              <Button raised>X</Button>
            </TableRow>
          ))}
        </TableBody>
        </DataTable>   
        </ExpansionPanel>
        <ExpansionPanel label = "Ingredients" footer={null}>
        <Autocomplete
        id="filter-search-by-name"
        label="Search by Ingredient"
        placeholder="Enter Ingredient"
        data={["one", "two", "three"]} // sample data to filter goes here
        filter={filterType}
        />
        <DataTable baseId="menu-table-allergens-buttons" plain>
          <TableRow>
              <TableColumn grow><Button raised primary>Include</Button></TableColumn>
              <TableColumn grow><Button raised primary>Exclude</Button></TableColumn>
          </TableRow>
        </DataTable>
        <br></br>
        <div><b>Included Items</b></div>
        <DataTable baseId="menu-table-ingredients-include" plain>
        <TableHeader>
          <TableRow>
            <TableColumn grow>Item Name(# of Orders):</TableColumn>
            <TableColumn grow>Click To Remove:</TableColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from(Array(5)).map((_, i) => (
            <TableRow key={i}>
              <TableColumn>Item {i}</TableColumn>
              <Button raised>X</Button>
            </TableRow>
          ))}
        </TableBody>
        </DataTable>
        <hr></hr>
        <br></br>
        <div><b>Excluded Items</b></div>
        <DataTable baseId="menu-table-ingredients-exclude" plain fullWidth>
        <TableHeader>
          <TableRow>
            <TableColumn grow>Item Name(# of Orders):</TableColumn>
            <TableColumn grow>Click To Remove:</TableColumn>
          </TableRow>
        </TableHeader>
          <TableBody>
            {Array.from(Array(5)).map((_, i) => (
              <TableRow key={i}>
                <TableColumn>Item {i}</TableColumn>
                <TableColumn><Button raised>X</Button></TableColumn>
              </TableRow>
            ))}
          </TableBody>
        </DataTable>         
        </ExpansionPanel>
        </ExpansionList>
        </Cell>
        <Cell size={12}>
          <div><b>Nutritional Values:</b></div>
          <Slider
            id="calories-custom-range-slider"
            label="Calories: Tick = 100"
            min={300}
            max={1000}
            step={10}
            valuePrecision={100}
            leftIcon={"Min"} //TODO should be the actual minimum not "Min"
            rightIcon={"Max"} //TODO should be the actual maximum not "Max"
            discrete
            discreteTicks={100}
          />
          <Slider
            id="carbs-custom-range-slider"
            label="Carbs: Tick = 100"
            min={300}
            max={1000}
            step={10}
            valuePrecision={100}
            leftIcon={"Min"}
            rightIcon={"Max"}
            discrete
            discreteTicks={100}
          />
          <Slider
            id="fat-custom-range-slider"
            label="Fat: Tick = 100"
            min={300}
            max={1000}
            step={10}
            valuePrecision={100}
            leftIcon={"Min"}
            rightIcon={"Max"}
            discrete
            discreteTicks={100}
          />
          <Slider
            id="protein-custom-range-slider"
            label="Protein: Tick = 100"
            min={300}
            max={1000}
            step={10}
            valuePrecision={100}
            leftIcon={"Min"}
            rightIcon={"Max"}
            discrete
            discreteTicks={100}
          />
          <Slider
            id="sodium-custom-range-slider"
            label="Sodium: Tick = 100"
            min={300}
            max={1000}
            step={10}
            valuePrecision={100}
            leftIcon={"Min"}
            rightIcon={"Max"}
            discrete
            discreteTicks={100}
          />
          <Slider
            id="sugar-custom-range-slider"
            label="Sugar: Tick = 100"
            min={300}
            max={1000}
            step={10}
            valuePrecision={100}
            leftIcon={"Min"}
            rightIcon={"Max"}
            discrete
            discreteTicks={100}
          />
        </Cell>
        <Cell size={12}>
          <Button raised primary>Filter</Button>
        </Cell>
        </Grid>
      </Card>
    );
  }
}
