import React from "react";
import '../styles/galleries.css';
import Support from "../components/Support.js";
import Web3 from "../components/web3";
import Footer from "../components/footer.js";

import Funeral from "../artists/funeral.js";
import Elle from "../artists/elle.js";
import Czepta from "../artists/czepta.js";
import Limit from "../artists/limit.js";
import Sellek from "../artists/sellek.js";
import Cosmic from "../artists/cosmic.js";
import Teens from "../artists/teens.js";

import network from "../images/network.png";

function Artists() {
return <div>
        <div className="page">

        <div className="artists">

            <Cosmic />
            <Czepta />
            <Elle />
            <Funeral />
            <Limit />
            <Sellek />
            <Teens />
  
        </div>
        </div>
        <Support />
        <Web3 />
        <Footer />
    </div>
}

export default Artists;