import React, { Component } from 'react';
import './styles/Cart.css';
import { Card, CardTitle, FontIcon, List, ListItem, Button, Grid, Cell,} from 'react-md'; 
import CartItem from './CartItem';


export default class Cart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      totalPrice: 0
    }
  }

  createCartList = (meal) => {
    let cartList = [];
    let totalPrice = 0;

    for(let i = 0; i < meal.length; i++) {
      cartList.push(<CartItem food={meal[i]} removeItem={this.props.removeItem}></CartItem>
      );
      totalPrice += meal[i].price
    }

    // this.setState({totalPrice: totalPrice})
    return cartList
  }

  render() {
    return (
      <Card className="cart-card">
        <CardTitle className="cart-title"
        title="Cart"
        avatar={<FontIcon>shopping_cart</FontIcon>}
        />
        <List className="">
          {this.createCartList(this.props.meal)}
          {/* <div className="total"><b>{meal[i].price}</b></div> */}
        </List>
        <div><hr className="divider"></hr></div>
        <Grid position='right'>
          <Cell size={12} position={'right'}>
           <div className="total"><b>{"Total = $" + this.state.totalPrice}</b></div>
          </Cell>
          <Cell size={12} position={'right'}>
           <div className="order"><Button raised primary>Order</Button></div>
          </Cell>
        </Grid>
      </Card>
    )
  }
}

