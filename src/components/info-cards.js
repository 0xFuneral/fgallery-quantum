import React from 'react'
import '../styles/info-cards.css'
import { Link } from "react-router-dom";

import snapshot from "../images/snapshot.png";
import gitbook from "../images/gitbook.png";
import discord_img from "../images/discord.png";


function More() {
    return <div className="info-cards">
        <div className = "card">
        <div className='card-title'>
        <h1>Community</h1>
        </div>
        <div className='card-body'>
        <p>Meet our community of talented artists and seasoned collectors. Share your work, ask for advice, or just jump into the conversation.</p>
        <p>Join our Discord.</p>
        </div>
        <div className = 'card-logo'>
        <a href="https://discord.gg/KRpT7UFgfB"><img src={discord_img} alt="discord"/></a>
        </div>
        </div>
        <div className = "card">
        <div className='card-title'>
        <h1>Governance</h1>
        </div>
        <div className='card-body'>
        <p>Fantom Gallery is a decentralized platform where our community votes on the art we feature each week.</p>
        <p>Visit our Snapshot page to participate.</p>
        </div>
        <div className = 'card-logo'>
        <a href="https://snapshot.org/#/fantomgallery.eth" target="_blank" rel="noopener noreferrer"><img src={snapshot} alt="snapshot"/></a>
        </div>
        </div>
        <div className = "card">
        <div className='card-title'>
        <h1>Documents</h1>
        </div>
        <div className='card-body'>
        <p>Gain a deeper understanding of our mission, history, and voting system.</p>
        <p>Visit our Gitbook for more information.</p>
        </div>
        <div className = 'card-logo'>
        <a href="https://fantomgallery.gitbook.io/fantom-gallery/" target="_blank" rel="noopener noreferrer"><img src={gitbook} alt="gitbook"/></a>
        </div>
        </div>
    </div>
}

export default More