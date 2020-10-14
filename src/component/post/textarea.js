import React from 'react';

class TextSpace extends React.Component{

  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <textarea>
          {this.props.body}
        </textarea>
      </div>
    );

  }
}

export default TextSpace;