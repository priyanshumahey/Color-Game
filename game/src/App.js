import './App.css';

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}


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

export default App;
