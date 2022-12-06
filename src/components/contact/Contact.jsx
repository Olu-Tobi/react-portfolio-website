import React from 'react'
import "./Contact.css";
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import ContactData from './ContactData';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div class="container contact__container">
        <div class="contact__options">
          <article class="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <ContactData contact = 'tobidaramola77@gmail.com' text='Email' url = 'mailto:tobidaramola77@gmail.com'/>
          </article>

          <article class="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <ContactData contact = 'Tobi Daramola' text='Messanger' url = 'https://m.me/daramola.tobi.71'/>
          </article>

          <article class="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <ContactData contact = 'Olutobi' text='Whatsapp' url = 'https://api.whatsapp.com/send?phone=+2348106170405'/>
          </article>
        </div>

        {/* form */}

        <form action="">
          <input type="text" name='name' placeholder='Your Full name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact