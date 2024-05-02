import React from "react";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/" element={<RootLayout/>}>
      <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
    </Route>
  )
)
function App() {

  return (

  <RouterProvider router={router}/>
  
    
  );
}
//we can add additional css to navlink but not for the normal link. use of navlink is recommended.

export default App;
