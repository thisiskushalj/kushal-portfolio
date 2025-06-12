import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.png'
import linkedin_logo from '../../assets/linkedin.webp'
import github_logo from '../../assets/github.jpg'
import instagram_logo from '../../assets/instagram.webp'
import x_logo from '../../assets/x.avif'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img id='footer-logo' src={footer_logo} alt="" />
          <p>Full Stack Developer in the making — sharpening skills and building real-world projects.</p>
        </div>
        <div className="footer-top-right">
          <div class="social-icons">
            <a href="https://www.linkedin.com/in/kushalj1/" target="_blank" aria-label="LinkedIn">
              <img class='social-icon scale-upl' src={linkedin_logo} alt="LinkedIn" />
            </a>
            <a href="https://github.com/thisiskushalj" target="_blank" aria-label="GitHub">
              <img class='social-icon' src={github_logo} alt="GitHub" />
            </a>
            <a href="https://www.instagram.com/_.kushal_1/" target="_blank" aria-label="Instagram">
              <img class='social-icon scale-upi' src={instagram_logo} alt="Instagram" />
            </a>
            <a href="https://x.com/KushalJ_2004" target="_blank" aria-label="Twitter">
              <img class='social-icon' src={x_logo} alt="Twitter" />
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
  )
}

export default Footer
