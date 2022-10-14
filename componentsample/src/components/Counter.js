import React, { useState, useEffect } from 'react'

let interval;
function Counter(props) {
    const [count, setCount] = useState(props.startWith);

    useEffect(()=>{
        console.log(count);
    },[count]);

    const startCounter = () => {
        interval = setInterval(() => {
            setCount(count => count + 10);
        }, 1000);
    };

    const stopCounter = () => {
        clearTimeout(interval);
    };



  return (
    <>
        <h2>{count}</h2>
        <input type="button" value="Start" onClick={startCounter}  />
        <input type="button" value="Stop" onClick={stopCounter} />
     </>
  );
}

export default Counter;