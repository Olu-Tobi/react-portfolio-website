import React from 'react'
import "./Header.css"
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div class="container header__container">
        <h4>Hi </h4>
        <h1>I'm Olutobi</h1>
        <h5 class="text-light">
          Fullstack Web Developer
        </h5>
        <CTA/>
        <HeaderSocials/>

        <div class="me">
          <img src={ME} alt="me"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header