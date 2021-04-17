import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div>
    <footer className="bg-light">
            <ul className="nav justify-content-center" >
            <li className="nav-item ">
                <a className="nav-link " href="#"><i className="fas fa-2x fa-home"></i><br/><span>Home</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link " href="#"><i className="fas fa-align-justify fa-2x"></i><br/><span>Activity</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><i className="fas fa-2x fa-wallet"></i><br/><span>Wallet</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><i className="fas fa-2x fa-store"></i><br/><span>Market</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link " href="#"><i className="fas fa-2x fa-donate"></i><br/><span>Earn</span></a>
            </li>
            </ul>

    </footer>
        </div>
    )
}
