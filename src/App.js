// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [names, setNames] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNames(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <MovieCounter></MovieCounter>
        {
          names.map(name => <Names name={name.name} key={name.id} email={name.email}></Names>)
        }
      </header>
    </div>
  );
}

function Names(props) {
  const nameStyle = {
    border: '2px solid aqua',
    margin: '10px',
    borderRadius: '5px',
  }
  return(
    <div style={nameStyle}>
      <h1>Name is: {props.name}</h1>
      <h6>Email is: {props.email}</h6>
    </div>
  )
}
function CounterDisplay(props){
  return(
    <h4>Counter I have acted: {props.count}</h4>
  )
}
function MovieCounter(){
  const [count, setCount] = useState(0);
  const handliClick = () => {
    setCount(count+1);
  }
  return(
    <div>
      <button onClick={handliClick}>Add Movies</button>
      <h5>Number of count: {count} </h5>
      <CounterDisplay count={count}></CounterDisplay>
    </div>
  )
}

export default App;
