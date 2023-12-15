import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
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
      background: '#01131c',
      fontSize: '1.15em',
      width: '100%',
    },
    bmBurgerBars: {
      background: '#01131ce6',
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
      height: '30px',
      width: '30px',
    },
    bmCross: {
      background: '#bdc3c7',
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
            <h2 className="my-logo">Gold Hospital</h2>
          </div>
          <div className="links">
            <Link to="/homepage" onClick={() => scrollToSection('homepage')}>
              Ana Sayfa
            </Link>
            <Link to="/about" onClick={() => scrollToSection('about')}>
              Refleksoloji
            </Link>
            <Link to="/contact" onClick={() => scrollToSection('contact')}>
              Bize Ulaşın
            </Link>
          </div>
        </nav>
        <Menu styles={styles} isOpen={isOpen} onStateChange={handleStateChange}>
          <Link to="/homepage" onClick={() => scrollToSection('homepage')}>
            {' '}
            Ana Sayfa
          </Link>
          <Link to="/about" onClick={() => scrollToSection('about')}>
            Refleksoloji
          </Link>
          <Link to="/contact" onClick={() => scrollToSection('contact')}>
            Bize Ulaşın
          </Link>
        </Menu>
      </div>
    </div>
  );
};
export default Navigation;
