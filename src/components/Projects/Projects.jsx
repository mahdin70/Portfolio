import React from 'react'
import { GrAchievement } from "react-icons/gr";
import { FaProjectDiagram } from 'react-icons/fa';
import './Projects.css'

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="experiences__container">
        <div className="experiences__card">
          <FaProjectDiagram className="experiences__icon" />
          <div className="experiences__text">
            <h3>CampusWorks</h3>
            <p>NodeJS, Express, React, Tailwind, MongoDB</p>
            <a
              href="https://github.com/mahdin70/CampusWorks"
              target="_blank"
              rel="noreferrer"
            >
              Github Link
            </a>
            <div className="experiences__ul">
              <ul>
                <li>
                  1. CampusWorks is a comprehensive platform for Current
                  Students, Alumni, and Faculty Members of IUT to manage and
                  share Freelance Works, Internships, and related resources
                  effectively within the IUTian community.
                </li>
                <li>
                  2. Features include posting freelance jobs, internship
                  opportunities, negotiating payment of a job, and communication
                  between job posters and freelancers through a built-in
                  messaging feature.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experiences__card">
          <FaProjectDiagram className="experiences__icon" />
          <div className="experiences__text">
            <h3>EcoConnect</h3>
            <p>NodeJS, Express, React, Tailwind, MongoDB</p>
            <a
              href="https://github.com/mahdin70/EcoConnect"
              target="_blank"
              rel="noreferrer"
            >
              Github Link
            </a>
            <div className="experiences__ul">
              <ul>
                <li>
                  1. EcoConnect is a Sustainable Living Social Network designed
                  for eco-conscious individuals and communities.
                </li>
                <li>
                  2. Features include goal-specific communities to solve
                  environmental problems, Eco Events for arranging eco-friendly
                  events, and Location-based filtering to search events
                  effectively and concisely.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experiences__card">
          <FaProjectDiagram className="experiences__icon" />
          <div className="experiences__text">
            <h3>VoyageVerse</h3>
            <p>NodeJS, Express, React, Tailwind, MongoDB</p>
            <a
              href="https://github.com/mahdin70/VoyageVerse"
              target="_blank"
              rel="noreferrer"
            >
              Github Link
            </a>
            <div className="experiences__ul">
              <ul>
                <li>
                  1. VoyageVerse is a travel blog platform that empowers users
                  to share captivating travel stories.
                </li>
                <li>
                  2. Features include uploading and browsing travel blogs with
                  images and videos and commenting on other user's blogs.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experiences__card">
          <FaProjectDiagram className="experiences__icon" />
          <div className="experiences__text">
            <h3>Med.io</h3>
            <p>PHP, HTML, CSS, MySQL</p>
            <a
              href="https://github.com/mahdin70/Med.io"
              target="_blank"
              rel="noreferrer"
            >
              Github Link
            </a>
            <div className="experiences__ul">
              <ul>
                <li>
                  1. Med.io is a healthcare management application for patients,
                  doctors, and admins.
                </li>
                <li>
                  2. Features include appointment scheduling, test and report
                  delivery management, and healthcare admin tools
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experiences__card">
          <FaProjectDiagram className="experiences__icon" />
          <div className="experiences__text">
            <h3>Mars Rock Classification Application</h3>
            <p>Python, Streamlit, SVM, Scikit-Learn, OpenCV</p>
            <a
              href="https://github.com/mahdin70/Mars-Rock-Classification-using-SVM"
              target="_blank"
              rel="noreferrer"
            >
              Github Link
            </a>
            <div className="experiences__ul">
              <ul>
                <li>
                  1. This was created to classify rock images from Mars into
                  categories such as Basalt, Coal, Granite, Limestone, Marble,
                  Quartzite, and Sandstones.
                </li>
                <li>
                  2. This app was directly used in the European Rover Challenge
                  - 2023 in the science exploration task to classify martian
                  terrain
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experiences__card">
          <FaProjectDiagram className="experiences__icon" />
          <div className="experiences__text">
            <h3>Movie-Recommendation-App-Based-On-TMDB-Data</h3>
            <p>Python, Streamlit, Scikit Learn, NLTK</p>
            <a
              href="https://github.com/mahdin70/Movie-Recommendation-App-Based-On-TMDB-Data"
              target="_blank"
              rel="noreferrer"
            >
              Github Link
            </a>
            <div className="experiences__ul">
              <ul>
                <li>
                  1.This application recommends multiple movies that have
                  similarities in themes and stories with the user-preferred
                  movie.
                </li>
                <li>
                  2. It is built using the TMDB dataset from Kaggle and features
                  a web interface created with Streamlit.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experiences__card">
          <FaProjectDiagram className="experiences__icon" />
          <div className="experiences__text">
            <h3>DefTax</h3>
            <a
              href="https://drive.google.com/file/d/1jK0f16LT-D5PsE2Vo0_MrTdz317ZrEsV/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Whitepaper Drive Link
            </a>
            <div className="experiences__ul">
              <ul>
                <li>
                  1. A hybrid Blockchain-based Government-to-Corporation
                  integrated transaction tracking e-governance system with
                  fine-grained access control that facilitates secure and
                  accurate tax collection
                </li>
                <li>
                  2. This whitepaper was presented at the Grand Finale of
                  Blockchain Olympiad Bangladesh - 2023
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects