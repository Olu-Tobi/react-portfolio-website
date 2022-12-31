import React from 'react'
import "./Footer.css"
import {FaFacebookF, FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="" id='footer' className='footer__logo'>OLUTOBI</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div class="footer__socials">
      <a href="https://www.linkedin.com/in/olu-tobi/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Olu-Tobi" target="_blank"><FaGithub/></a>
      </div>

      <div class="footer__copyright">
        <small>&copy; OLUTOBI. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer