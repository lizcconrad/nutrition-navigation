import React, { Component } from 'react';
import './styles/App.css';
import Filters from './Filters.js';
import MealPlanner from './MealPlanner.js';
import FoodList from './FoodList.js';
import Cart from './Cart.js';
import { Row, Col, Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
      <Row>
        <Col xs="3">
          <Filters />
        </Col>
        <Col xs="7">
          <Row>
            <MealPlanner />
          </Row>
          <Row>
            <FoodList />
          </Row>
        </Col>
        <Col xs="2">
          <Cart />
        </Col>
      </Row>
      </Container>
    );
  }
}

export default App;
