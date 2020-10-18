import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './header.scss';

export default class Header extends Component {
  render(){
    return (
      <header data-testid="header" className="header">
        <h1>RESTy</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <NavLink to="/history">History</NavLink>
            </li>
            <li>
              <NavLink to="/help">Help</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}