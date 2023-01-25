import React from 'react'
import '../styles/featured-edits.css'
import { Link } from "react-router-dom";

import snapshot from "../images/snapshot.png";
import gitbook from "../images/gitbook.png";
import elle from "../images/artists/elle.jpg";


function Featured() {
    return <div className="edit-cards">
        <div className = "card">
        <div className = 'card-art'>
        <a href="https://discord.gg/KRpT7UFgfB"><img src={elle} alt="discord"/></a>
        </div>
        <div className='card-title'>
        <h1>Title</h1>
        <p>Artist Name</p>
        </div>
        <div className='card-body'>
        <p>Edition of 50</p>
        </div>
        <button>Mint</button>
        </div>
        <div className = "card">
        <div className = 'card-art'>
        <a href="https://discord.gg/KRpT7UFgfB"><img src={elle} alt="discord"/></a>
        </div>
        <div className='card-title'>
        <h1>Title</h1>
        <p>Artist Name</p>
        </div>
        <div className='card-body'>
        <p>Edition of 50</p>
        </div>
        <button>Mint</button>
        </div>
        <div className = "card">
        <div className = 'card-art'>
        <a href="https://discord.gg/KRpT7UFgfB"><img src={elle} alt="discord"/></a>
        </div>
        <div className='card-title'>
        <h1>Title</h1>
        <p>Artist Name</p>
        </div>
        <div className='card-body'>
        <p>Edition of 50</p>
        </div>
        <button>Mint</button>
        </div>

    </div>
}

export default Featured