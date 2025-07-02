import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box" data-aos="fade-up">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections" data-aos="fade-up" data-aos-delay="100">
        <div className="about-left">
          <img src={profile_img} alt="profile" />
        </div>
        <div className="about-right">
          <div className="about-para" data-aos="fade-up" data-aos-delay="200">
            <p>A passionate Full Stack Developer who believes in building with purpose. Someone who finds genuine excitement in solving problems and creating things that others can use. I’m driven by curiosity — the kind that makes me take things apart just to see how they work, and then build them back better.</p>
            <p>I believe learning consistently, working quietly and letting the results speak for themselves. This portfolio isn’t just a showcase of code — it’s a reflection of my journey, the late nights spent learning, and the excitement of turning ideas into real, working web experiences.</p>
          </div>
          <div className="about-skills" data-aos="fade-up" data-aos-delay="300">
            <div className="about-skill"><p>Tech Curious</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>Building</p><hr style={{width:"70%"}} /></div>
            <div className="about-skill"><p>Adaptability</p><hr style={{width:"60%"}} /></div>
            <div className="about-skill"><p>Collaborative</p><hr style={{width:"50%"}} /></div>
          </div>
        </div>
      </div>

      <div className="about-achievements" data-aos="fade-up" data-aos-delay="400">
        <div className="about-achievement">
          <h1>5+</h1>
          <p>YEARS IN CODING</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>CONCEPTS MASTERED</p>
        </div>
      </div>
    </div>
  )
}

export default About