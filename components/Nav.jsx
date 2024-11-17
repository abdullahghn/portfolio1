import React from 'react'
import logo from '../src/assets/va-logo.png'

export default function Nav() {
    return (
        <nav>
            <img src={logo} className="logo" />
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}