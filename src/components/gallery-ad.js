import '../styles/gallery-ad.css';
import Logo from "../images/gallery.png";
import React from 'react';
import { Link } from "react-router-dom";


function GalleryAd() {
return <div className="ad-section">
    <div>
    <div>
        <div>
        <a href="https://fantomgallery.com" target="_blank" rel="noopener noreferrer">
            <div className="ad-card">
            <img src={Logo} alt=""/>
            <div className="bottom-card">
            <Link to="/featured"><button>Explore</button></Link>
            </div>
            </div>
            </a>
        </div>
    </div>
    <p>Explore the current exhibition</p>
    </div>
</div>
}
export default GalleryAd