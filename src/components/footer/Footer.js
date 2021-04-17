import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div>
    <footer className="bg-light">
            <ul className="nav justify-content-center" >
            <li className="nav-item ">
                <a className="nav-link active" href="#"><i className="fas fa-2x fa-home" style={{color:'red'}}></i><br/><span style={{color:'red'}}>Home</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link " href="#"><i className="fas fa-align-justify fa-2x" style={{color:'red'}}></i><br/><span style={{color:'red'}}>Activity</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><i className="fas fa-2x fa-wallet" style={{color:'red'}}></i><br/><span style={{color:'red'}}>Wallet</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><i className="fas fa-2x fa-store" style={{color:'red'}}></i><br/><span style={{color:'red'}}>Market</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link " href="#"><i className="fas fa-2x fa-donate" style={{color:'red'}}></i><br/><span style={{color:'red'}}>Earn</span></a>
            </li>
            </ul>

    </footer>
        </div>
    )
}
