import React from "react";
import { FaChalkboardTeacher, FaRobot, FaUserShield, FaComputer } from "react-icons/fa";
import { GiMaterialsScience } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Extra Curricular Activities</h2>
      <div className="experiences__container">
        <div className="experiences__card">
          <MdWork className="experiences__icon" />
          <div className="experiences__text">
            <h3>Assistant General Secretary</h3>
            <p>IUT Computer Society</p>
            <p>September 2023 - Present</p>
            <div className="experiences__ul">
              <ul>
                <li>
                  1. Leading a team of 30 volunteers, coordinating their efforts
                  to ensure efficient execution of administrative and
                  operational tasks, events, and initiatives.
                </li>
                <li>
                  2. Ensuring the smooth functioning of the Society by
                  effectively managing administrative tasks, organizing events,
                  and implementing initiatives in a streamlined manner.
                </li>
                <li>
                  3. Overseeing the planning and execution of events, as well as
                  the implementation of various initiatives aimed at advancing
                  the Society's objectives, all while maintaining operational
                  coherence and effectiveness.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="experiences__card">
          <MdWork className="experiences__icon" />
          <div className="experiences__text">
            <h3>Campus Coordinator</h3>
            <p>Orange Corners Bangladesh</p>
            <p>April 2023 - March 2024</p>
            <div className="experiences__ul">
              <ul>
                <li>
                  1. Providing guidance and support to these entrepreneurs in
                  securing funding and access to necessary facilities for their
                  businesses.
                </li>
                <li>
                  2. Working with various stakeholders, including government
                  bodies and local organizations, to strengthen local
                  entrepreneurial ecosystems.
                </li>
                <li>
                  3. Ensuring effective communication and collaboration among
                  all parties involved in the initiative.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experiences__card">
          <FaChalkboardTeacher className="experiences__icon" />
          <div className="experiences__text">
            <h3>Instructor and Academic Content Developer</h3>
            <p>EduHive</p>
            <p>February 2022 - March 2023</p>
            <div className="experiences__ul">
              <ul>
                <li>
                  1. Preparing high-quality learning materials that are
                  engaging, informative, and aligned with the platform's
                  standards.
                </li>
                <li>
                  2. Teaching and guiding students through online classes,
                  providing timely feedback on their performance, and addressing
                  their queries and concerns.
                </li>
                <li>
                  3. Evaluating student progress through assessments and
                  tracking their progress over time to ensure they are meeting
                  learning objectives.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experiences__card">
          <FaUserShield className="experiences__icon" />
          <div className="experiences__text">
            <h3>Sub Executive - Communication</h3>
            <p>IUT Career And Business Society (IUTCBS)</p>
            <p>November 2022 - Present</p>
            <div className="experiences__ul">
              <ul>
                <li>
                  1. Developing and implementing effective communication
                  strategies to promote the activities and events organized by
                  society.
                </li>
                <li>
                  2. Coordinating with other sub-executives and members to
                  ensure seamless communication and collaboration within the
                  society, as well as with external stakeholders.
                </li>
                <li>
                  3. Work closely with the Executive Committee to ensure
                  alignment of communication efforts with the society's overall
                  goals and objectives.
                </li>
                <li>
                  4. Collaborate with other campus organizations to expand the
                  society's reach and influence within the student community.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experiences__card">
          <FaRobot className="experiences__icon" />
          <div className="experiences__text">
            <h3>Software and Automation Team Member</h3>
            <p>IUT Mars Rover - Team Avijatrik and Project Altair</p>
            <p>May 2022 - Present</p>
            <div className="experiences__ul">
              <ul>
                <li>
                  1. Developing and implementing machine learning algorithms to
                  improve the rover's science exploration capabilities, as well
                  as collaborating with other team members to integrate these
                  algorithms with the rover's existing software and hardware
                  systems.
                </li>
                <li>
                  2. Working with Robot Operating System (ROS) to ensure
                  seamless communication between the rover's various subsystems
                  and components.
                </li>
                <li>
                  3. Collaborating with other team members to troubleshoot and
                  resolve software and automation-related issues.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experiences__card">
          <GiMaterialsScience className="experiences__icon" />
          <div className="experiences__text">
            <h3>Organizing Secretary</h3>
            <p>Neutrino ACC Science Club</p>
            <p>August 2019 - September 2020</p>
            <div className="experiences__ul">
              <ul>
                <li>
                  1. Planning and organizing various science fairs, workshops,
                  and other events to promote science education and engagement
                  among club members and the wider community.
                </li>
                <li>
                  2. Coordinating with other club members and external partners
                  to ensure the successful execution of events, including
                  securing venues, arranging for equipment and supplies, and
                  managing event logistics.
                </li>
                <li>
                  3. Developing and managing budgets for events, ensuring that
                  resources are used efficiently and effectively.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
