import React, { useState } from "react";
import logoImg from "../assets/images/logo.png";
import approvedImg from "../assets/images/airdropbutton.png";
import playButtonImg from "../assets/images/playbuttonImg.png";
import earnImg from "../assets/images/earnbuttonimg.png";
import MenuIcon from '@mui/icons-material/Menu';

const links = [
  { name: "MASS ADOPTION", url: "/" },
  { name: "THE POTENTIAL", url: "/about" },
  { name: "FIRST MOVERS", url: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // URL yönlendirme fonksiyonu
  const handleRedirect = (url) => {
    url = 'https://t.me/degentown_bot'
    window.location.href = url;
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="w-full bg-white block md:hidden">
        <div className="flex flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex">
            <img src={logoImg} alt="logo" className="h-20 -ml-10" />
          </div>

          {/* Sol Menü Butonu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex p-2 focus:outline-none"
          >
            <MenuIcon sx={{ color: "#FFA80C" }} />
          </button>
        </div>

        {/* Butonlar */}
        <div
          className={`flex flex-wrap items-center justify-center gap-5 ${
            isOpen ? "block" : "hidden"
          } md:flex md:flex-row md:space-x-6`}
        >
          {/* Airdrop Butonu */}
          <div
            onClick={() => handleRedirect("https://www.google.com")}
            className="bg-[#97C2FF] border-2 border-[#FFB000] rounded-full flex flex-row items-center justify-center p-1 md:px-4 cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={approvedImg}
              alt="Airdrop"
              className="w-10 h-10 md:w-12 md:h-12 -ml-3"
            />
            <div
              className="text-white font-mario text-xl blocky-shadow px-2 mt-1"
              style={{ "--shadow-color": "#FFCB00" }}
            >
              AIRDROP
            </div>
          </div>

          {/* Play Butonu */}
          <div
            onClick={() => handleRedirect("https://www.example.com")}
            className="bg-[#97C2FF] border-2 border-[#97C2FF] rounded-full flex flex-row items-center justify-center p-1 md:px-4 cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={playButtonImg}
              alt="Play"
              className="w-10 h-10 md:w-12 md:h-12 -ml-3"
            />
            <div
              className="text-white font-mario text-xl blocky-shadow px-5 mt-1"
              style={{ "--shadow-color": "#80B4FF" }}
            >
              PLAY
            </div>
          </div>

          {/* Earn Points Butonu */}
          <div
            onClick={() => handleRedirect("https://www.anotherexample.com")}
            className="bg-white rounded-full flex flex-row items-center justify-center p-1 md:px-4 shadow-inner cursor-pointer transform transition-transform duration-300 hover:scale-105"
            style={{ boxShadow: "0px -3px 0px 0px #0000004D inset" }}
          >
            <img
              src={earnImg}
              alt="Earn Points"
              className="w-10 h-10 md:w-12 md:h-12 -ml-3"
            />
            <div
              className="text-white font-mario text-xl blocky-shadow px-2 mt-1"
              style={{ "--shadow-color": "#FFCB00" }}
            >
              EARN POINTS
            </div>
          </div>
        </div>
      </div>

      {/* Web Header */}
      <div className="w-full hidden md:flex flex-wrap items-center justify-between md:space-x-6 bg-white">
        {/* Logo */}
        <div className="flex-shrink-0 mx-4 md:ml-20">
          <img src={logoImg} alt="logo" className="h-14 md:h-20" />
        </div>

        <div className="flex flex-row">
          {/* Airdrop Butonu */}
          <div
            onClick={() => handleRedirect("https://www.google.com")}
            className="flex-shrink-0 bg-[#97C2FF] border-2 border-[#FFB000] rounded-full flex flex-row items-center justify-center mx-2 mt-2 md:mt-0 p-1 md:px-4 cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={approvedImg}
              alt="Airdrop"
              className="w-10 h-10 md:w-12 md:h-12 -ml-3"
            />
            <div
              className="text-white font-mario text-xl blocky-shadow px-2 mt-1"
              style={{ "--shadow-color": "#FFCB00" }}
            >
              AIRDROP
            </div>
          </div>

          {/* Play Butonu */}
          <div
            onClick={() => handleRedirect("https://www.example.com")}
            className="flex-shrink-0 bg-[#97C2FF] border-2 border-[#97C2FF] rounded-full flex flex-row items-center justify-center mx-2 mt-2 md:mt-0 p-1 md:px-4 cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={playButtonImg}
              alt="Play"
              className="w-10 h-10 md:w-12 md:h-12 -ml-3"
            />
            <div
              className="text-white font-mario text-xl blocky-shadow px-5 mt-1"
              style={{ "--shadow-color": "#80B4FF" }}
            >
              PLAY
            </div>
          </div>

          {/* Earn Points Butonu */}
          <div
            onClick={() => handleRedirect("https://www.anotherexample.com")}
            className="flex-shrink-1 bg-white rounded-full flex flex-row items-center justify-center mx-2 mt-2 md:mt-0 p-1 md:px-4 shadow-inner cursor-pointer transform transition-transform duration-300 hover:scale-105"
            style={{ boxShadow: "0px -3px 0px 0px #0000004D inset" }}
          >
            <img
              src={earnImg}
              alt="Earn Points"
              className="w-10 h-10 md:w-12 md:h-12 -ml-3"
            />
            <div
              className="text-white font-mario text-xl blocky-shadow px-2 mt-1"
              style={{ "--shadow-color": "#FFCB00" }}
            >
              EARN POINTS
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
