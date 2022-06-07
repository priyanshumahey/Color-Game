import './App.css';
import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}
const Timer = () => {
  const [count, setCount] = React.useState(10)
  React.useEffect(() => {
    count > 0 && setTimeout(() => setCount(count - 1), 1000);
  }, [count]);
  return (
    <div className="parent">
      <div>Countdown: {count}</div>
      <button onClick={() => setCount(10)}>Reset</button>
    </div>
  )
}

function Example() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    document.title = `You clicked ${count} times`;});
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

function shuffle(array) {
  let cI = array.length,  rI
  while (cI !== 0) {
    rI = Math.floor(Math.random() * cI)
    cI--
    [array[cI], array[rI]] = [
      array[rI], array[cI]]
  }
  return array
}

const randomColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  let color2 = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
    if (i !== 1 && i !== 5 && i !== 3) {
      color2 += str[index]
    }
    if (i === 5) {
      color2 += 'f'
    }
    if (i === 1) {
      color2 += 'f'
    }
    if (i === 3) {
      color2 += '1'
    }
  }
  return ["#" + color, "#" + color2]
}

function Head () {
  const time = 10
  return(
  <div>
    <h1>Color Game</h1>
    <p>Welcome to the Color Game! This is a simple game where the objective is to pick the different color. Start off by picking Easy, Medium or Hard.
      Then the game will begin and you will have {time} seconds to pick the color that's different from the rest.
    </p>
    
  </div>
  )
}

function Main () {
  const [counter, setCounter] = React.useState(10)
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
  const clear = event => {
    seteasyisShown(false)
    setmedisShown(false)
    sethardisShown(false)
    setMode("Choose the mode")
  }
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);}, [counter]);
  return(
  <div>
    <h2 className="mode">{mode}</h2>
    <div className="App">
      {!easyisShown && !medisShown && !hardisShown && <Button text="Easy" onClick={easyClick}/>}
      {!easyisShown && !medisShown && !hardisShown && <Button text="Medium" onClick={medClick}/>}
      {!easyisShown && !medisShown && !hardisShown && <Button text="Hard" onClick={hardClick}/>}
    </div>
    <div className="App">
      {(easyisShown || medisShown || hardisShown) &&<Button text="Change Difficulty" onClick={clear}/>}
    </div>
    <Example />
    <Timer />
    {easyisShown && <div><Easy /></div>}
    {easyisShown && <div>
      <div className="parent">
        <div>Countdown: {counter}</div>
      <button onClick={() => setCounter(10)}>Reset</button>
      </div>
    </div>}
    {medisShown && <div><Med /></div>}
    {hardisShown && <div><Hard /></div>}
  </div>
  )
}



function Easy() {
  var color = randomColor()
  const mystyle = {
    display: "inline-block",
    backgroundColor: color[0],
    padding: "5%",
    verticalAlign: "middle",
    margin: "1%",
    borderRadius: "15%",
  }
  const mystyle2 = {
    display: "inline-block",
    backgroundColor: "#000000", //color[1],
    padding: "5%",
    verticalAlign: "middle",
    margin: "1%",
    borderRadius: "15%",
  }
  console.log(color)
  var finStyleEasy = shuffle([mystyle, mystyle, mystyle, mystyle2])
  var finStyle = finStyleEasy
  return (
    <div className="App">
        <div className='parent'>
          <div style={finStyle[0]}></div>
          <div style={finStyle[1]}></div>
        </div>
        <div className='parent'>
          <div style={finStyle[2]}></div>
          <div style={finStyle[3]}></div>
        </div>
    </div>
  );
}

function Med () {
  var color = randomColor()
  const mystyle = {
    display: "inline-block",
    backgroundColor: color[0],
    padding: "5%",
    verticalAlign: "middle",
    margin: "1%",
    borderRadius: "15%",
  }
  const mystyle2 = {
    display: "inline-block",
    backgroundColor: color[1],
    padding: "5%",
    verticalAlign: "middle",
    margin: "1%",
    borderRadius: "15%",
  }
  var finStyle = shuffle([mystyle, mystyle, mystyle, mystyle, mystyle, mystyle, mystyle, mystyle, mystyle2])
  return (
    <div className="App">
        <div className='parent'>
          <div style={finStyle[0]}></div>
          <div style={finStyle[1]}></div>
          <div style={finStyle[2]}></div>
        </div>
        <div className='parent'>
          <div style={finStyle[3]}></div>
          <div style={finStyle[4]}></div>
          <div style={finStyle[5]}></div>
        </div>
        <div className='parent'>
          <div style={finStyle[6]}></div>
          <div style={finStyle[7]}></div>
          <div style={finStyle[8]}></div>
        </div>
    </div>
  );
}


function Hard () {
  var color = randomColor()
  const mystyle = {
    display: "inline-block",
    backgroundColor: color[0],
    padding: "5%",
    verticalAlign: "middle",
    margin: "1%",
    borderRadius: "15%",
  }
  const mystyle2 = {
    display: "inline-block",
    backgroundColor: color[1],
    padding: "5%",
    verticalAlign: "middle",
    margin: "1%",
    borderRadius: "15%",
  }
  var finStyle = shuffle([mystyle, mystyle, mystyle, mystyle, mystyle, mystyle, mystyle, mystyle, mystyle, mystyle, mystyle, mystyle, mystyle, mystyle, mystyle, mystyle2])
  return (
    <div className="App">
        <div className='parent'>
          <div style={finStyle[0]}></div>
          <div style={finStyle[1]}></div>
          <div style={finStyle[2]}></div>
          <div style={finStyle[3]}></div>
        </div>
        <div className='parent'>
          <div style={finStyle[4]}></div>
          <div style={finStyle[5]}></div>
          <div style={finStyle[6]}></div>
          <div style={finStyle[7]}></div>
        </div>
        <div className='parent'>
          <div style={finStyle[8]}></div>
          <div style={finStyle[9]}></div>
          <div style={finStyle[10]}></div>
          <div style={finStyle[11]}></div>
        </div>
        <div className='parent'>
          <div style={finStyle[12]}></div>
          <div style={finStyle[13]}></div>
          <div style={finStyle[14]}></div>
          <div style={finStyle[15]}></div>
        </div>
    </div>
  );
}




function Footer (props) {
  return (
    <footer>
      <h3>Made by {props.name}</h3>
      <h3><a href="https://www.linkedin.com/in/priyanshu-mahey/" rel="noreferrer" target="_blank">LinkedIn</a></h3>
      <h3><a href="https://github.com/priyanshumahey" rel="noreferrer" target="_blank">Github</a></h3>
    </footer>
  )
}

function App () {
  
  return (
    <div>
      <Head />
      <Main />
      <Footer name="Priyanshu Mahey"/>
    </div>
  )
}


export default App;
