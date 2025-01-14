import React from "react";
import { Link } from "react-router-dom"; // <-- import Link
import "./SideBar.css";

// Icons from react-icons
import {
  FaHome,
  FaList,
  FaTag,
  FaTools,
  FaArchive,
  FaInfoCircle,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";

function SideBar() {
  return (
    <aside className="sidebar">
      {/* Profile / Top Section */}
      <div className="sidebar-profile">
        <img
          src="/assets/img/anomal.svg"
          alt="Profile"
          className="profile-image"
        />
        <p className="profile-description">
          <strong>Daniel Garza:</strong> Research scientist at INRAE, France. 
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="sidebar-nav">
        <ul>
          <li>
            {/* Use Link for Home */}
            <Link to="/" className="nav-link">
              <FaHome className="nav-icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/categories" className="nav-link">
                <FaList className="nav-icon" />
                Categories
            </Link>
          </li>
          <li>
            <Link to="/archives" className="nav-link">
                <FaTag className="nav-icon" />
                Archives
            </Link>
          </li>
          <li>
            <Link to="/funded" className="nav-link">
                <FaTools className="nav-icon" />
                Projects
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              <FaInfoCircle className="nav-icon" />
              About
            </Link>
            
          </li>
        </ul>
      </nav>

      {/* Bottom Social / Contact Icons */}
      <div className="sidebar-bottom">
        <a href="https://github.com/danielriosgarza" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:danielriosgarza@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://scholar.google.com/citations?user=LDOgr_oAAAAJ&hl" target="_blank" rel="noreferrer">
          <SiGooglescholar />
        </a>
        <a href="https://www.researchgate.net/profile/Daniel-Garza-7" target="_blank" rel="noreferrer">
          <SiResearchgate />
        </a>
      </div>
    </aside>
  );
}

export default SideBar;
