import React from 'react';
import './certificate.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Certificate_Data from '../../assets/mycertificate';

const Certificate = () => {
  return (
    <div id='certifications' className='certifications' data-aos="fade-up" data-aos-duration="1000">
      <div className="title-box">
        <h1>My Certifications</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>
      <div className="certificate-container">
        {Certificate_Data.map((cert, index) => (
          <div
            key={index}
            className='certificate-format'
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay={index * 100}
          >
            <img src={cert.s_img} alt={`certificate-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;