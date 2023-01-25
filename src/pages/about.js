import React from "react";
import '../styles/about.css';
import Header from "../components/header";
import Web3 from "../components/web3";
import Support from "../components/Support";
import Footer from "../components/footer";
import Info from "../components/info";
import More from "../components/info-cards";

function About() {
    return <div className="about-page">
        <Info />
        <More />
        <Support />
        <Web3 />
        <Footer />
    </div>
}

export default About;