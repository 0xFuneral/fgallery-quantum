import React from 'react'
import '../styles/artist-card.css'
import { Link } from "react-router-dom";
import pfp from '../images/artists/limit.jpg';

import discord_img from "../images/discord.png";
import twitter_img from "../images/twitter.png";
import nftkey from "../images/nftkey.png";

function Limit() {
    return <div className="artist-card">

        <img src={pfp}/>
        <div className="artist-info">
        <h1>LIMITBRΞAK</h1>
        <p>Artist and Co-Emperor of Southern Empire. Creator of TOFU.</p>
        </div>
        <div className="artist-links">
            <a href="https://twitter.com/limitbreakcstms" target="_blank" rel="noopener noreferrer"><img src={twitter_img} alt=""/></a>
            <a href="https://nftkey.app/collections/bitshadowz/" target="_blank" rel="noopener noreferrer"><img src={nftkey} alt=""/></a>
            <a href="http://discord.gg/southernempire" target="_blank" rel="noopener noreferrer"><img src={discord_img} alt=""/></a>
        </div>
    </div>
}

export default Limit