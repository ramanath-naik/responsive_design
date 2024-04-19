import React from "react";
import ResponsiveButton from "./components/ResponsiveButton";
import FlexBox1 from "./components/FlexBox1";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {

  return (
    <div style={{marginTop: '50px', textAlign:'center'}}>
     <AddTodo/>
     <Todos/> 
    </div>
  );
}

export default App;
