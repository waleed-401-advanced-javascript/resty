import React, { Component } from 'react';

import './header.scss';

export default class Header extends Component {
  render(){
    return (
      <header data-testid="header" className="header">
        <h1>RESTy</h1>
      </header>
    );
  }
}