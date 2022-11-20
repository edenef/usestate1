import {useState, usestate} from "react";
function Counter() {
    const [count,setCount]=useState(1)
    function incr(){
        setCount(
            function(oldConter){
                return oldConter+1
            }
        )
    }
    function restart(){
        setCount(
            function(totalcount){
                return 0
            }
        )
    }

  return (
    <div >
      <h1>Counter</h1>
      <p> Counter is at: </p>
      <h2>{count}</h2>
      <button onClick={incr}>Click to add 1 to Counter</button>
      <p><button onClick={restart}><b>Reset Counter</b></button></p>
    </div>
  );
}

export default Counter;