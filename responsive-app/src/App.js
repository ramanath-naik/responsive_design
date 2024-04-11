import React from "react";
import ResponsiveButton from "./components/ResponsiveButton";
import FlexBox1 from "./components/FlexBox1";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <div style={{marginTop: '50px', textAlign:'center'}}>
      <ClickCounter/>
      <HoverCounter/>
    </div>
  );
}

export default App;
