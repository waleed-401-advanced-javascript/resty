import JSONPretty from 'react-json-prettify';
import React from 'react';
import './form.scss';
import History from '../handlehistory/handlehistory';
import TextArea from '../post/textarea';
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    // init state
    this.state = {
      urltemp: '',
      methodtemp: '',
      url: '',
      _method: '',
      responseJson: {},
      body :'',
      data : '',
      history:[],
    };
  }
    fetchData = () => {
      console.log('fetch', this.state._method, this.state.url);
      fetch(this.state.url, {
        _method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(async (res) => {
          const obj = {};
          //console.log('res : ', await res.json())
          for (let [key, value] of res.headers.entries()) {
            obj[key] = value;
            console.log('obj : ', obj);
          }
          const resJson = await res.json();
          // console.log('resJson : ' ,resJson);
          this.setState({ responseJson: { Headers: obj, Response: resJson } });
          this.state.history.push(<li><History method={this.state._method}  url={this.state.url} body={this.state.body}/></li>);
          let history=this.state.history;
          this.setState({history});
          let local = JSON.parse(localStorage.getItem('history'));
          local.push({url: this.state.url,method:this.state._method, body:this.state.body});
          localStorage.setItem('history',JSON.stringify(local));
        });
    }
    handleClickGO = e => {
      e.preventDefault();
      console.log('before', this.state);
      this.setState({ _method: this.state.methodtemp });
      this.setState({ url: this.state.urltemp }, () => {
        console.log('after', this.state);
        if (this.state._method === 'get') {
          this.fetchData();
        }
        else {
          this.addcontact();
        }
      });
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
    handleInputmethod = e => {
      let method = e.target.value;
      console.log('method : ', method);
      this.setState({ methodtemp: method });
    }
    handleInput = e => {
      let url = e.target.value;
      console.log('url : ', url);
      this.setState({ urltemp: url }); // re-render 
    }
    componentDidMount() {
      if (!JSON.parse(localStorage.getItem('history'))){
        localStorage.setItem('history',JSON.stringify([]));
      }
      let history =  JSON.parse(localStorage.getItem('history')).map((item,index)=>{
        return(
          <History method={item.method}  url={item.url} body={item.body}/>
        ); 
      });
      this.setState({ history });
    }
    
    render() {
      return (<div><form onSubmit={this.handleClickGO}>
        <legend>URL</legend>
        <label>URL <input onChange={this.handleInput} /></label>
        <button type="submit" >GO</button>
        <br />
        <label id="label" htmlFor="get"> <input onChange={this.handleInputmethod} className='radio-in' type="radio" id="get" name="btnselect"
          value="get" />GET</label>
        <label id="label" htmlFor="post"> <input onChange={this.handleInputmethod} className='radio-in' type="radio" id="post" name="btnselect"
          value="post" />POST</label>
        <label id="label" htmlFor="put"> <input onChange={this.handleInputmethod} className='radio-in' type="radio" id="put" name="btnselect"
          value="put" />PUT</label>
        <label id="label" htmlFor="delete"> <input onChange={this.handleInputmethod} className='radio-in' type="radio" id="delete" name="btnselect"
          value="delete" />DELETE</label>
      </form>
      <section>
        <TextArea/>
      </section>
      <section>
        <ul>
          {this.state.history}
        </ul>
      </section>
      <section>
        <h3>{this.state._method} {this.state.url}</h3>
        <JSONPretty json={this.state.responseJson} />
      </section>
      </div>
      );
    }
}
