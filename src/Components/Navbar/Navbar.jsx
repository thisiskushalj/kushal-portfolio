import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-300px";
  };

  const handleMenuClick = (section) => {
    setMenu(section);
    closeMenu();
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo' />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />

        <li>
          <AnchorLink className='anchor-link' href='#home' offset={100}>
            <p onClick={() => handleMenuClick("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt='' />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => handleMenuClick("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt='' />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#skills'>
            <p onClick={() => handleMenuClick("skills")}>Expertise</p>
          </AnchorLink>
          {menu === "skills" && <img src={underline} alt='' />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#projects'>
            <p onClick={() => handleMenuClick("projects")}>Projects</p>
          </AnchorLink>
          {menu === "projects" && <img src={underline} alt='' />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#certifications'>
            <p onClick={() => handleMenuClick("certifications")}>Certifications</p>
          </AnchorLink>
          {menu === "certifications" && <img src={underline} alt='' />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => handleMenuClick("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt='' />}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Get in Touch
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;