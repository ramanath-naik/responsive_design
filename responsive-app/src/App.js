import React from "react";
import ResponsiveButton from "./components/ResponsiveButton";
import FlexBox1 from "./components/FlexBox1";
import Counter from "./components/Counter";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {

  return (
    <div style={{marginTop: '50px', textAlign:'center'}}>
      <ErrorBoundary>
        <Counter/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
