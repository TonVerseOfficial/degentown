import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Logo from '../../assets/images/title.svg';
import papoIcon from '../../assets/images/Vector.svg';
import { Link } from 'react-router-dom';
import Marquee from '../../Components/Home/Marquee';

import approvedIcon from '../../assets/images/approvedIcon.svg';
import swordIcon from '../../assets/images/swordIcon.svg';
import playIcon from '../../assets/images/playIcon.svg';

export default function Header({ isHeaderFixed }) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const headerOffset = 60;



  const buttonLink = 'https://t.me/degentown_bot';
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
          <a className="navbar-brand" onClick={() => 
            {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }
          }>
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
                <Link className="nav-link navLink" to={buttonLink}>
                  <Button className='airDropBtn' variant='contained'
                  style={{
                    border: '2px solid #FFB000',
                    textShadow: '  -4px 0px 0px #FFCB00,4px 0px 0px #FFCB00,0px -4px 0px #FFCB00,0px 4px 0px #FFCB00,-4px 4px 0px #FFCB00, 4px 4px 0px #FFCB00, 4px -4px 0px #FFCB00, -4px -4px 0px #FFCB00,0px 6px 0px #000000 ',
                    
                  }}
                  ><img src={approvedIcon} alt="" />  <span className='btnSpan'>AIRDROP</span></Button>
                </Link>
              </li>
              <li className="nav-item d-lg-none d-block">
                <Link className="nav-link navLink" to={buttonLink}>
                  <Button className='earnPoinBtn' variant='contained'><img src={swordIcon} alt="" /> <span className='btnSpan'>EARN POINTS</span></Button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navLink" to={buttonLink}>
                  <Button className='airDropBtn' variant='contained'
                  style={{
                    backgroundColor: '#ACD5F4 !important',
                    boxShadow: 'none' ,
                    border: 'none',
                    textShadow:'none'
                   
                  }}
                  ><img src={playIcon} alt="" /><span className='btnSpan'>PLAY</span></Button>
                </Link>
              </li>
              <li className="nav-item d-lg-block d-none">
                <Link className="nav-link navLink" to={buttonLink}>
                  <Button className='earnPoinBtn' variant='contained'><img src={swordIcon} alt="" /> <span className='btnSpan'>EARN POINTS</span></Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
