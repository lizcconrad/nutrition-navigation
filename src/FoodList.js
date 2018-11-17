import React, { Component } from 'react';
import FoodItem from './FoodItem.js'
import { ExpansionList, ExpansionPanel, List, Divider } from 'react-md';
import './styles/FoodList.css';

export default class FoodList extends Component {
  render() {
    return (
      <div className="foodlist">
      <ExpansionList className= "md-cell md-cell--12">
      <ExpansionPanel label="Combos" footer={null}>
        <List>
          <FoodItem name=" Dave's Single®" cal=" 610-1220"/>
          <Divider/>
          <FoodItem name=" Dave's Double®" cal=" 850-1460"/>
          <Divider/>
          <FoodItem name=" Dave's Triple®" cal=" 1130-1740"/>
          <Divider/>
          <FoodItem name=" Baconator®" cal=" 980-1600"/>
          <Divider/>
          <FoodItem name=" Son of Baconator®" cal=" 670-1280"/>
          <Divider/>
          <FoodItem name=" Spicy Chicken Sandwich" cal=" 550-1160"/>
          <Divider/>
          <FoodItem name=" Homestyle Chicken Sandwich" cal=" 550-1160"/>
          <Divider/>
          <FoodItem name=" Asiago Ranch Chicken Club" cal=" 560-1320"/>
          <Divider/>
          <FoodItem name=" Grilled Chicken Sandwich" cal=" 410-1020"/>
          <Divider/>
          <FoodItem name=" 10 PC. Nuggets" cal=" 550-1320"/>
          <Divider/>
          <FoodItem name=" Chicken Tenders" cal=" 560-1550"/>
        </List>
      </ExpansionPanel>

      <ExpansionPanel label="Hamburgers" footer={null}>
      <List>
        <FoodItem name=" S'Awesome Bacon Classic Single" cal=" 640"/>
        <Divider/>
        <FoodItem name=" S'Awesome Bacon Classic Double" cal=" 890"/>
        <Divider/>
        <FoodItem name=" S'Awesome Bacon Classic Triple" cal=" 1170"/>
        <Divider/>
        <FoodItem name=" Dave's Single®" cal=" 570"/>
        <Divider/>
        <FoodItem name=" Dave's Double®" cal=" 810"/>
        <Divider/>
        <FoodItem name=" Dave's Triple®" cal=" 1090"/>
        <Divider/>
        <FoodItem name=" Baconator®" cal=" 950"/>
        <Divider/>
        <FoodItem name=" Son of Baconator®" cal=" 630"/>
        <Divider/>
        <FoodItem name=" Jr. Bacon Cheeseburger" cal=" 380"/>
        <Divider/>
        <FoodItem name=" Jr. Cheeseburger Deluxe" cal=" 340"/>
        <Divider/>
        <FoodItem name=" Jr. Cheeseburger" cal=" 280"/>
        <Divider/>
        <FoodItem name=" Double Stack™" cal=" 390"/>
        <Divider/>
        <FoodItem name=" Jr. Hamburger" cal=" 240"/>
        </List>
      </ExpansionPanel>

      <ExpansionPanel label="Chicken, Wraps & More" footer={null}>
        <List>
          <FoodItem name=" Spicy Chicken Sandwich" cal=" 510"/>
          <Divider/>
          <FoodItem name=" Homestyle Chicken Sandwich" cal=" 510"/>
          <Divider/>
          <FoodItem name=" Asiago Ranch Chicken Sandwich" cal=" 670"/>
          <Divider/>
          <FoodItem name=" Spicy Asiago Ranch Club" cal=" 670"/>
          <Divider/>
          <FoodItem name=" Grilled Asiago Ranch Club" cal=" 530"/>
          <Divider/>
          <FoodItem name=" Grilled Chicken Sandwich" cal=" 370"/>
          <Divider/>
          <FoodItem name=" 10 PC. Crispy Chicken Nuggets" cal=" 420"/>
          <Divider/>
          <FoodItem name=" 3 PC. Chicken Tenders" cal=" 330"/>
          <Divider/>
          <FoodItem name=" 4 PC. Chicken Tenders" cal=" 430"/>
          <Divider/>
          <FoodItem name=" 6 PC. Chicken Tenders" cal=" 650"/>
          <Divider/>
          <FoodItem name=" 6 PC. Crispy Chicken Nuggets" cal=" 250"/>
          <Divider/>
          <FoodItem name=" 4 PC. Crispy Chicken Nuggets" cal=" 170"/>
          <Divider/>
          <FoodItem name=" Crispy Chicken BLT" cal=" 420"/>
          <Divider/>
          <FoodItem name=" Crispy Chicken Sandwich" cal=" 330"/>
          <Divider/>
          <FoodItem name=" Grilled Chicken Wrap" cal=" 270"/>
          <Divider/>
          <FoodItem name=" Spicy Chicken Wrap" cal=" 370"/>
        </List>
      </ExpansionPanel>

      <ExpansionPanel label="Fresh Made Salads" footer={null}>
      </ExpansionPanel>

      <ExpansionPanel label="Fries & Sides" footer={null}>
      </ExpansionPanel>

      <ExpansionPanel label="Beverages" footer={null}>
      </ExpansionPanel>

      <ExpansionPanel label="Frosty®" footer={null}>
      </ExpansionPanel>

      <ExpansionPanel label="Bakery" footer={null}>
      </ExpansionPanel>

      <ExpansionPanel label="Wendy's Kids Meal®" footer={null}>
      </ExpansionPanel>

      <ExpansionPanel label="Value Menu" footer={null}>
      </ExpansionPanel>

      <ExpansionPanel label="Meal Deals" footer={null}>
      </ExpansionPanel>

      <ExpansionPanel label="Breakfast" footer={null}>
      </ExpansionPanel>

      <ExpansionPanel label="Our Picks" footer={null}>
      </ExpansionPanel>
      
    </ExpansionList>
      </div>
    )
  }
}
