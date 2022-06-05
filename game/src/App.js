import './App.css';
import React from 'react'
import {useState} from 'react';

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}




/*
function App() {
  return (
    <div>
    <h1>Color Game</h1>

      <div className="App">
      <Button text="Button that says hello" onClick={alert('Hello')}/> 
        <div className='parent'>
          <div className='child' border="10px"></div>
          <div className='child'></div>
          <div className='child'></div>
        </div>
        <div className='parent'>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child'></div>
        </div>
        <div className='parent'>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child'></div>
        </div>
      </div>
    </div>
  );
}
*/

function Show() {
  return (
    <div>
      <h2>Showing</h2>
    </div>
  );
}


class App extends React.Component {
  state = {
    mode:"Choose Mode"
  }
  render() {
    return(
    <div>
    <h1>Color Game</h1>
    <h2 className="mode">{this.state.mode}</h2>

      <div className="App">
      <Button text="Easy" onClick={() => this.setState({mode: "Easy"})}/>
      <Button text="Medium" onClick={() => this.setState({mode: "Medium"})}/>
      <Button text="Hard" onClick={() => this.setState({mode: "Hard"})}/>
        <div className='parent'>
          <div className='child' border="10px"></div>
          <div className='child'></div>
          <div className='child'></div>
        </div>
        <div className='parent'>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child'></div>
        </div>
        <div className='parent'>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child'></div>
        </div>
      </div>
    </div>
    )
  }
}

export default App;
