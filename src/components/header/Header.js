import React from 'react'
import './Header.css'
import {Link} from "react-router-dom"


export default function Header() {
    return (
        <div id="header">
        <nav className="navbar navbar-expand navbar-light bg-light" style={{color:'white'}}>
            <div className="container-fluid">
            <Link to="/"><p className="navbar-brand " style={{color:'black', fontWeight:'bold'}}>LOGO</p></Link>
         <ul className="navbar-nav navbar-right">
        <li className="nav-item">
          <Link className="nav-link " to="/profile"><i className="fas fa-user-circle fa-2x iconStyle"></i></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/notification"> 
            <i className="fas fa-bell fa-2x iconStyle"></i>
            </Link>
         
        </li>
        </ul>
        </div>
        
        </nav>
        </div>
    )
}
