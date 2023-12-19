import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const handleStateChange = (state) => setIsOpen(state.isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px',
    },
    bmMenu: {
      background: '#003b5999',
      fontSize: '1.15em',
      width: '100%',
    },
    bmBurgerBars: {
      background: '#003b59',
      fontSize: '14px',
      height: '4px',
    },
    bmItemList: {
      color: '#b8b7ad',
      display: 'flex',
    },
    bmItem: {
      display: 'inline-block',
    },
    bmCrossButton: {
      height: '40px',
      width: '40px',
    },
    bmCross: {
      background: '#fffff0',
    },
    bmMenuWrap: {
      width: '100%',
    },
  };

  return (
    <div>
      <div className="navigation-wrapper">
        <nav className="nav-links">
          <div className="logo">
            <h2 className="my-logo">Gold Hospitals</h2>
          </div>
          <div className="links">
            <NavLink
              to="/homepage"
              onClick={() => scrollToSection('homepage')}
              activeClassName="active"
            >
              Ana Sayfa
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => scrollToSection('about')}
              activeClassName="active"
            >
              Refleksoloji
            </NavLink>
            <NavLink
              to="/diseases"
              onClick={() => scrollToSection('diseases')}
              activeClassName="active"
            >
              Hangi Hastalıklarda Etkilidir?
            </NavLink>
            <NavLink
              to="/device"
              onClick={() => scrollToSection('device')}
              activeClassName="active"
            >
              Cihazımız
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => scrollToSection('contact')}
              activeClassName="active"
            >
              İletişim
            </NavLink>
          </div>
        </nav>
        <Menu styles={styles} isOpen={isOpen} onStateChange={handleStateChange}>
          <NavLink
            to="/homepage"
            onClick={() => scrollToSection('homepage')}
            activeClassName="active"
          >
            Ana Sayfa
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => scrollToSection('about')}
            activeClassName="active"
          >
            Refleksoloji
          </NavLink>
          <NavLink
            to="/diseases"
            onClick={() => scrollToSection('diseases')}
            activeClassName="active"
          >
            Hangi Hastalıklarda Etkilidir?
          </NavLink>
          <NavLink
            to="/device"
            onClick={() => scrollToSection('device')}
            activeClassName="active"
          >
            Cihazımız
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => scrollToSection('contact')}
            activeClassName="active"
          >
            İletişim
          </NavLink>
        </Menu>
      </div>
    </div>
  );
};
export default Navigation;
