import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakeList = [
  { id: "1", name: "Echo Lake" },
  { id: "2", name: "Nasser Lake" },
  { id: "3", name: "Tahoe Lake" }
];
function Lake(props) {
  return (
    <h1 key={props.lake.id}>{props.lake.name}</h1>
  )
}
function App(props) {
  return (
    <div >
      {props.lakes.map(lake => <Lake lake={lake} />)}
    </div>
  );
}
ReactDOM.render(
  <App lakes={lakeList} />,
  document.getElementById('root')
);