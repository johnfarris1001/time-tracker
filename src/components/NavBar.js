import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "green",
    textDecoration: "none",
    color: "white",
};

function NavBar() {
    return (
        <div className='navbar'>
            <NavLink to='/' exact style={linkStyles}>
                Home
            </NavLink>
            <NavLink to='/about' exact style={linkStyles}>
                About
            </NavLink>
            <NavLink to='/entrylist' exact style={linkStyles}>
                EntryList
            </NavLink>
            <NavLink to='/newentry' exact style={linkStyles}>
                NewEntry
            </NavLink>
        </div>
    )
}

export default NavBar