import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {

  return (
    <BrowserRouter >
    <header style={{padding:'20px'}}>
      <nav>
        <h1>Router</h1>
        <Link to='/'> Home</Link>
        <NavLink to="/about" style={{paddingLeft:'20px'}}>About</NavLink> 
      </nav>
    </header>
    <main style={{padding:'20px'}}>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </main>
    </BrowserRouter>
    
  );
}
//we can add additional css to navlink but not for the normal link. use of navlink is recommended.

export default App;
