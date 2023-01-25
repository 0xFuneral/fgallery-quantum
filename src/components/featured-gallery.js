import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/myunityapp.loader.js",
  dataUrl: "../galleries/Build/SkullysBase_0.1.2.data.unityweb",
  frameworkUrl: "../galleries/Build/SkullysBase_0.1.2.framework.js.unityweb",
  codeUrl: "../galleries/Build/SkullysBase_0.1.2.wasm.unityweb",
});

function FeaturedGallery() {
  function handleOnClickFullscreen() {
    unityContext.setFullscreen(true);
  }

  return (
    <div>
      <div className="gallery">
      <button onClick={handleOnClickFullscreen}>Fullscreen</button>
      <Unity unityContext={unityContext} />
      </div>
    </div>
  );
}

export default FeaturedGallery