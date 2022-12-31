import React from 'react'
import "./Header.css"
import CTA from './CTA'
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
          
          <img class="meImg" src='https://firebasestorage.googleapis.com/v0/b/shop-c8953.appspot.com/o/WLS_1906d.jpg?alt=media&token=1cde6aa0-e5c0-4702-a5a3-e36a9f41d890' alt="me" />
          
        </div>

        <a href="#footer" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header