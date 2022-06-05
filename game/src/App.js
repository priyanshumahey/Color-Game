import './App.css';
import React from 'react'


const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

function Head () {
  const [mode, setMode] = React.useState('Choose Mode:')

  
  return(
  <div>
    <h1>Color Game</h1>
    <h2 className="mode">{mode}</h2>
    <div className="App">
      <Button text="Easy" onClick={() => setMode("Easy")}/>
      <Button text="Medium" onClick={() => setMode("Medium")}/>
      <Button text="Hard" onClick={() => setMode("Hard")}/>
    </div>
  </div>
  )
}

function Main () {
  return(
    <div>
      <div className="App">
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

function App () {
  
  return (
    <div>
      <Head />
      <Main />
    </div>
  )
}


export default App;
