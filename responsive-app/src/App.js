import React from "react";
import ResponsiveButton from "./components/ResponsiveButton";
import FlexBox1 from "./components/FlexBox1";
import Button from "./components/Button";
import { useState, useEffect, useCallback } from "react";

function App() {

  const[count, setCount] = useState(0);

  const incrementCount = useCallback(()=>{
    // setCount(count+1); //this will not work count will be 1 only.
    setCount(prevCount => prevCount + 1);

  },[])

useEffect(()=>{
  console.log("Inside useeffect");
},[incrementCount])

  return (
    <div style={{marginTop: '50px', textAlign:'center'}}>
     <h2>{count}</h2>
     <Button incrementCount={incrementCount} />
    </div>
  );
}

export default App;
