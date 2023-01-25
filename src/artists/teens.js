import React from 'react'
import '../styles/artist-card.css'
import { Link } from "react-router-dom";
import pfp from '../images/artists/teens.jpg';

import discord_img from "../images/discord.png";
import twitter_img from "../images/twitter.png";
import nftkey from "../images/nftkey.png";

function Teens() {
    return <div className="artist-card">

        <img src={pfp}/>
        <div className="artist-info">
        <h1>TEENSONACID</h1>
        <p>Josh Thorsen. The Real Thing.</p>
        </div>
        <div className="artist-links">
            <a href="https://twitter.com/TEENSONACID" target="_blank" rel="noopener noreferrer"><img src={twitter_img} alt=""/></a>
            <a href="https://nftkey.app/artists/teensonacid/" target="_blank" rel="noopener noreferrer"><img src={nftkey} alt=""/></a>
            <a href="http://discord.gg/teensonacid" target="_blank" rel="noopener noreferrer"><img src={discord_img} alt=""/></a>
        </div>
    </div>
}

export default Teens