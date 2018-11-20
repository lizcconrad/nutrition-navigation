import React, { Component } from 'react';
import './styles/ExcludedItems.css';
import { Card, CardText, List, ListItem, DialogContainer } from 'react-md';

export default class ExcludedItems extends Component {  

  createExcludedList = () => {
    let cartList = [];
    for(let i = 0; i < this.props.excluded.length; i++) {
      cartList.push(<ListItem 
        key={i} 
        primaryText={this.props.excluded[i].food.item}
        secondaryText={this.props.excluded[i].reason}
        disabled={true}
        primaryTextClassName="primary-text"
      />);
    }
    return cartList
  }

  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
  }

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

    const actions = [{
      onClick: this.hide,
      primary: true,
      children: 'OK',
    }];

    return (
      <div>
        <Card className="excluded-card">
        <CardText className="excluded-card-title">
          <div className="excluded-flex-container">
          <div>
            <span>You have filtered out </span>
            <span className="filtered-count">{this.props.excluded.length}</span>
            <span> items</span>
          </div>
          <div>
            <span className="view-items" onClick={this.show}>View Items</span>
          </div>
          </div>
        </CardText>
        </Card>
        <DialogContainer
          id="excluded-list-dialog"
          visible={this.state.visible}
          title="Excluded Items"
          onHide={this.hide}
          actions={actions}
          width="30%"
        >
          <List onClick={this.hide} onKeyDown={this.handleKeyDown}>
            {this.createExcludedList()}
          </List>
        </DialogContainer>
      </div>

    )
  }
}
