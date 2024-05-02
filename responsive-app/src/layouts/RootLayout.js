import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
        <header style={{padding:'20px'}}>
            <nav>
                <h1>Router</h1>
                <NavLink to='/'> Home</NavLink>
                <NavLink to="/about" style={{paddingLeft:'20px'}}>About</NavLink> 
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>

  )
}
