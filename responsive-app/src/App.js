import React from "react";
import ResponsiveButton from "./components/ResponsiveButton";
import FlexBox1 from "./components/FlexBox1";
import ReactMemoMarks from "./components/ReactMemoMarks";
import ReactMemoName from "./components/ReactMemoName";

function App() {
  return (
    <div style={{marginTop: '50px', textAlign:'center'}}>
     <ReactMemoName name="Anand"/>
     <ReactMemoMarks marks={80} subject="Maths"/>
    </div>
  );
}

export default App;
