import React from 'react'
import './Header.css'


export default function Header() {
    return (
        <div className="totalStyle">
        <nav className="navbar navbar-expand navbar-light bg-light" style={{color:'white'}}>
            <div className="container-fluid">
            <a className="navbar-brand " href="#" style={{color:'#ff0066', fontWeight:'bold'}}>ribbon</a>
         <ul className="navbar-nav navbar-right">
        <li className="nav-item">
          <a className="nav-link " href="#"><i className="fas fa-user-circle fa-2x iconStyle"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="fas fa-bell fa-2x iconStyle"></i></a>
        </li>
        </ul>
        </div>
        
        </nav>
        </div>
    )
}
