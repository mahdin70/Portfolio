import React from 'react';
import { BsBuilding } from 'react-icons/bs';
import { FaSchool, FaUniversity } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  return (
    <section id='education'>
      <h2>My Academic Journey</h2>
      <div className='education__container'>
        <a href='https://www.iutoic-dhaka.edu/' className='education__card'>
          <FaUniversity className='education__icon' />
          <div className='education__text'>
            <h3>B.Sc in Software Engineering</h3>
            <p>Islamic University of Technology (IUT)</p>
            <p>Department Of Computer Science and Engineering</p>
            <p>June 2021 - Present</p>
          </div>
        </a>

        <a href='http://mail.acc.edu.bd/' className='education__card'>
          <BsBuilding className='education__icon' />
          <div className='education__text'>
            <h3>Higher Secondary School Certificate</h3>
            <p>Adamjee Cantonment College</p>
            <p>GPA: 5.00 (92%)</p>
            <p>July 2018 - April 2020</p>
          </div>
        </a>

        <a href='https://shksc.edu.bd/' className='education__card'>
          <FaSchool className='education__icon' />
          <div className='education__text'>
            <h3>Secondary School Certificate</h3>
            <p>Shamsul Haque Khan School And College</p>
            <p>GPA: 5.00 (94.6%)</p>
            <p>January 2016 - February 2020</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Education;
