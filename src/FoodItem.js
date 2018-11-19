import React, {Component} from 'react';
import {Button, Grid, Cell, DialogContainer, List, ListItem} from 'react-md';
import './styles/FoodItem.css';
  
export default class FoodItem extends Component {
    state = { visible: false };
  
    show = () => {
      this.setState({ visible: true });
    };
  
    hide = () => {
      this.setState({ visible: false });
    };
  
    handleKeyDown = (e) => {
      const key = e.which || e.keyCode;
      if (key === 13 || key === 32) {
        // also close on enter or space keys
        this.hide();
      }
    };

    render() {
        const { visible } = this.state;
        return (
            <Grid className="FoodItem">
                <Cell Size={2}> {this.props.name} </Cell>
                <Cell size={2}> {this.props.cal} cal</Cell>
                <Cell size={1}> ${this.props.price}</Cell>
                <Cell size={3}>

                <Button raised onClick={this.show}> Nutrition Info</Button>
                <DialogContainer
                    id="simple-list-dialog"
                    visible={visible}
                    title="Nutrition Info"
                    onHide={this.hide}
                >
                <List onClick={this.hide} onKeyDown={this.handleKeyDown}>
                    <ListItem primaryText= {this.props.name} />
                    <ListItem primaryText="Picture goes here?" />
                </List>
                </DialogContainer>

                </Cell>
                <Cell size={2}>
                <Button flat primary swapTheming> ADD </Button>
                </Cell>
            </Grid>
        );
     }
}