import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function () {
  return (
    <div>
        <h2> Website Help</h2>

        <nav>
            <NavLink to="faq"> View the FAQ</NavLink>
            <NavLink to="contact"> Contact Us</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}
