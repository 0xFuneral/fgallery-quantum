import React from 'react'
import '../styles/artist-card.css'
import { Link } from "react-router-dom";
import pfp from '../images/artists/elle.jpg';

import discord_img from "../images/discord.png";
import twitter_img from "../images/twitter.png";
import nftkey from "../images/nftkey.png";

function Elle() {
    return <div className="artist-card">

        <img src={pfp}/>
        <div className="artist-info">
        <h1>Elle</h1>
        <p>Maker of Riot Goools, Magical Goools, Power Goools, Gooolmon, and Goools on XTZ.</p>
        </div>
        <div className="artist-links">
            <a href="https://twitter.com/riotgoools" target="_blank" rel="noopener noreferrer"><img src={twitter_img} alt=""/></a>
            <a href="https://nftkey.app/artists/elle/" target="_blank" rel="noopener noreferrer"><img src={nftkey} alt=""/></a>
        </div>
    </div>
}

export default Elle