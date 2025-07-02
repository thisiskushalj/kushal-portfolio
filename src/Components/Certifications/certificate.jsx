import React from 'react'
import './certificate.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import Certificate_Data from '../../assets/mycertificate'

const Certificate = () => {
  return (
    <div id='certifications' className='certifications'>
      <div className="title-box">
        <h1>My Certifications</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="certificate-container">
        {Certificate_Data.map((cert,index)=>{
          return <div key={index} className='certificate-format'>
             <img src={cert.s_img} alt="" />
          </div>
        })}
      </div>
    </div>
  )
}

export default Certificate
