import React, { Component } from 'react';
import './styles/Cart.css';
import { Card, CardTitle, FontIcon, List, Button, Grid, Cell, Divider} from 'react-md'; 
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
    for(let i = 0; i < meal.length; i++) {
      cartList.push(<CartItem listKey={i} food={meal[i]} removeItem={this.props.removeItem}></CartItem>
      );
    }
    return cartList
  }

  render() {
    let lowerCart;
    if(this.props.meal.length > 0) {
      lowerCart = 
        <div>
          <List className="">
            {this.createCartList(this.props.meal)}
          </List>
          <Divider />
          <Grid position='right'>
            <Cell size={12} position={'right'}>
              <div className="total">{"Total = $" + this.props.price}</div>
                </Cell>
                <Cell size={12} position={'right'}>
              <div className="order"><Button raised secondary>Order</Button></div>
            </Cell>
          </Grid>
        </div>
    } else {
      lowerCart = <div className="empty-cart"><p>No items in cart</p></div>
    }

    return (
      <Card className="cart-card">
        <CardTitle className="cart-title"
          title="Cart"
          avatar={<FontIcon className="icon" primary>shopping_cart</FontIcon>}
        >
        </CardTitle>
        {lowerCart}
      </Card>
    )
  }
}

