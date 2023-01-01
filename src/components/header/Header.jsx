import React from 'react'
import "./Header.css"
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import me2 from '../../assets/me2.jpg'



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
          
          <img class="meImg" src={me2} alt="me" />
          
        </div>

        <a href="#footer" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header