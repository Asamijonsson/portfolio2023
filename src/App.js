import { Routes, Route } from "react-router-dom";
import { React } from "react";
import style from "./App.module.css";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import Home from "./Pages/Home";
import Aboutme from "./Pages/Aboutme";
import Contact from "./Pages/Contact";
import Works from "./Pages/Works";
import Subscribe from "./Pages/Subscribe.jsx"

function App() {
  const receipe = [
    {
      id: 0,
      category: "Party",
      subcategory: [
        {
          categoryName: "appetizers",
          foodName: [{ name: "Kimchi" }, { name: "Harumaki" }],
        },
        {
          categoryName: "main",
          foodName: [
            {
              name: "Okonomiyaki",
            },
            { name: "Tonkatsu" },
          ],
        },
        {
          categoryName: "dessert",
          foodName: [{ name: "Goma dango" }, { name: "Matcha ice cream" }],
        },
      ],
    },

    {
      id: 1,
      category: "Casual dinner",
      foodName: [
        {
          name: "Tempura",
        },
        { name: "Yakitori" },
        { name: "Gyu Tataki" },
      ],
    },
    {
      id: 3,
      category: "Sushi",
      foodName: [
        {
          name: "Maki Sushi",
        },
        { name: "Nigiri" },
      ],
    },
    {
      id: 4,
      category: "Ramen",
      foodName: [
        {
          name: "Tonkotsu Ramen",
        },
        { name: "Miso Ramen" },
      ],
    },
  ];

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
          <Route path="contact" element={<Contact />} />
          <Route path="works" element={<Works menu={receipe} />} />
          <Route path="subscribe" element={<Subscribe/>}/>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
