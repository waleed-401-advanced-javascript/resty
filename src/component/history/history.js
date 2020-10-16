import React from 'react';

function History(props) {
  const items = props.items || [];

  return (
    <aside className="App-history">
      <h4>Search History</h4>
      <ul data-testid="history" >
        {
          items.map((item, i) =>
            <li key={i}>
              <span className="method-span">
                {item.method}
              </span>
              <span className="url-span">
                {item.url}
              </span>
              <input type="button" onClick={props.selectItem.bind(this, i)} value="click" />
            </li>,
          )
        }
      </ul>
    </aside>
  );
}


export default History;