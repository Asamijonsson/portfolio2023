import { Routes, Route } from "react-router-dom";
import { React } from "react";
import style from "./App.module.css";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import Home from "./Pages/Home";
import Aboutme from "./Pages/Aboutme";
import ItemDetail from "./components/Itemdetail.jsx";
import Ffxiv from "./Pages/Ffxiv.jsx"
import MarketBoard from "./Pages/MarketBoard.jsx";
import Pokemon from "./Pages/pokemon.jsx"
function App() {
 

  return (
    <div id="app">
      <a href="#main-content" className={style.skipLink} id="skipLink">
        Skip to main content
      </a>
      <div className={style.MainApp}>
        <MainHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutme" element={<Aboutme />} />
          <Route path="item/:itemId" element={<ItemDetail />} />
          <Route path="ffxiv" element={<Ffxiv />} />
          <Route path="marketboard" element={<MarketBoard/>}/>
          <Route path="pokemon" element={<Pokemon/>}/>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
