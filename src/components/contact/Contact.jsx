import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import ContactData from "./ContactData";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_YOUR_SERVICE_ID}`,
        `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_YOUR_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong!", error);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <ContactData
              contact="tobidaramola77@gmail.com"
              text="Email"
              url="mailto:tobidaramola77@gmail.com"
            />
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <ContactData
              contact="Tobi Daramola"
              text="Messanger"
              url="https://m.me/daramola.tobi.71"
            />
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <ContactData
              contact="Olutobi"
              text="Whatsapp"
              url="https://api.whatsapp.com/send?phone=+2348106170405"
            />
          </article>
        </div>

        {/* form */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Full name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
