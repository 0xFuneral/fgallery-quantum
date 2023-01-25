import React from "react";
import "../styles/gallery.css";
import Featured from "../components/featured";
import Footer from "../components/footer";
import exit from "../images/skullys-logo.png";
import Support from "../components/Support.js";
import Edit from "../components/featured-edit-wide.js";
import Web3 from "../components/web3.js";
import Loading from "../images/gallery-bg-img.png";


import { Link } from "react-router-dom";

import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "gothprom/Build/Tombheads_Gallery.loader.js",
  dataUrl: "gothprom/Build/Tombheads_Gallery.data.unityweb",
  frameworkUrl: "gothprom/Build/Tombheads_Gallery.framework.js.unityweb",
  codeUrl: "gothprom/Build/Tombheads_Gallery.wasm.unityweb",
});


const FeaturedGallery = () => {
    return <div className="gallery-page">
        <button><Link to="/">Exit</Link></button>
        <Unity unityContext={unityContext} 
        style={{
            height: "95vh",
            width: "100%",
            border: "none",
            background: "black",
          }}/>
      
        <Edit />
        <Footer />
    </div>
}

export default FeaturedGallery;


