import React from 'react'
import '../styles/artist-card.css'
import { Link } from "react-router-dom";
import pfp from '../images/artists/funeral.png';

import discord_img from "../images/discord.png";
import twitter_img from "../images/twitter.png";
import nftkey from "../images/nftkey.png";

function Funeral() {
    return <div className="artist-card">

        <img src={pfp}/>
        <div className="artist-info">
        <h1>Funeral</h1>
        <p>Cult leader. Artist. Building Fantom Gallery</p>
        </div>
        <div className="artist-links">
            <a href="https://twitter.com/yolofinancial" target="_blank" rel="noopener noreferrer"><img src={twitter_img} alt=""/></a>
            <a href="https://nftkey.app/collections/skullys/" target="_blank" rel="noopener noreferrer"><img src={nftkey} alt=""/></a>
            <a href="https://discord.com/eBHpwv9yGW" target="_blank" rel="noopener noreferrer"><img src={discord_img} alt=""/></a>
        </div>
    </div>
}

export default Funeral