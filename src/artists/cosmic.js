import React from 'react'
import '../styles/artist-card.css'
import { Link } from "react-router-dom";
import pfp from '../images/artists/cosmic.jpg';

import discord_img from "../images/discord.png";
import twitter_img from "../images/twitter.png";
import nftkey from "../images/nftkey.png";

function Cosmic() {
    return <div className="artist-card">

        <img src={pfp}/>
        <div className="artist-info">
        <h1>Cosmic Friend</h1>
        <p>Welcome to the Cosmic Realm, a little space in the Acidverse.</p>
        </div>
        <div className="artist-links">
            <a href="https://twitter.com/cosmicfriendnft" target="_blank" rel="noopener noreferrer"><img src={twitter_img} alt=""/></a>
            <a href="http://discord.gg/teensonacid" target="_blank" rel="noopener noreferrer"><img src={discord_img} alt=""/></a>
        </div>
    </div>
}

export default Cosmic