import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#7CB9E8",
    textDecoration: "none",
    color: "black",
};

function NavBar() {
    return (
        <div className='navbar'>
            <NavLink to='/' exact style={linkStyles}>
                About
            </NavLink>
            <NavLink to='/entrylist' exact style={linkStyles}>
                Entry List
            </NavLink>
            <NavLink to='/newentry' exact style={linkStyles}>
                New Entry
            </NavLink>
            <NavLink to='/results' exact style={linkStyles}>
                Results
            </NavLink>
        </div>
    )
}

export default NavBar