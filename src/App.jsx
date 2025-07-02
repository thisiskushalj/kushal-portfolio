import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Certificate from './Components/Certifications/certificate'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const App = () => {
useEffect(() => {
  AOS.init({
    duration: 800,     // animation duration in ms
    once: false,        // whether animation should happen only once
    easing: 'ease-in-out',
    mirror: false,
    offset: 400,       // how far from viewport before triggering
  });
}, []);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Certificate/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
