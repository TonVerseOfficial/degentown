import React from "react";
import { Link } from "react-router-dom";
import link1 from "../../assets/images/link1.svg";
import link2 from "../../assets/images/link2.svg";
import link3 from "../../assets/images/link3.svg";
import link4 from "../../assets/images/link4.svg";
import link5 from "../../assets/images/link5.svg";

import xLogo from "../../assets/images/xlogo.webp";
import ytLogo from "../../assets/images/ytlogo.webp";
import tgLogo from "../../assets/images/tglogo.webp";
import iglogo from "../../assets/images/iglogo.webp";

export default function Footer() {
  return (
    <div className="footerMain manageSection">
      {/* <div className='termSec'>
        <Link to="#">Privacy Policy</Link>
        <Link to="#">Terms and Conditions</Link>
      </div> */}
      <div className="socialSec">
        <Link to="https://x.com/degentown_ton" className="socialLink">
          <img src={xLogo} alt="Link 2" />
        </Link>
        <Link to="https://www.instagram.com/degentown_ton/" className="socialLink">
          <img src={iglogo} alt="Link 3" />
          {/* <i className="bi bi-instagram instI"></i> */}
        </Link>
        <Link to="https://t.me/degentown_ton" className="socialLink">
          <img src={tgLogo} alt="Link 5" />
        </Link>
      </div>
      <div className="supportSec">
        <p style={{ color: "white", fontFamily: "SuperMario" , fontSize:24}}>DEGEN TOWN </p>
        <Link to="" style={{ textDecoration: "none" }}>
          <p> www.degentown.io </p>
        </Link>
      </div>
    </div>
  );
}
