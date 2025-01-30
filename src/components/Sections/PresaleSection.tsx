import React from 'react';
import { motion } from 'framer-motion';
import man1 from '../../assets/images/man1.webp';
import man2 from '../../assets/images/man2.webp';
import man3 from '../../assets/images/man3.webp';
import { GameStats } from '../../types/api';

interface PresaleSectionProps {
  stats: GameStats;
}

const PresaleSection: React.FC<PresaleSectionProps> = ({ stats }) => {
  const features = [
    {
      image: man1,
      title: "BECOME A BRAVE DEGEN",
      description: `We already raised ${stats.usdRaised.toLocaleString()} USD! Join the presale and be part of the winning Degen Town Team.`
    },
    {
      image: man2,
      title: "FAIR LAUNCH FACTS",
      description: "Up to 50% Discound on TGE.\n" +
      "Sale Price: Check in our Telegram App\n" + 
        "for more information"
    },
    {
      image: man3,
      title: "VESTING SCHEDULE",
      description: "There is no vesting.\n" +
        "Team tokens & advisor positions are vested over a period of 3 months." +
        "Tokens held by the team are unlocked over a period of 12 months.\n."
    }
  ];

  return (
    <section className="relative py-20 bg-degen-blue overflow-hidden">
      {/* Üst Bölüm - Presale Bilgileri */}
      <div className="container mx-auto px-4 mb-32">
        <motion.h2 
          className="font-mario text-yellow-400 text-3xl text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          BECOME AN EARLY SUPPORTER
        </motion.h2>
        <motion.h1 
          className="font-mario text-white text-5xl md:text-7xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          JOIN THE FAIR LAUNCH
        </motion.h1>

        {/* Send Funds Bölümü */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.h3 
            className="font-mario text-white text-2xl text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SEND FUNDS TO:
          </motion.h3>
          <motion.div 
            className="bg-yellow-400 rounded-full p-4 mb-8 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-mario text-degen-blue text-center break-all">
              Hiq3VtW9NiUC2GCBVw59CKGZfK6rNgWFHDaQWQSQvHSc
            </p>
            <button
              onClick={() => navigator.clipboard.writeText('Hiq3VtW9NiUC2GCBVw59CKGZfK6rNgWFHDaQWQSQvHSc')}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-degen-blue text-white px-3 py-1 rounded-full hover:bg-opacity-80 transition-all duration-300 text-sm font-mario"
            >
              Copy
            </button>
          </motion.div>
        </div>

        <div className="flex flex-col gap-20 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                className="lg:w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full rounded-lg"
                  style={{
                    boxShadow: '94px 108px 127px -43px #00000082'
                  }}
                />
              </motion.div>
              <div className="lg:w-1/2 flex flex-col items-start lg:items-start text-left">
                <h3 className="font-mario text-[#00E0FF] text-3xl md:text-4xl mb-6">
                  {feature.title}
                </h3>
                <p className="font-toony text-white text-lg md:text-xl whitespace-pre-line">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresaleSection; 
