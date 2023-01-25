import './App.css';
import Nav from "./components/nav";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/home.js";
import Artists from "./pages/artists.js";
import NA from "./pages/NA";
import About from "./pages/about.js";
import FeaturedGallery from "./galleries/featured-gallery.js";
import Support from './components/Support';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  midnightTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';

import { publicProvider } from 'wagmi/providers/public';

// fantom chain
const fantomChain = {
  id      : 250,
  name    : 'Fantom',
  network : 'fantom',

  nativeCurrency : {
    name     : 'Fantom',
    symbol   : 'FTM',
    decimals : 18,
  },
  rpcUrls : {
    default : 'https://rpc.ankr.com/fantom/',
  },
  blockExplorers : {
    default : {
      url  : 'https://ftmscan.com/',
      name : 'FTMScan',
    },
  },
  testnet : false,
}

//create provider
const { chains, provider } = configureChains(
  [
    fantomChain
  ],
  [
    publicProvider(),
  ]
);

//connectors
const { connectors } = getDefaultWallets({
  chains,
  appName: 'sacrifice'
});

//create client
const wagmiClient = createClient({
  provider,
  connectors,
  autoConnect: true,
});

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={midnightTheme({
          accentColor: "black",
          accentColorForeground: "white",
          borderRadius: "small",
        })}
        modalSize="wide"
      >
        <Router>
          <Nav />
          <Routes>
            <Route exact path="/" element ={<Home/>} />
            <Route exact path="/artists" element ={<Artists/>} />
            <Route exact path="/about" element ={<About/>} />
            <Route exact path="/featured" element ={<FeaturedGallery/>} />
            <Route exact path="*" element ={<NA/>} />
          </Routes>
        </Router>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
