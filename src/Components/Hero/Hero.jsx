import React, { useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id='home' className='hero'>
      <img
        src={profile_img}
        alt=""
        className='profile-img'
        data-aos="zoom-in"
      />

      <h1 data-aos="fade-up">
        <span className='gradient-text'>I’m Kushal, </span>
        <span className='type-text'>
          <Typewriter
            words={['a Full Stack Developer', 'a DevOps Enthusiast', 'a UI Designer', 'a JAVA Developer', 'and much more...']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </span>
      </h1>

      <p data-aos="fade-up" data-aos-delay="200">
        Passionate about building full-fledged web apps using React, Node.js, and MongoDB,
        while exploring DevOps to automate and deploy smarter.
      </p>

      <div className="hero-action" data-aos="fade-up" data-aos-delay="400">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href="/Kushal_CV.pdf" target="_blank" rel="noopener noreferrer">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;