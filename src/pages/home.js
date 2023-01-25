import React from "react";
import '../styles/home.css';
import Header from "../components/header";
import Featured from "../components/featured";
import Footer from "../components/footer";
import GalleryAd from "../components/gallery-ad";
import Editions from "../components/featured-edit-wide.js";
import Info from "../components/info-cards.js";
import Support from "../components/Support.js";
import Web3 from "../components/web3.js";

function Home() {
    return <div className="home-page">
        <Header />
        <Editions />
        <Support />
        <Info />
        <Web3 />
        <GalleryAd />
        <Footer />
    </div>
}

export default Home;