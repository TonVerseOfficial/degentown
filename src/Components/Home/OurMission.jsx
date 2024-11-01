import React from "react";

import tonBottleRight from '../../assets/images/tonBottleRight.png';
import tonLogoLeft from '../../assets/images/tonLogoLeft.png';


const StyledParagraph = ({ children }) => {
  return (
    <p style={{ color: "white", fontFamily: "arial", fontWeight: 600 }}>
      {children}
    </p>
  );
};

export default function OurMission() {
  return (
    <div style={{ backgroundColor: "#38B8EA" }}>
      <div className="manageWidth " id="massAdoption">
        <div className="mainTitle">
          <h6>OUR MISSION</h6>
          <h5 style={{ color: "white", textShadow: "none" }}>
            CRYPTO MASS ADOPTION
          </h5>
          <StyledParagraph>OUR MISSION IS TO ONBOARD 100</StyledParagraph>
          <StyledParagraph>MILLION NEW USERS TO WEB3. HOW?</StyledParagraph>
          <StyledParagraph>WITH A MIX OF GAMIFICATION AND</StyledParagraph>
          <StyledParagraph>VIRAL MEME ACTION.</StyledParagraph>
        </div>
      </div>
      <div className="secuirtySec">
        <img src={tonLogoLeft} className='tonLogoLeft'></img>
        <img src={tonBottleRight} className="tonBottleRight"></img>
        {/* <img
          src={secuirty1}
          alt=""
          className="secuirtyImg1 d-sm-block d-none"
        />
        <img src={home5} alt="" className="secuirtyImg1 d-sm-none d-block" />
        <img src={secuirty2} alt="" className="secuirtyImg2" /> */}
      </div>
    </div>
  );
}
