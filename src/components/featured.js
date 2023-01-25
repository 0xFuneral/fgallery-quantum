import React from 'react'
import '../styles/featured.css'
import { Link } from "react-router-dom";
import Flier from "../images/flier.png";

function Featured() {
    return <div className="featured-container">
    <div className="featured-content">
    <img className= "flier" src={Flier} />
    </div>
    <div className="featured-content">
    <h1>Featured Gallery</h1>
    <p>We are currently featuring an exhibition celebrating Goth Prom.</p>
    <p>This exhibition features work from Elle, SELLEK, CZEPTA, and Funeral.</p>
    <Link to="/featured"><button>Explore</button></Link>
    </div>
    </div>
}

export default Featured