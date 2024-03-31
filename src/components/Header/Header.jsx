import React from 'react'
import ME from '../../assets/My-Image.png'
import CTA from './CTA'
import './Header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Mukit Mahdin</h1>
        <h3 className='text-light'>Aspiring Software Engineer</h3>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me"/>
        </div>

        <a href="#Contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header