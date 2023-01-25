import React from 'react';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import '../styles/nav.css';
import { Link } from "react-router-dom";
import Logo from "../images/FantomGalleryLogo.png";

function Nav() {
    return <div className="navbar">
    <div className="navbar-content">
        <div className = "left-nav">
        <Link to="/"><img src={Logo} /></Link>
        </div>
        <div className = "right-nav">
            <div className ="nav-links">
                <Link to="/about">About</Link>
                <Link to="/artists">Artists</Link>
                
            </div>
            <ConnectButton className="connect-button"/>
        </div>
    </div>
    </div>
}

export default Nav