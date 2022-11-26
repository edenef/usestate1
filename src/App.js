import './App.css';
import Counter from './Counter';
import {useState, usestate} from "react";

function App() {
  const[delta,setDelta]=useState(1)
  const[max,setMax]=useState(0)

function handelDelta(event){
    console.log(event)
    setDelta(Number(event.target.value))
  }
  function handelMax(max){
    console.log(max)
    setMax(Number(max.target.value)) 
}
  return (
    <div className="App">
      <p>Jump each counter </p>
      <input type="number" value={delta} onChange={handelDelta}/>
      <p> Max counter </p>
            <input type="number" value={max} onChange={handelMax}/>
      <Counter delta={delta} max={max}/>
      <Counter delta={delta} max={max}/>
    </div>
  );
}


export default App;