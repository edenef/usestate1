import {useState, useEffect} from "react";
function Counter(props) {
    const [count,setCount]=useState(0)
    const {delta,max,getRestart,needToReset}=props
    const {UpdateMaxVal}=props
 
    useEffect(()=>{
      if(needToReset){
        setCount(0)
        getRestart(false)
      }
    },[needToReset,getRestart])

       function incr(){
        setCount(
            function(oldConter){
              UpdateMaxVal(oldConter+delta)
              if ((oldConter+delta)>max)
              {
                return 0}
              return oldConter+delta
            }
        )
        console.log(count)
    }
    function reset(){
        getRestart(true)
        //setCount(0)
    }


    return (
    <div >
      <h1>Counter</h1>
      <p> Counter is at: </p>
      <h2>{count}</h2>
      <button onClick={incr}>Click to add {delta} to Counter</button>
      
      
      <p><button onClick={reset}><b>Reset Counter</b></button></p>
      
    </div>
  );
}

export default Counter;