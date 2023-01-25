import React from 'react'
import '../styles/web3.css';
import { Link } from "react-router-dom";

function web3() {
    return <div className="web3-container">
    <div className="web3-content">
    <div className="web3-card">
    <div className="card-info">
    <h1>What is Web3?</h1>
    <p>Web3 is a new way of using the internet where creators and collectors own their data. People connect to applications with a wallet via browser extension instead of logging in with an email.</p>
    </div>
    <div className="card-link">
    <a href="https://docs.fantom.foundation/tutorials/set-up-metamask"><p>Set up a wallet on Fantom</p></a>
    </div>
    </div>

    <div className="web3-card">
    <div className="card-info">
    <h1>What is an NFT?</h1>
    <p>NFT stands for Non-Fungible Token. These tokens represent proof of ownership, providing a new way to share and trade art; even if it exists in a purely digital format.</p>
    </div>
    <div className="card-link">
    <a href="https://ethereum.org/en/nft/"><p>Learn more about NFTs</p></a>
    </div>
    </div>


<div className="web3-card">
    <div className="card-info">
<h1>What is Minting?</h1>
<p>Minting your art on the blockchain provides a date and time of the transaction and will provide you with a means of tracking ownership over time.</p>
</div>
<div className="card-link">
<a href="https://paintswap.finance/marketplace/factory"><p>Mint your first NFT</p></a>
</div>
    </div>
    </div>
    </div>
}

export default web3