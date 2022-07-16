import React from "react";

function Navbar(attr){
return(
<ul className="navbar navbar-expand navbar-dark bg-dark">
            <li className="nav-item">
            <a className={`nav-link ${attr.state.page.hash === 'home' ? 'active' : ''}`}href="#/home">Home</a>
            </li>
            <li className="nav-item">
            <a className={`nav-link ${attr.state.page.hash === 'about' ? 'active' : ''}`}href="#/about">About</a>
            </li>
        </ul>

    )
}
export default Navbar;
