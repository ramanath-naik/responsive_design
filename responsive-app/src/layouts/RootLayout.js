import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

export default function RootLayout() {
  return (
    <div>
        <header style={{padding:'20px'}}>
            <nav>
                <h1>Router</h1>
                <NavLink to='/'> Home</NavLink>
                <NavLink to="/about" style={{paddingLeft:'20px'}}>About</NavLink> 
                <NavLink to="/help" style={{paddingLeft:'20px'}}>Help</NavLink> 
                <NavLink to="/careers" style={{paddingLeft:'20px'}}>Careers</NavLink> 
            </nav>
            <Breadcrumbs/>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>

  )
}
