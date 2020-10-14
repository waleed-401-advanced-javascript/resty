import React from 'react';

class History extends React.Component{

  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <button className='history'> {`${this.props.method} :${this.props.url}`}</button>
      </div>

    );
   
  }
   
}
export default History;