import '../styles/header.css'
import Header_IMG from "../images/frame.png";
import React from 'react';
import { Link } from "react-router-dom";
import Nav from "../components/nav.js";


function Header() {
    return <div className="header-container">
        <div className="header-content">
        <h1>Fantom Gallery</h1>
        <p>A virtual gallery focused on delivering a new way to experience and discover digital art.</p>
        <Link to="/featured"><button>Explore</button></Link>
        </div>
        <div className="header-content">
        <img src={Header_IMG} />
        </div>
    </div>
}

export default Header