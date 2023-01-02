import React from "react";
import "./contact.css";
import phone from "../../img/phone.png";
import home1 from "../../img/home1.png";
import message from "../../img/message.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();
    alert(`message sent successfuly ${name}`);
    emailjs
      .sendForm(
        "service_w7f9dkb",
        "template_9lr7cyj",
        form.current,
        "1eCKz_bbddZTPZCgT"
      )
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
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title"> Let's Discuss your Project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +2347035120768
            </div>
            <div className="c-info-item">
              <img src={message} alt="" className="c-icon" />
              vivianuc@yahoo.com
            </div>

            <div className="c-info-item">
              <img src={home1} alt="" className="c-icon" /> 300 Ziks Avenue,
              Awka Anambra State
            </div>
          </div>
        </div>

        <div className="c-right">
          <p className="c-desc">
            <b>How can I be of Help to you?</b>Get in touch. Am always avialible
            to building new projects and ready to help you. looking forward to
            Get in touch with you. leave a message below.
          </p>
          <div className="form">
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <button> submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
