import React from 'react'
import './Header.css'
import {Link} from "react-router-dom"


export default function Header() {
    return (
        <div >
        <nav className="navbar navbar-expand navbar-light bg-light" style={{color:'white'}}>
            <div className="container-fluid">
            <Link to="/"><p className="navbar-brand " style={{color:'#ff0066', fontWeight:'bold'}}>ribbon</p></Link>
         <ul className="navbar-nav navbar-right">
        <li className="nav-item">
          <Link to="/profile"><a className="nav-link "><i className="fas fa-user-circle fa-2x iconStyle"></i></a></Link>
        </li>
        <li className="nav-item">
            <Link to="/notification">
            <a className="nav-link" ><i className="fas fa-bell fa-2x iconStyle"></i></a>
            </Link>
         
        </li>
        </ul>
        </div>
        
        </nav>
        </div>
    )
}
