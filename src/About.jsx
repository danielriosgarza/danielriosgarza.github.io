// About.jsx
import React from "react";
import "./About.css";

// Importing React Icons for the contact strip
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { SiResearchgate, SiGooglescholar } from "react-icons/si";

function About() {
  return (
    <section className="about-container">
      <div className="about-content">
        {/* Image from public folder */}
        <img
          src="/assets/img/meSmall.png" 
          alt="Daniel Garza"
          className="about-image"
        />
        <div className="about-text">
          <h2>Daniel Garza</h2>
          <p>
            I am a scientist working at the{" "}
            <a href="https://prose.jouy.hub.inrae.fr/" target="_blank" rel="noreferrer">
              PROSE/INRAE unit
            </a>
            , affiliated to the{" "}
            <a
              href="https://www.universite-paris-saclay.fr/en"
              target="_blank"
              rel="noreferrer"
            >
              Paris-Saclay University
            </a>
            . My lab is located near Paris in the{" "}
            <a
              href="https://maps.app.goo.gl/pfdtyejYErKDNw4F6"
              target="_blank"
              rel="noreferrer"
            >
              village of Antony
            </a>
            .
          </p>
          
          <p>
            My research focuses on <strong>microbial systems ecology &amp; evolution</strong>. 
            I aim to discover new fundamental principles that govern microbiomes.
          </p>

          <p>
            I’m especially interested in <strong>“wiring microbiomes”</strong> to perform 
            specific functions. This involves:
          </p>
    
          <ol className="circle-list">
            <li>
              <strong>Prototyping microbiomes</strong> &mdash; illustrating key properties 
              that teach us how to control complex microbiomes. To achieve this, I use 
              3D printing, microelectronics, and state-of-the-art experimental setups.
            </li>
            <li>
              <strong>Programming microbiomes</strong> &mdash; building computational and
              theoretical models that help us interpret and generalize limited experimental data.
            </li>
            <li>
              <strong>Animating microbiomes</strong> &mdash; bringing them to life in the lab
              by combining models and reactor operations with statistical and deep learning tools.
            </li>
          </ol>

          <p>
            In the near future, I plan to explore the manipulation of the physical signals 
            produced by microbiomes, such as sound waves, electromagnetic radiation, and electric 
            currents to create innovative ways to interact with and control microbiomes.
          </p>

          {/* Concluding Statement */}
          <p className="contact-prompt">
            <strong>Contact me</strong> if you are interested in collaborating, want to visit our research unit, or discuss other topics.
          </p>

          {/* Contact Icons Strip */}
          <div className="about-icons">
            <a href="https://github.com/danielriosgarza" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub className="contact-icon" />
            </a>
            <a href="mailto:danielriosgarza@gmail.com" aria-label="Email">
              <FaEnvelope className="contact-icon" />
            </a>
            <a href="https://www.researchgate.net/profile/Daniel-Garza-7" target="_blank" rel="noreferrer" aria-label="ResearchGate">
              <SiResearchgate className="contact-icon" />
            </a>
            <a href="https://scholar.google.com/citations?user=LDOgr_oAAAAJ&hl" target="_blank" rel="noreferrer" aria-label="Google Scholar">
              <SiGooglescholar className="contact-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
