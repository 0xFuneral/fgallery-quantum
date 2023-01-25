import React from 'react'
import '../styles/featured-edit-wide.css'
import { Link } from "react-router-dom";

import snapshot from "../images/snapshot.png";
import gitbook from "../images/gitbook.png";
import edition from "../images/editions/repeater.jpg";


function FeaturedWide() {
    return <div className="edit-cards">
        <div className = "card">

        <div className = 'card-art'>
        <img src={edition} alt="discord"/>
        </div>

        <div className='card-body'>
        <div className='card-title'>
        <h1>Featured Artist</h1>
        <h2>Repeater</h2>
        <h3>Ephemeral #2 - Bloom</h3>
        <p>'You seek the answers to the queries to which you do not know. Your search is expansive and yet you are oftentimes left pondering. You must cease this eternal hunt, REPEATR. All that you seek is barely an inch away. Find yourself and you will end your search.'</p>
        
        <h1>Acrylic spray paint on canvas. 1.5m x 1.5m</h1>
        <a href="https://paintswap.finance/marketplace/fantom/assets/0x01491b9a0cfd49070bbcd9d7b6345bba0e8a31a0/3"><button className='explore-btn'>View Details</button></a>
        </div>
    
        </div>
        </div>
       
    </div>
}

export default FeaturedWide