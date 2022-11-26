import './App.css';
import Counter from './Counter';
import {useState, usestate} from "react";

function App() {
  const[delta,setDelta]=useState(1)

function handelDelta(event){
    console.log(event)
    setDelta(Number(event.target.value))
  }
  return (
    <div className="App">
      <input type="number" value={delta} onChange={handelDelta}/>
      <Counter delta={delta}/>
      <Counter delta={delta}/>
    </div>
  );
}


export default App;