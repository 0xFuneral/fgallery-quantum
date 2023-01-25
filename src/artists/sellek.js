import React from 'react'
import '../styles/artist-card.css'
import { Link } from "react-router-dom";
import pfp from '../images/artists/sellek.jpg';

import discord_img from "../images/discord.png";
import twitter_img from "../images/twitter.png";
import nftkey from "../images/nftkey.png";

function Sellek() {
    return <div className="artist-card">

        <img src={pfp}/>
        <div className="artist-info">
        <h1>SELLEK</h1>
        <p>Creator of Fantom Wheelz, graffiti artist, graphic designer, and illustrator</p>
        </div>
        <div className="artist-links">
            <a href="https://twitter.com/SellekArt" target="_blank" rel="noopener noreferrer"><img src={twitter_img} alt=""/></a>
            <a href="nftkey.app/artists/sellek/" target="_blank" rel="noopener noreferrer"><img src={nftkey} alt=""/></a>
        </div>
    </div>
}

export default Sellek