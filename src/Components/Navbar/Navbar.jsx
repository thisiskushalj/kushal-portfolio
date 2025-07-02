import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo_light from '../../assets/logo_light.png';
import logo_dark from '../../assets/logo.png';

import menu_open_white from '../../assets/menu_open.svg';
import menu_close_white from '../../assets/menu_close.svg';
import menu_open_black from '../../assets/dark_open.png';
import menu_close_black from '../../assets/dark_close.png';

import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTheme } from '../../theme/ThemeContext';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const { darkMode, setDarkMode } = useTheme();

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

  const logo = darkMode ? logo_dark : logo_light;
  const menuOpenIcon = darkMode ? menu_open_white : menu_open_black;
  const menuCloseIcon = darkMode ? menu_close_white : menu_close_black;

  return (
    <div className='navbar'>
      <img src={logo} alt="logo" className='logo' />
      <img src={menuOpenIcon} onClick={openMenu} alt="open menu" className='nav-mob-open' />

      <ul ref={menuRef} className="nav-menu">
        <img src={menuCloseIcon} onClick={closeMenu} alt="close menu" className="nav-mob-close" />

        {['home', 'about', 'skills', 'projects', 'certifications', 'contact'].map(section => (
          <li key={section}>
            <AnchorLink className='anchor-link' offset={50} href={`#${section}`}>
              <p onClick={() => handleMenuClick(section)}>
                {section === 'about' ? 'About Me' :
                 section === 'skills' ? 'Expertise' :
                 section.charAt(0).toUpperCase() + section.slice(1)}
              </p>
            </AnchorLink>
            {menu === section && <img src={underline} alt='' />}
          </li>
        ))}

        {/* ✅ Mobile toggle inside nav-menu */}
        <div className="nav-connect mobile-toggle" onClick={() => setDarkMode(!darkMode)}>
          <span className='icon-only'>{darkMode ? '☀️' : '🌙'}</span>
        </div>
      </ul>

      {/* ✅ Desktop toggle outside nav-menu */}
      <div className="nav-connect desktop-toggle" onClick={() => setDarkMode(!darkMode)}>
        <span className='icon-only'>{darkMode ? '☀️' : '🌙'}</span>
      </div>
    </div>
  );
};

export default Navbar;