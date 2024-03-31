import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { GiDiceTarget } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";
import ME from "../../assets/About-Me.jpg";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Mukit Mahdin" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <PiStudentFill className="about__icon" />
              <h5>Software Engineering Student</h5>
              <small>3rd Year, IUT</small>
            </article>
            <article className="about__card">
              <BsPersonWorkspace className="about__icon" />
              <h5>Working On</h5>
              <small>MERN Stack Applications</small>
            </article>
            <article className="about__card">
              <GiDiceTarget className="about__icon" />
              <h5>Passionate About</h5>
              <small>Web Development, System Design, Project Management</small>
            </article>
            <article className="about__card">
              <GiDiceTarget className="about__icon" />
              <h5>Involved with</h5>
              <small>IUT CS, Project Altair</small>
            </article>
          </div>

          <p class='reveal-text'>
            As a highly motivated software engineering student, I am eager to pursue a career in software and IT project management. With a solid foundation in web and mobile application development and a strong understanding of networking, I am well-positioned to drive success in challenging and dynamic technology projects. I am confident in my ability to collaborate effectively with cross-functional teams, communicate with stakeholders, and manage complex projects from start to finish. I am always seeking new challenges and opportunities to expand my skills and knowledge, and I am eager to contribute my talents to organizations that value innovation and excellence.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
