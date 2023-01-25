import React from 'react'
import '../styles/Mint.css';
import { Link } from "react-router-dom";
import Flier from "../images/flier.png";

function Mint() {
    return <div className="mint-container">
    <div className="mint-content">
    <div className="mint-card">
    <img className= "flier" src={Flier} />
    </div>

    <div className="mint-card">
    <div className="mint-info">
    <h1>Limited Edition Print</h1>
    <p>Artist Name: </p>
    <p>Title:</p>
    <p>Date:</p>
    </div>
    <div className="edition"><p>1/50</p></div>
    <div className="mint">
    <div className="mint-price">
        <p>5 USDC</p>
    </div>
    <div className="mint-button">
    <button>Mint</button>
    </div>
    </div>
    </div>


    </div>
    </div>
}

export default Mint