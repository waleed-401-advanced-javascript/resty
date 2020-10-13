import React from 'react';
import './App.css';
import './reset.scss';
import './header.scss';
import './main.scss';
import './footer.scss';
import JSONPretty from 'react-json-prettify';
const Header = () => {
  return <header><h1>RESTy</h1></header>;
};
const Footer = () => {
  return <footer><h3>@ 2018 Code Fellows</h3></footer>;
};
// const Form = () => {
// }
class Form extends React.Component {
  constructor(props) {
    super(props);
    // init state
    this.state = {
      url: '',
      _method: '',
      urltemp:'',
      methodtemp:'',
      responseJson: {},
      results:'',
      data:'',
    };
  }
  fetchData = () => {
    console.log('fetch', this.state.methodtemp, this.state.urltemp);
    fetch(this.state.urltemp,{
      method: this.state.methodtemp || 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (res) => {
        const obj = {};
        for (let [key, value] of res.headers.entries()) {
          obj[key] = value;
        }
        const resJson = await res.json();
        this.setState({ responseJson: { Headers: obj, Response: resJson }});
      });
  }
  handleClickGO = e => {
    e.preventDefault();
    // const {username,password,email} = this.state.data;
    this.setState({url: this.state.urltemp});
    this.setState({ _method: this.state.methodtemp});
    if(this.state.method ==='get'){
      this.fetchData();
    }else{
      console.log(this.state.url);
      this.addcontact();
    }
   
    // let data=`{url : ${this.state.urltemp}, _method : ${this.state.methodtemp}}`;
  // this.request.push(this.data);
  }
  // methods inside of class
  handleInputmethod = e => {
    let method = e.target.value;
    this.setState({methodtemp: method});
  }
  handleInput = e => {
    let url = e.target.value;
    this.setState({urltemp:url}); // re-render 
  }
  addcontact(){
    fetch(this.state.urltemp,{
      method:'post',
      headers:{'content-type':'application/json',mode:'no-cors','Access-Control-Allow-Origin': 'http://localhost:3000','Access-Control-Allow-Credentials':'true'},
      body: JSON.stringify(this.state.data),

    }).then(()=>{
      fetch(this.state.urltemp )
        .then(response => response.json())
        .then(result =>{
          console.log('result',result);
          this.setState({
            responseJson:result,
          });
        }).catch(e=>console.log(e));
    });
  }
  getBody = e => this.setState({ url: e.target.value });

  render() {
    return (<div id="form-div"><form>
      <label id="url">URL <input onChange={this.handleInput} /></label>
      <button onClick={this.handleClickGO} >GO</button>
      <br />
      <label id="label" htmlFor="get"> <input onChange={this.handleInputmethod}  className='radio' type="radio" id="get" name="btnselect"
        value="get"/>GET</label>
      <label id="label" htmlFor="post"> <input onChange={this.handleInputmethod} className='radio'type="radio" id="post" name="btnselect"
        value="post"/>POST</label>
      <label id="label" htmlFor="put"> <input onChange={this.handleInputmethod} className='radio'type="radio" id="put" name="btnselect"
        value="put"/>PUT</label>
      <label id="label" htmlFor="delete"> <input onChange={this.handleInputmethod} className='radio'type="radio" id="delete" name="btnselect"
        value="delete"/>DELETE</label>
    </form>
    <textarea name='data' onChange={this.getBody}></textarea>
    <section id="text-area">
      <pre>{this.state._method}      {this.state.url}</pre>
      <JSONPretty id="json" json={this.state.responseJson} />
    </section>
    
    </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="page-container">
          <div id="content-wrap">
            <Header />
            <Form />
          </div>
          <footer id="footer">
            <Footer />
          </footer>
        </div>  
      </React.Fragment>
    );
  }
}
export default App;