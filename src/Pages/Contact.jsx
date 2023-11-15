import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Home from "./Home";
import colorstyle from "../Color.module.css";
import style from "./Contact.module.css";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_5e599fq", "service_5e599fq", e.target, "G0DbhqeWzAo195Rk0")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div role="form" id="main-content" aria-label="Contact imformation">
      <form ref={form} onSubmit={sendEmail}>
        <h3 className={colorstyle.primary}>Send message</h3>
        <label className={style.title} for="inp" aria-labelledby="inp">
          Title
        </label>
        <br />
        <input type="hidden" value={<Home />} />
        <input
          className={style.input}
          type="email"
          id="inp"
          aria-required="true"
          aria-roledescription="input"
          required
        />
        <br />
        <textarea
          className={style.textarea}
          id="inp"
          cols="30"
          rows="10"
          aria-required="true"
          aria-roledescription="textarea"
          required
        ></textarea>
        <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
