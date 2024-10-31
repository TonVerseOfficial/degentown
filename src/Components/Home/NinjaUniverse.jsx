import React from "react";
import ninjaUni from "../../assets/images/ninjaUni.svg";
import ninjaUni2 from "../../assets/images/ninjaUni.png";
import degenUni from "../../assets/images/degenUni.png";
import tonBig from "../../assets/images/tonBig.svg";
import { Link } from "react-router-dom";

export default function NinjaUniverse() {
  return (
    <>
      <div className="leftSide manageSection">
        <div className="mainTitle pt-lg-5 mt-4">
          <h5
            className="text-center"
            style={{
              textShadow: "none",
              color: "#ACD5F4",
            }}
          >
            THE DEGEN TOWN UNIVERSE
          </h5>
          <div className="hr1"></div>
        </div>
        <div className="combinedSec">
          <p>
            Gamification combined with meme characters create a unique
            experience. Build and upgrade your character, earning rewards and
            qualifying for airdrops. Form connections as your character grows,
            and expand your DEGEN TOWN family by interacting with other users.
            Join clans to strengthen your character and gain more points. This
            is gamification at its best, representing the future of Web3.
          </p>
          <img src={degenUni} alt="" className="d-sm-block d-none" />
        </div>
      </div>
      <img src={degenUni} alt="" className="d-sm-none d-block w-100" />
    </>
  );
}
