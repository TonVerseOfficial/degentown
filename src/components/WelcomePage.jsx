import React from "react";
import frogMen from "../assets/images/frogMen.png";
import bigLogo from "../assets/images/bigLogo.png";
import playNowButtonBg from "../assets/images/playButton.png";

const WelcomePage = () => {
  return (
    <div className="bg-[#5AC8FA] min-h-f flex flex-col items-center justify-center relative ">
      {/* FrogMen Image */}
      <img
        src={frogMen}
        alt="frogMen"
        className="absolute left-0 transform -translate-y-1/2 top-1/2 mt-32 md:mt-10  z-0"
        style={{
          width: "17vw",
          maxWidth: "600px",
          height: "auto",
          minWidth: "150px",
        }}
      />

      <div></div>

      {/* Logo */}
      <img
        src={bigLogo}
        alt="Logo"
        className="w-1/2 md:w-1/3 lg:w-1/4  mb-1 md:mb-6 mt-0"
      />

      {/* Title Text Web*/}
      <h1 className="text-white hidden md:block  font-mario text-3xl md:text-4xl lg:text-6xl text-center mb-4 z-10">
        THE FIRST MATCH-3 GAME <br /> ON TON
      </h1>

      {/* Title Text Mobile */}
      <div className="text-white block md:hidden font-mario text-2xl text-center ">
        THE FIRST MATCH-3 GAME <br /> ON TON
      </div>

      {/* Play Now Button */}
      <a href="https://x.com/degentown_ton" target="_blank" rel="noreferrer"
      className="mt-20 md:mt-0">
        <div className="relative mt-4 cursor-pointer transform transition-transform duration-300 hover:scale-110">
          <img
            src={playNowButtonBg}
            alt="Play Now Button Background"
            className="w-72 "
          />

          <div
            className="absolute inset-0 flex items-center  justify-center text-white font-mario text-lg  blocky-shadow px-2 mt-1"
            style={{ "--shadow-color": "#80B4FF" }}
          >
            PLAY NOW
          </div>
        </div>
      </a>
    </div>
  );
};

export default WelcomePage;
