import React from 'react'
import './Contact.css'
import {MdConnectWithoutContact} from 'react-icons/md'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact me at : </h2>
      <div className="education__container">
        <div className="education__card">
          <MdConnectWithoutContact className="education__icon" />
          <div className="education__text">
            <p>Mobile : +8801764257445</p>
            <p>Email : mahdin.mukit248@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact