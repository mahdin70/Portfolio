import React from "react";
import {
  AiFillHtml5,
  AiOutlineCodeSandbox,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import {
  BiImage,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
  BiPieChart,
} from "react-icons/bi";
import {
  BsCodeSquare,
  BsFillBootstrapFill,
  BsMicrosoftTeams,
} from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { FaLanguage, FaPhp } from "react-icons/fa";
import {
  MdLibraryAddCheck,
  MdOutlineSecurity,
  MdOutlineSplitscreen,
} from "react-icons/md";
import { SiSolidity, SiTensorflow } from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";
import "./Skill.css";

const Skill = () => {
  return (
    <section id="skills">
      <h2>Skills I Have</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className="experience__details-icon" />
              <div>
                {" "}
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiLogoJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <DiCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiLogoReact className="experience__details-icon" />
              <div>
                {" "}
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiLogoTailwindCss className="experience__details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandNextjs className="experience__details-icon" />
              <div>
                <h4>NEXT.js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaPhp className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiLogoNodejs className="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCodeSquare className="experience__details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiLogoJava className="experience__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCodeSquare className="experience__details-icon" />
              <div>
                <h4>C# .NET</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiSolidity className="experience__details-icon" />
              <div>
                <h4>Solidity</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__ml">
          <h3>Machine Learning</h3>
          <div className="experience__content">
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <div>
                <h4>Pandas, Numpy</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <div>
                <h4>Scikit-Learn, SVM, OpenCV</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BiLogoPython className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiImage className="experience__details-icon" />
              <div>
                {" "}
                <h4>Image Processing</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTensorflow className="experience__details-icon" />
              <div>
                <h4>TensorFlow</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <FaLanguage className="experience__details-icon" />
              <div>
                {" "}
                <h4>NLP</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__others">
          <h3>Other Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineFundProjectionScreen className="experience__details-icon" />
              <div>
                <h4>Project Management</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiPieChart className="experience__details-icon" />
              <div>
                <h4>Business Analysis</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <MdOutlineSplitscreen className="experience__details-icon" />
              <div>
                <h4>UI/UX Design</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <MdOutlineSecurity className="experience__details-icon" />
              <div>
                <h4>Cyber Security</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineCodeSandbox className="experience__details-icon" />
              <div>
                <h4>Blockchain</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsMicrosoftTeams className="experience__details-icon" />
              <div>
                <h4>Cross Team Management</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
