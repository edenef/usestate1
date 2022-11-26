import {useState, usestate} from "react";
function Counter(props) {
    const [count,setCount]=useState(0)
    const {delta}=props
    const {max}=props
    function incr(){
        setCount(
            function(oldConter){
              if ((oldConter+delta)>max)
              {
                return 0}
              return oldConter+delta
            }
        )
        console.log(count)
    }
    function restart(){
        setCount(0)
    }
    return (
    <div >
      <h1>Counter</h1>
      <p> Counter is at: </p>
      <h2>{count}</h2>
      <button onClick={incr}>Click to add {delta} to Counter</button>
      <p><button onClick={restart}><b>Reset Counter</b></button></p>
      
    </div>
  );
}

export default Counter;