<div style="text-align: center">

<canvas id="unity-canvas"style="width: 100%; height: 95vh; background: #231F20"></canvas>
<script src="../Build/STombheads_Gallerys.loader.js"></script>
<script>
  createUnityInstance(document.querySelector("#unity-canvas"), {
    dataUrl: "../Build/Tombheads_Gallery.data.unityweb",
    frameworkUrl: "../Tombheads_Gallery.framework.js.unityweb",
    codeUrl: "../Build/Tombheads_Gallery.wasm.unityweb",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "Beta Gallery",
    productVersion: "1.0",
    // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
    // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
  });
</script>
</div>

