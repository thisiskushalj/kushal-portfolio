import React from 'react';
import './Footer.css';
import logo_dark from '../../assets/logo.png';         // White logo for dark mode
import logo_light from '../../assets/logo_light.png';   // Black logo for light mode
import linkedin_logo from '../../assets/linkedin.webp';
import github_logo from '../../assets/github.jpg';
import instagram_logo from '../../assets/instagram.webp';
import x_logo from '../../assets/x.avif';
import { useTheme } from '../../Mode/ThemeContext';
const Footer = () => {
  const { darkMode } = useTheme(); // Get current theme
  const logo = darkMode ? logo_dark : logo_light; // Switch based on mode

  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img id='footer-logo' src={logo} alt="logo" />
          <p>Full Stack Developer in the making, sharpening skills and building real-world projects.</p>
        </div>
        <div className="footer-top-right">
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/kushalj1/" target="_blank" aria-label="LinkedIn" rel="noreferrer">
              <img className='social-icon scale-upl' src={linkedin_logo} alt="LinkedIn" />
            </a>
            <a href="https://github.com/thisiskushalj" target="_blank" aria-label="GitHub" rel="noreferrer">
              <img className='social-icon' src={github_logo} alt="GitHub" />
            </a>
            <a href="https://www.instagram.com/_.kushal_1/" target="_blank" aria-label="Instagram" rel="noreferrer">
              <img className='social-icon scale-upi' src={instagram_logo} alt="Instagram" />
            </a>
            <a href="https://x.com/KushalJ_2004" target="_blank" aria-label="Twitter" rel="noreferrer">
              <img className='social-icon' src={x_logo} alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© Kushal. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Code</p>
          <p>Create</p>
          <p>Innovate</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;