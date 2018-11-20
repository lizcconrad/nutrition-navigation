import React, { Component } from 'react';
import './styles/ToolBar.css';
import { TabsContainer, Tabs, Tab } from 'react-md';

export default class ToolBar extends Component {
  render() {
    return (
      <TabsContainer panelClassName="md-grid" fixed colored defaultTabIndex={1}>
        <Tabs tabId="simple-tab">
          <Tab icon={<img src='wendys-logo.png' alt="Wendys" height="30" width="100"/>}/>
          <Tab label="Explore Our Food"/>
          <Tab label="What We Value"/>
          <Tab label="Who We Are"/>
          <Tab label="Sign In"/>
          <Tab label="Find a Wendy's"/>
          <Tab label="Order Online"/>
       </Tabs>
      </TabsContainer>
    )
  }
}
