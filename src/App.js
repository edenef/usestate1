import './App.css';
import Counter from './Counter';
import {useState} from "react";

function App() {
  const[delta,setDelta]=useState(1)
  const[max,setMax]=useState(10)
  const[reset,setReset]=useState(false)

  const [maxVal, setMaxVal] = useState(0); 

function UpdateMaxVal(currentMaxVal){
  console.log(currentMaxVal);
  if(currentMaxVal > maxVal){
    setMaxVal(currentMaxVal)
  }}

function getRestart(data){
  console.log(data)
  setReset(data)
}
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
      <p> Max counter {maxVal}</p>   
      <Counter delta={delta} max={max} getRestart={getRestart} needToReset={reset} UpdateMaxVal={UpdateMaxVal}/>
      <Counter delta={delta} max={max} getRestart={getRestart} needToReset={reset} UpdateMaxVal={UpdateMaxVal}/>
    </div>
  );
}


export default App;