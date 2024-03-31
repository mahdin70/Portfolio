import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
       <a href="https://www.linkedin.com/in/mukitmahdin/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
       <a href="https://github.com/mahdin70" target="_blank" rel="noreferrer"><BsGithub/></a>
       <a href="https://www.facebook.com/mahdin.mukit248" target="_blank" rel="noreferrer"><BsFacebook/></a>
       <a href="  https://twitter.com/M200042170" target="_blank" rel="noreferrer"><BsTwitter/></a>     
    </div>
  )
}

export default HeaderSocials