import { useState } from "react";
import { motion } from "framer-motion";
import PartyList from "./PartyList";
import Casualdinner from "./Casualdinner";
import Sushi from "./Sushi";
import Ramen from "./Ramen";
import styles from "./Button.module.css";
import style from "./categoryList.module.css";

const CategoryList = ({ menu }) => {
  const [showParty, setShowParty] = useState(false);
  const [showCasualDinner, setshowCasualDinner] = useState(false);
  const [showSushi, setShowSushi] = useState(false);
  const [showRamen, setShowRamen] = useState(false);

  const handleShowPartyClick = () => {
    setShowParty(!showParty);
  };

  const handleShowCasualClick = () => {
    setshowCasualDinner(!showCasualDinner);
  };

  const handleShowSushiClick = () => {
    setShowSushi(!showSushi);
  };

  const handleShowRamenClick = () => {
    setShowRamen(!showRamen);
  };

  const handlePartyAria = () => {
    let n = document.getElementById("btn1").getAttribute("aria-expanded");
    if (n === "true") {
      n = "false";
    } else {
      n = "true";
    }
    document.getElementById("btn1").setAttribute("aria-expanded", n);
  };

  const handleCasualDinnerAria = () => {
    let n = document.getElementById("btn2").getAttribute("aria-expanded");
    if (n === "true") {
      n = "false";
    } else {
      n = "true";
    }
    document.getElementById("btn2").setAttribute("aria-expanded", n);
  };

  const handleSushiAria = () => {
    let n = document.getElementById("btn3").getAttribute("aria-expanded");
    if (n === "true") {
      n = "false";
    } else {
      n = "true";
    }
    document.getElementById("btn3").setAttribute("aria-expanded", n);
  };

  const handleRamenAria = () => {
    let n = document.getElementById("btn4").getAttribute("aria-expanded");
    if (n === "true") {
      n = "false";
    } else {
      n = "true";
    }
    document.getElementById("btn4").setAttribute("aria-expanded", n);
  };

  const party = menu.filter((i) => i.category === "Party")
    .map(({ id, category, subcategory }) => ({ id, category, subcategory }));
  const partyMenu = party[0].subcategory.map(({ categoryName, foodName }) => ({
    categoryName,
    foodName,
  }));

  const casualdinner = menu
    .filter((i) => i.category === "Casual dinner")
    .map(({ id, category, foodName }) => ({ id, category, foodName }));
  const dinnerMenu = casualdinner[0].foodName.map(({ name }) => ({ name }));

  const sushi = menu
    .filter((i) => i.category === "Sushi")
    .map(({ id, category, foodName }) => ({ id, category, foodName }));
  const sushiMenu = sushi[0].foodName.map(({ name }) => ({ name }));

  const ramen = menu
    .filter((i) => i.category === "Ramen")
    .map(({ id, category, foodName }) => ({ id, category, foodName }));
  const ramenMenu = ramen[0].foodName.map(({ name }) => ({ name }));

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <div className={style.background} id="main-content">
      <div className={style.categoryContainer}>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={list}
          className={style.categoryList}
        >
          <motion.li variants={item} className={style.categoryitem}>
            <button
              className={styles.button}
              aria-expanded="false"
              aria-controls="sect1"
              id="btn1"
              type="button"
              onClick={() => {
                handleShowPartyClick();
                handlePartyAria();
              }}
            >
              Party
            </button>
          </motion.li>
          {showParty ? <PartyList partyMenu={partyMenu} /> : null}
          <motion.li variants={item} className={style.categoryitem}>
            <button
              className={styles.button}
              aria-expanded="false"
              aria-controls="sect2"
              id="btn2"
              type="button"
              onClick={() => {
                handleShowCasualClick();
                handleCasualDinnerAria();
              }}
            >
              Casual Dinner
            </button>
          </motion.li>
          {showCasualDinner ? <Casualdinner dinnerMenu={dinnerMenu} /> : null}
          <motion.li variants={item} className={style.categoryitem}>
            <button
              className={styles.button}
              aria-expanded="false"
              aria-controls="sect3"
              id="btn3"
              type="button"
              onClick={() => {
                handleShowSushiClick();
                handleSushiAria();
              }}
            >
              Sushi
            </button>
          </motion.li>
          {showSushi ? <Sushi sushiMenu={sushiMenu} /> : null}
          <motion.li variants={item} className={style.categoryitem}>
            <button
              className={styles.button}
              aria-expanded="false"
              aria-controls="sect4"
              id="btn4"
              type="button"
              onClick={() => {
                handleShowRamenClick();
                handleRamenAria();
              }}
            >
              Ramen
            </button>
          </motion.li>
          {showRamen ? <Ramen ramenMenu={ramenMenu} /> : null}
        </motion.ul>
      </div>
    </div>
  );
};

export default CategoryList;
