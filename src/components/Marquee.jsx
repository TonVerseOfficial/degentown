import React, { useEffect, useState } from "react";

const Marquee = () => {
  const [walletNumber, setWalletNumber] = useState(42);
  const [raised, setRaised] = useState(126);
//   fetchData

  const numberToKString = (number) => {
    if (number > 999) {
      return `${Math.floor(number / 1000)}K`;
    }
    return Math.floor(number);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseUSD = await fetch('https://telegram-bot-degen-town.replit.app/api/total-deposits');
        const data = await responseUSD.json();
        setRaised(data.totalDepositsInUsd || 126);        

        const responseWallet = await fetch('https://telegram-bot-degen-town.replit.app/api/player-count');
        const dataWallet = await responseWallet.json();
        setWalletNumber(data.dataWallet.count || 42);   
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    const texts = [
        `First ${numberToKString(walletNumber)} USERS SIGNED UP!`,
        `AIRDROP S1 IS LIVE EARN POINTS AND MOVE UP`,
        `SEED SALE FIRST ${numberToKString(raised)} $ RAISED`,
        `AIRDROP S1 IS LIVE EARN POINTS AND MOVE UP`,
        `AIRDROP SEASON 1 LIVE`,
        `AIRDROP S1 IS LIVE EARN POINTS AND MOVE UP`,
        `AIRDROP SEASON 1 LIVE`,
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
