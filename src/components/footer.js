import '../styles/footer.css';
import React from 'react';
import discord_img from "../images/discord.png";
import twitter_img from "../images/twitter.png";
import candle from "../images/candle.png";
import gitbook from "../images/gitbook.png";
import snapshot from "../images/snapshot.png";
import medium from "../images/medium.png";

function Footer() {
return <div className="footer">
<div className="social-links">
    <a href="https://twitter.com/fantomgallery"><img src={twitter_img} alt="twitter"/></a>
    <a href="https://discord.gg/KRpT7UFgfB"><img src={discord_img} alt="discord"/></a>
    <a href="https://medium.com/@fantomgallery"><img src={medium} alt="medium"/></a>
  </div>
</div>
}
export default Footer