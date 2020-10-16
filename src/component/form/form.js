import React, { Component } from 'react';

import Results from '../results/results';
import History from '../history/history';

import './form.scss';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 'GET',
      url: '',
      reqBody: '',
      goMethod: '',
      goUrl: '',
      goBody: '',
      responseJson: {},
      history: [],
      isLoading: false,
    };
    this.selectItem = this.selectItem.bind(this);
  }

  componentWillMount(){
    this.setState({history: JSON.parse(localStorage.getItem('history')) || []});
  }

fetchData = () => {
  console.log('fetch', this.state.method, this.state.url);
  this.setState({ isLoading: true });
  fetch(this.state.url,{
    method: this.state.method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: this.state.reqBody ?  JSON.stringify(this.state.reqBody) : undefined,
  })
    .then(async (res) => {
      const obj = {};
      for (let [key, value] of res.headers.entries()) {
        obj[key] = value;
      }
      const resJson = await res.json();
      this.setState({ isLoading: false, responseJson: { Headers: obj, Response: resJson }, history: [...this.state.history, { method:this.state.method, url: this.state.url, reqBody: this.state.reqBody }]});
      localStorage.setItem('history', JSON.stringify(this.state.history));
    });
}

onChangeMethod = e => { this.setState({ method: e.target.value }); }
onChangeUrl = e => this.setState({ url: e.target.value });
onChangeBody = e => this.setState({ reqBody: e.target.value });

printUrlAndMethod = e => {
  e.preventDefault();
  this.setState({ goMethod: this.state.method, goUrl: this.state.url, goBody: this.state.reqBody });
  this.fetchData();
};

selectItem(i){
  const item = this.state.history[i];
  this.setState({ method: item.method, url: item.url, reqBody: item.reqBody });
}

render() {
  return (
    <div >
      <form onSubmit={this.printUrlAndMethod} className="form">
        <br/>
        <br/>
        <br/>
        <input name="url" value={this.state.url} placeholder="http://" onChange={this.onChangeUrl} />
        <br/>
        <input checked={this.state.method === 'GET'} type="radio" value="GET" name="method" onChange={this.onChangeMethod} />
        <label htmlFor="GET">GET</label>
        <input checked={this.state.method === 'POST'} type="radio" value="POST" name="method" onChange={this.onChangeMethod} />
        <label htmlFor="POST">POST</label>
        <input checked={this.state.method === 'PUT'} type="radio" value="PUT" name="method" onChange={this.onChangeMethod} />
        <label htmlFor="PUT">PUT</label>
        <input checked={this.state.method === 'DELETE'} type="radio" value="DELETE" name="method" onChange={this.onChangeMethod} />
        <label htmlFor="DELETE">DELETE</label>
        <br/>
        <br/>
        <textarea name="reqBody" onChange={this.onChangeBody} value={this.state.reqBody}/>
        <br/>
        <button type="submit">Go</button>
      </form>
      <div>
        <span>{this.state.goMethod} &nbsp; {this.state.goUrl} </span>
      </div>
      <div style={{ float: 'left' }}>
        <History selectItem={this.selectItem} items={this.state.history} />
        { this.state.isLoading ? <h1>Loading</h1> : <Results json={this.state.responseJson} />}
      </div>
    </div>
  );
}
}