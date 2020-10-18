import { Route, Switch } from 'react-router-dom';

import React, { Component } from 'react';
import Form from '../form/form';
import History from '../history/history';
import Help from '../help/help';
import NotFound from '../NotFound/NotFound';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      selectedItem: null,
    };
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem(i){
    console.log('main selectItem', i);
    this.setState({ selectedItem: i });
  }


  componentWillMount(){
    this.setState({history: JSON.parse(localStorage.getItem('history')) || []});
  }

  render() {
    return (
      <main data-testid="main" className="main">
        <Switch>
          <Route exact path={['/', 'resty']}>
            <Form selectedItem={this.state.selectedItem} />
          </Route>
          <Route exact path="/history">
            <History selectedItem = {this.state.selectedItem} selectItem={this.selectItem} items={this.state.history} />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    );
  }
}