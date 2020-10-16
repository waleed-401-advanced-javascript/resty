import React, { Component } from 'react';
import JSONPretty from 'react-json-prettify';


class Results extends Component {
  render(props) {
    return (
      <div data-testid="results">
        <JSONPretty json={this.props.json} />
      </div>
    );
  }
}

export default Results;