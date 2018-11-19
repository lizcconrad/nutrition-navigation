import React, { Component } from 'react';
import './styles/Filters.css';
import Sidebar from "react-sidebar";
import PropTypes from "prop-types";
import {
  Avatar,
  DataTable, TableHeader, TableBody, TableRow, TableColumn,
  ExpansionList, ExpansionPanel,
  Button, Collapse, GridList,
  Slider,
  Autocomplete
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
  //Sidebar Stuff
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

//Sidebar Stuff
onSetSidebarOpen(open) {
  this.setState({ sidebarOpen: open });
}

  //Button Collapses Example i believe. not sure if used or needed. will leave in case and test later and leave just
state = { collapsed: true, ipsum: [] };

//Button for Collapse Example i believe. not sure if used or needed. will leave in case and test later
componentWillMount() {
  this.setState({
    collapsed: true,
  });
}

//Button for Collapse Example i believe. not sure if used or needed. will leave in case and test later
toggle = () => {
  this.setState({ collapsed: !this.state.collapsed });
};


  render() {
    const sidebar = <SidebarContent />
    const { collapsed, ipsum } = this.state;// unsure if need
    const { filterType } = Autocomplete.caseInsensitiveFilter; //for AutoComplete Text.
    const contentHeader = (
      <span>
        {!this.state.docked && (
          <a
            onClick={this.toggleOpen}
            href="#"
            style={styles.contentHeaderMenuLink}
          >
            =
          </a>
        )}
        <span> Responsive React Sidebar</span>
      </span>
     
    );


    return (
      <Sidebar
        sidebar={<MaterialTitlePanel title="Filter" styles={contentHeader}>
        <div style={styles.content}>
          <a style={styles.sidebarLink}>

            <Autocomplete
            id="filter-search-by-name"
            label="Search by Name"
            placeholder="Enter Name of Food/Drink"
            data={null} // sample data to filter goes here
            filter={filterType}
            />
            <br></br>
            <ExpansionList>
              <ExpansionPanel label = "Allergens" footer={null}>
                <Autocomplete
                  id="filter-search-by-name"
                  label="Search by Allergen"
                  placeholder="Enter Allergen"
                  data={null} // sample data to filter goes here
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
                data={null} // sample data to filter goes here
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
          </a>
          <br></br>
          <a>
            <div><b>Nutritional Values:</b></div>
            <br></br>
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
          </a>
          <a>
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
          </a>
          <a>
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
          </a>
          <a>
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
          </a>
          <a>
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
          </a>
          <a>
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
          </a>
          <br></br>
          <a>
          <Button raised primary>Filter</Button>
          </a>
        </div>
        </MaterialTitlePanel>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white", width: "25%",height: "100%" }}}
      >
      </Sidebar>
    );
  }
}

//Sidebar Stuff Start
Sidebar.propTypes = {
  // main content to render
  children: PropTypes.node.isRequired,

  // styles
  styles: PropTypes.shape({
    root: PropTypes.object,
    sidebar: PropTypes.object,
    content: PropTypes.object,
    overlay: PropTypes.object,
    dragHandle: PropTypes.object
  }),

  // root component optional class
  rootClassName: PropTypes.string,

  // sidebar optional class
  sidebarClassName: PropTypes.string,

  // content optional class
  contentClassName: PropTypes.string,

  // overlay optional class
  overlayClassName: PropTypes.string,

  // sidebar content to render
  sidebar: PropTypes.node.isRequired,

  // boolean if sidebar should be docked
  docked: PropTypes.bool,

  // boolean if sidebar should slide open
  open: PropTypes.bool,

  // boolean if transitions should be disabled
  transitions: PropTypes.bool,

  // boolean if touch gestures are enabled
  touch: PropTypes.bool,

  // max distance from the edge we can start touching
  touchHandleWidth: PropTypes.number,

  // Place the sidebar on the right
  pullRight: PropTypes.bool,

  // Enable/Disable sidebar shadow
  shadow: PropTypes.bool,

  // distance we have to drag the sidebar to toggle open state
  dragToggleDistance: PropTypes.number,

  // callback called when the overlay is clicked
  onSetOpen: PropTypes.func,

  // Initial sidebar width when page loads
  defaultSidebarWidth: PropTypes.number,

  // root component optional id
  rootId: PropTypes.string,

  // sidebar optional id
  sidebarId: PropTypes.string,

  // content optional id
  contentId: PropTypes.string,

  // overlay optional id
  overlayId: PropTypes.string
};
/////// Sidebar Stuff end

//Sidebar Stuff
Sidebar.defaultProps = {
  docked: true,
  shadow: false,
  defaultSidebarWidth: 0
};

//Styles for Sidebar
const styles = {
  root: {
    fontFamily:
      '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontWeight: 300
  },
  header: {
    backgroundColor: "#03a9f4",
    color: "white",
    padding: "16px",
    fontSize: "1.5em"
  },
  contentHeaderMenuLink: {
    textDecoration: "none",
    color: "white",
    padding: 8
  },
  sidebarLink: {
    display: "block",
    padding: "16px 0px",
    color: "#757575",
    textDecoration: "none",
  },
  divider: {
    margin: "8px 0",
    height: 1,
    backgroundColor: "#757575"
  },
  content: {
    padding: "16px",
    height: "100%",
    backgroundColor: "white"
  }
};

//Sidebar Stuff Unsure if used atm. Dont think it is used or needed. will leave in case and test later
const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  const links = [];

  for (let ind = 0; ind < 10; ind++) {
    links.push(
      <a key={ind} href="#" style={styles.sidebarLink}>
        Mock menu item {ind}
      </a>
    );
  }

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
        <a href="index.html" style={styles.sidebarLink}>
          Home
        </a>
        <a href="responsive_example.html" style={styles.sidebarLink}>
          Responsive Example
        </a>
        <div style={styles.divider} />
        {links}
      </div>
    </MaterialTitlePanel>
  );
};

//Sidebar Stuff
SidebarContent.propTypes = {
  style: PropTypes.object
};

// Sidebar Titles Panel stuff
const MaterialTitlePanel = props => {
  const rootStyle = props.style
    ? { ...styles.root, ...props.style }
    : styles.root;

  return (
    <div style={rootStyle}>
      <div style={styles.header}><center>{props.title}</center></div>
      {props.children}
    </div>
  );
};

// Sidebar Titles Panel Stuff
MaterialTitlePanel.propTypes = {
  style: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.object
};

