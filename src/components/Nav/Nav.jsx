import React, { useState } from 'react';
import { AiFillProject } from 'react-icons/ai';
import { BiSolidBriefcase, BiSolidPhoneCall, BiSolidUser } from 'react-icons/bi';
import { BsFillLightbulbFill } from 'react-icons/bs';
import { GoHomeFill } from 'react-icons/go';
import { MdDesignServices, MdSchool } from 'react-icons/md';
import { RiAwardFill } from 'react-icons/ri';
import './Nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  return (
    <nav>
      <a href="#" onClick={() => handleNavClick('#')} className={activeNav === '#' ? 'active' : ''}>
        <GoHomeFill />
      </a>
      <a
        href="#about"
        onClick={() => handleNavClick('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <BiSolidUser />
      </a>
      <a href="#education" onClick={() => handleNavClick('#education')} className={activeNav === '#education' ? 'active' : ''}>
        <MdSchool />
      </a>
      <a
        href="#experience"
        onClick={() => handleNavClick('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiSolidBriefcase />
      </a>
      <a href="#skills" onClick={() => handleNavClick('#skills')} className={activeNav === '#skills' ? 'active' : ''}>
        <BsFillLightbulbFill />
      </a>
      <a
        href="#achievements"
        onClick={() => handleNavClick('#achievements')}
        className={activeNav === '#achievements' ? 'active' : ''}
      >
        <RiAwardFill />
      </a>
      <a
        href="#projects"
        onClick={() => handleNavClick('#projects')}
        className={activeNav === '#projects' ? 'active' : ''}
      >
        <AiFillProject />
      </a>
      <a
        href="#contact"
        onClick={() => handleNavClick('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiSolidPhoneCall />
      </a>
    </nav>
  );
};

export default Nav;
