import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const apiKey = import.meta.env.VITE_PORTFOLIO_API_KEY;

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", apiKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setToastMsg(res.message);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1500);
    }
    event.target.reset();
  };

  return (
    <div id='contact' className='contact'>
      <div className="title-box" data-aos="fade-up" data-aos-duration="800">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left" data-aos="fade-right" data-aos-duration="1000">
          <h1>Let's Connect</h1>
          <p>
            I’m currently open to exciting opportunities, internships, or collaborations.
            Whether it’s a project idea, a chance to work together, or just a tech chat,
            feel free to reach out anytime!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="email" /> <p>heykushal.dev@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call" /> <p>+91 8792876217</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" /> <p>Bengaluru, India</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right" data-aos="fade-left" data-aos-duration="1000">
          <label>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          <label>Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
          <button type='submit' className="contact-submit">Send Message</button>
        </form>
      </div>

      {showToast && (
        <div className="custom-toast">
          {toastMsg}
        </div>
      )}
    </div>
  );
};

export default Contact;