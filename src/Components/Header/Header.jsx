import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Logo from '../../assets/images/title.svg';

import papoIcon from '../../assets/images/Vector.svg';
import { Link } from 'react-router-dom';
import Marquee from '../../Components/Home/Marquee';

export default function Header({ isHeaderFixed }) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const headerOffset = 60;

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const toggleNavbar = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const handleMassAdoptionClick = (e) => {
    e.preventDefault();
    scrollToSection('massAdoption');
  };

  const handlePotentialClick = (e) => {
    e.preventDefault();
    scrollToSection('potential');
  };

  const handleFirstMoversClick = (e) => {
    e.preventDefault();
    scrollToSection('firstMovers');
  };


  return (
    <div className={`headerMain ${isHeaderFixed ? 'headerFixed' : 'headerNotFixed'} ${!isNavCollapsed ? 'expanded' : ''}`}>
      <nav className={`navbar navbar-expand-lg p-0 ${!isNavCollapsed ? 'nav-expanded' : ''}`}>
        <div className="container-fluid manageSection">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="Papo Coin Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarSupportedContent">
            <div className='marqueeSection2'>
              <Marquee speed={1} />
            </div>
            <ul className="navbar-nav navUl ms-auto mb-2 mb-lg-0">
              <button
                className="navbar-toggler navbarToggler2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded={!isNavCollapsed}
                aria-label="Toggle navigation"
                onClick={toggleNavbar}
              >
                <span className="navbar-toggler-icon navbar-toggler-icon2"></span>
              </button>
              <li className="nav-item navItem2">
                <Link className="nav-link navLink" to="#" onClick={handleMassAdoptionClick}>
                  <Button>MASS ADOPTION</Button>
                </Link>
              </li>
              <li className="nav-item navItem2">
                <Link className="nav-link navLink" to="#" onClick={handlePotentialClick}>
                  <Button>THE POTENTIAL</Button>
                </Link>
              </li>
              <li className="nav-item navItem2">
                <Link className="nav-link navLink" to="#" onClick={handleFirstMoversClick}>
                  <Button>FIRST MOVERS</Button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navLink" to="https://t.me/papo_official_bot">
                  <Button className='airDropBtn' variant='contained'><img src={papoIcon} alt="" />  <span className='btnSpan'>AIRDROP</span></Button>
                </Link>
              </li>
              <li className="nav-item d-lg-none d-block">
                <Link className="nav-link navLink" to="https://t.me/papo_official_bot">
                  <Button className='earnPoinBtn' variant='contained'><img src={Logo} alt="" /> <span className='btnSpan'>EARN POINTS</span></Button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navLink" to="https://t.me/papo_official_bot">
                  <Button className='joinSeeBtn' variant='contained'><img src={Logo} alt="" /><span className='btnSpan'>JOIN SEED SALE</span></Button>
                </Link>
              </li>
              <li className="nav-item d-lg-block d-none">
                <Link className="nav-link navLink" to="https://t.me/papo_official_bot">
                  <Button className='earnPoinBtn' variant='contained'><img src={Logo} alt="" /> <span className='btnSpan'>EARN POINTS</span></Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
