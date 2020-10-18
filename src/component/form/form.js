'strict mode';
import React, { Component } from 'react';

import Results from '../results/results';

import './form.scss';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 'GET',
      url: '',
      reqBody: '',
      responseJson: {},
      isLoading: false,
      history: [],
    };
  }

  componentWillMount(){
    this.setState({history: JSON.parse(localStorage.getItem('history')) || []});
  }

  componentDidMount(){
    const selectedItem = this.props.selectedItem;
    console.log('form selectedItem', selectedItem);
    if (selectedItem){
      const item = this.state.history[selectedItem];
      console.log(item);
      if (item){
        this.setState({ method: item.method, url: item.url, reqBody: item.reqBody });
        this.fetchData(item.method, item.url, item.reqBody);
      }
    }
  }

fetchData = (method, url, reqBody) => {
  const fetchMethod = this.state.method || method;
  const fetchUrl = this.state.url || url;
  const fetchReqBody = this.state.reqBody || reqBody;
  this.setState({ isLoading: true });
  fetch(fetchUrl,{
    method: fetchMethod,
    headers: {
      'Content-Type': 'application/json',
    },
    body: fetchReqBody ?  JSON.stringify(this.state.reqBody) : undefined,
  })
    .then(async (res) => {
      const obj = {};
      for (let [key, value] of res.headers.entries()) {
        obj[key] = value;
      }
      const resJson = await res.json();
      this.setState({ isLoading: false, responseJson: { Headers: obj, Response: resJson }, history: [...this.state.history, { method:this.state.method, url: this.state.url, reqBody: this.state.reqBody }]});
      localStorage.setItem('history', JSON.stringify(this.state.history));
    }).catch((err) => {
      this.setState({ isLoading: false, responseJson: {error: 'check the console'} });
    });
}

onChangeMethod = e => {
  this.setState({ responseJson: {} });
  this.setState({ method: e.target.value });
}
onChangeUrl = e => {
  this.setState({ responseJson: {} });
  this.setState({ url: e.target.value });
}
onChangeBody = e => {
  this.setState({ responseJson: {} });
  this.setState({ reqBody: e.target.value });
}

printUrlAndMethod = e => {
  e.preventDefault();
  this.setState({ goMethod: this.state.method, goUrl: this.state.url, goBody: this.state.reqBody });
  this.fetchData();
};

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
        { this.state.isLoading ?<iframe src={'https://giphy.com/embed/ZBQhoZC0nqknSviPqT'}></iframe> : <Results json={this.state.responseJson} />}
      </div>
    </div>
  );
}
}