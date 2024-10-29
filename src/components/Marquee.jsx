import React, { useEffect, useState } from "react";

const Marquee = () => {
  const [walletNumber, setWalletNumber] = useState(1634461);
  const [raised, setRaised] = useState(981814);
//   fetchData

  const numberToKString = (number) => {
    if (number > 999) {
      return `${Math.floor(number / 1000)}K`;
    }
    return number;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseUSD = await fetch('https://vds.mertcantoglu.xyz/crypto-api/income');
        const data = await responseUSD.json();
        setRaised(data.total_income_usd);        

        const responseWallet = await fetch('https://frontend.papo.ninja/api/system/status');
        const dataWallet = await responseWallet.json();
        setWalletNumber(data.dataWallet.data.users);   
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const fetchNumbers = async () => {
    const response = await fetch("https://api.example.com/numbers");
    const data = await response.json();
    return data;
  };


    const texts = [
        `First ${numberToKString(walletNumber)} USERS SIGNED UP!`,
        `AIRDROP S2 IS LIVE EARN POINTS AND MOVE UP`,
        `SEED SALE FIRST ${numberToKString(raised)} RAISED`,
        `AIRDROP S2 IS LIVE EARN POINTS AND MOVE UP`,
        `AIRDROP SEASON 2 LIVE`,
        `AIRDROP S2 IS LIVE EARN POINTS AND MOVE UP`,
        `AIRDROP SEASON 2 LIVE`,
    ];


  return (
    <div className="bg-marquee-gray overflow-hidden whitespace-nowrap py-2">
      <div className="marquee flex items-center space-x-10 animate-marquee justify-centers">
        {[...texts, ...texts].map((text, index) => (
          <span
            key={index}
            className={`text-sm font-mario ${
              index % 2 === 0 ? "text-[#FFCB00]" : "text-white"
            }`}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
