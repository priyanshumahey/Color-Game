import './App.css';
import React from 'react'


const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

function Head () {
  const [mode, setMode] = React.useState('Choose Mode:')
  const [easyisShown, seteasyisShown] = React.useState(false)
  const [medisShown, setmedisShown] = React.useState(false)
  const [hardisShown, sethardisShown] = React.useState(false);
  const easyClick = event => {
    seteasyisShown(true)
    setmedisShown(false)
    sethardisShown(false)
    setMode("Easy")
  }
  const medClick = event => {
    seteasyisShown(false)
    setmedisShown(true)
    sethardisShown(false)
    setMode("Medium")
  }
  const hardClick = event => {
    seteasyisShown(false)
    setmedisShown(false)
    sethardisShown(true)
    setMode("Hard")
  }
  return(
  <div>
    <h1>Color Game</h1>
    <h2 className="mode">{mode}</h2>
    <div className="App">
      <Button text="Easy" onClick={easyClick}/>
      <Button text="Medium" onClick={medClick}/>
      <Button text="Hard" onClick={hardClick}/>
    </div>
    {easyisShown && <Easy />}
    {medisShown && <Med />}
    {hardisShown && <Hard />}
  </div>
  )
}

function Easy() {
  return (
    <div className="App">
        <div className='parent'>
          <div className='child'></div>
          <div className='child'></div>
        </div>
        <div className='parent'>
          <div className='child'></div>
          <div className='child'></div>
        </div>
    </div>
  );
}

function Med () {
  return (
    <div className="App">
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
        <div className='parent'>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child'></div>
        </div>
    </div>
  );
}


function Hard () {
  return (
    <div className="App">
        <div className='parent'>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child'></div>
        </div>
        <div className='parent'>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child'></div>
        </div>
        <div className='parent'>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child'></div>
        </div>
        <div className='parent'>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child'></div>
        </div>
    </div>
  );
}




function Footer () {
  return (
    <div>
      <h3>Made by Priyanshu Mahey</h3>
      <h3><a href="https://www.linkedin.com/in/priyanshu-mahey/" rel="noreferrer" target="_blank">LinkedIn</a></h3>
      <h3><a href="https://github.com/priyanshumahey" rel="noreferrer" target="_blank">Github</a></h3>
    </div>
  )
}

function App () {
  
  return (
    <div>
      <Head />
      <Footer />
    </div>
  )
}


export default App;
