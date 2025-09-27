import React from 'react'
import { NavLink } from 'react-router-dom'


function Aheader({title}) {
    return (
        <div>
            <div class="p-5 bg-primary text-white text-center">
                <h1>{title}</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/index">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/about">About</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/blog">Blog</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Aheader