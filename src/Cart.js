import React, { Component } from 'react';
import './styles/Cart.css';
import { Card, CardTitle, CardActions, CardText,
  Avatar,
  Divider,
  FontIcon,
  List,
  ListItem,
  ListItemControl,
  Subheader,
  Button, 
  Grid, Cell,} from 'react-md'; 


export default class Cart extends Component {
  render() {
    return (
      <Card className="cart-card">
        <CardTitle className="cart-title"
        title="Cart"
        avatar={<FontIcon>shopping_cart</FontIcon>}
        />
        <List className="">
          {Array.from(Array(5)).map((_, i) => (
            <ListItem
            leftIcon={<FontIcon>close</FontIcon>}
            primaryText={"Name Of Item " + i}
            secondaryText="Quantity: 1"
          >
          <div className="total"><b>$1000.00</b></div>
          </ListItem>
          ))}
        </List>
        <div><hr className="divider"></hr></div>
        <Grid position='right'>
          <Cell size={12} position={'right'}>
           <div className="total"><b>Total = $1000.00</b></div>
          </Cell>
          <Cell size={12} position={'right'}>
           <div className="order"><Button raised primary>Order</Button></div>
          </Cell>
        </Grid>
      </Card>
    )
  }
}

