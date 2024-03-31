import React from 'react'
import {GrAchievement} from "react-icons/gr";
import './Achievements.css'

const Achievements = () => {
  return (
    <section id="achievements">
      <h2>Achievements</h2>
      <div className="experiences__container">
        <div className="experiences__card">
          <GrAchievement className="experiences__icon" />
          <div className="experiences__text">
            <h3>Finalist</h3>
            <p>Blockchain Olympiad Bangladesh</p>
            <div className="experiences__ul">
              <ul>
                <li>
                  1. Worked on the tax evasion problem in Bangladesh which
                  occurs because of the weak and centralized tax collection and
                  Monitoring process of Bangladesh.
                </li>
                <li>
                  2. Proposed our blockchain-based solution- DefTax which
                  decentralizes the whole tax collection procedure and
                  significantly prevents tax Evasion
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="experiences__card">
          <GrAchievement className="experiences__icon" />
          <div className="experiences__text">
            <h3>5th Place</h3>
            <p> Capture the Flag Competition (CodeRush 1.0)</p>
            <div className="experiences__ul">
              <ul>
                <li>
                  1. SolvedComputerForensics, Steganography, Network Packet
                  Analysis, Cryptography, and OSINT (Open Source Intelligence)
                  Problems
                </li>
                <li>2. Served as the team leader of the team.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experiences__card">
          <GrAchievement className="experiences__icon" />
          <div className="experiences__text">
            <h3>Champion</h3>
            <p>Hult Prize at Islamic University of Technology</p>
            <div className="experiences__ul">
              <ul>
                <li>
                  1. Worked on the waste problem of the Global Fashion Industry
                  and overall environmental degradation.
                </li>
                <li>
                  2. Proposed our startup ”Impacto” which combines the supply
                  chain solution and recycling solution into one single
                  application to solve the waste problem of the Fashion Industry
                  while aligning with multiple SDGs of UN
                </li>
                <li>
                  3. Contributed to the technical architecture and system design
                  part of the solution.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experiences__card">
          <GrAchievement className="experiences__icon" />
          <div className="experiences__text">
            <h3> Regional Finalist</h3>
            <p> Hult Prize Mumbai Summit - 2023</p>
            <div className="experiences__ul">
              <ul>
                <li>
                  1. Presented our startup ”Impacto” which solves the waste
                  issue of the fashion Industry in Bangladesh by revolutionizing
                  the collection procedure of raw materials for the Recycling
                  plant and integrating technology for enhancing the customer
                  experience
                </li>
                <li>
                  2. Contributed to the technical part of the startup that
                  includes a mobile app with Augmented Reality and AI
                  integration to reduce the need for extra clothes for trial
                  purposes.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experiences__card">
          <GrAchievement className="experiences__icon" />
          <div className="experiences__text">
            <h3>60% Scholarship Winner</h3>
            <p>ISCEA PTAK Global Supply Chain Case Competition- 2023</p>
            <div className="experiences__ul">
              <ul>
                <li>
                  1. Worked on the energy consumption and power disruption
                  problems in the ready-made garments sector of Bangladesh
                </li>
                <li>
                  2. Proposed Joint Energy Manufacturing Facility for RMG
                  Factories, Integrated Logistics Optimization System and
                  Renewable Energy Microgrid System (REMS) to overcome energy
                  crisis
                </li>
                <li>
                  3. Worked on the technical architecture part of the whole
                  solution
                </li>
              </ul>
            </div>
          </div>
        </div>

        
          </div>
    </section>
  );
}

export default Achievements