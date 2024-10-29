import React from "react";

import tonBottle from "../assets/images/tonBottle.png";
import tonLogo from "../assets/images/tonLogo.png";

const OurMission = () => {
  return (
    <div className="bg-[#5AC8FA] min-h-screen flex items-center justify-center ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-center w-full">
        {/* Sol taraf: tonLogo simgesi */}
        <div className="flex justify-start lg:justify-self-start ">
          <img
            src={tonLogo}
            alt="tonLogo"
            className="w-full max-w-md"
          />
        </div>

        {/* Orta taraf: Başlık ve açıklama */}
        <div className="text-center flex flex-col items-center bg-red-500">
          <div className="font-mario text-4xl text-[#FFD924]">OUR MISSION</div>
          <div className="font-mario text-3xl md:text-4xl text-white mb-4">CRYPTO MASS ADOPTION</div>
          <p className="text-lg md:text-xl text-white leading-relaxed tracking-wide">
            OUR MISSION IS TO ONBOARD 100
            <br />
            MILLION NEW USERS TO WEB3. HOW?
            <br />
            WITH A MIX OF GAMIFICATION AND
            <br />
            VIRAL MEME ACTION.
          </p>
        </div>

        {/* Sağ taraf: tonBottle simgesi */}
        <div className="flex justify-end lg:justify-self-end scale-100">
          <img
            src={tonBottle}
            alt="tonBottle"
            className="w-ful max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
