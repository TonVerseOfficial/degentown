import React from 'react';
import { motion } from 'framer-motion';
import season1 from '../../assets/images/season1.webp';
import season2 from '../../assets/images/season2.webp';
import season3 from '../../assets/images/season3.webp';
import season4 from '../../assets/images/season4.webp';
import screen1 from '../../assets/images/screen1.webp';
import screen2 from '../../assets/images/screen2.webp';
import screen3 from '../../assets/images/screen3.webp';
import screen4 from '../../assets/images/screen4.webp';
import GradientBanner from '../Common/GradientBanner';
import hammer from '../../assets/images/hammer.webp';
import bomb from '../../assets/images/bomb.webp';
import star from '../../assets/images/star.webp';
import { URLS } from '../../config/urls';

const LaunchSection: React.FC = () => {
  const seasons = [
    { image: season1, title: "SEASON ONE", status: "CLOSED" },
    { image: season2, title: "SEASON TWO", status: "CLOSED" },
    { image: season3, title: "SEASON THREE", status: "CLOSED" },
    { image: season4, title: "GAME & TGE", status: "LIVE" },
  ];

  const screens = [screen1, screen2, screen3, screen4];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <GradientBanner 
        leftText="GAMING MEETS CRYPTO"
        rightText="FROM MATCH-3 TO WEB3"
        leftImage={hammer}
        centerImage={star}
        rightImage={bomb}
        topColor="#2526B1"
        bottomColor="white"
      />

      <motion.section 
        className="relative py-12 md:py-20 bg-white"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {/* Launch Include Başlığı */}
        <motion.h3
          className="font-mario text-degen-blue text-4xl md:text-8xl mb-8 md:mb-16 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          OUR LAUNCH INCLUDE
        </motion.h3>
        
        {/* Sezon Kartları - Mobilde dikey, desktop'ta yatay */}
        <div className="md:overflow-x-auto md:pb-8 w-full">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 px-4 md:min-w-max max-w-md md:max-w-none mx-auto">
            {seasons.map((season, index) => (
              <motion.div 
                key={index} 
                className="relative w-full md:w-[600px] flex flex-col"
                initial={{ opacity: 0, y: 20, x: 0 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Sezon başlığı - mobilde üstte ve ortada */}
                <motion.h3 
                  className="font-mario text-degen-blue text-3xl md:text-2xl text-center md:hidden mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {season.title}
                </motion.h3>

                <div className="relative">
                  <img 
                    src={season.image} 
                    alt={season.title}
                    className="w-full aspect-[4/3] md:h-[400px] object-cover rounded-lg shadow-lg "
                  />
                  {/* Sezon başlığı - desktop'ta sağ üst */}
                  <div className="absolute top-4 right-4 hidden md:block">
                    <h3 className="font-mario text-degen-blue text-2xl">{season.title}</h3>
                  </div>
                  {/* Status etiketi - sağ alt */}
                  <div className="absolute bottom-4 right-4">
                    <span className={`font-mario text-sm px-4 py-1 rounded ${
                      season.status === "LIVE" 
                        ? "bg-yellow-400 text-blue-900" 
                        : "bg-red-500 text-white"
                    }`}>
                      {season.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Alt kısımdaki match-3 görselleri - Yatay scroll */}
        <div className="mt-8 px-4 md:hidden">
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-4 min-w-max">
              {screens.map((screen, index) => (
                <motion.div
                  key={index}
                  className="w-32 flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img 
                    src={screen}
                    alt={`Game Screen ${index + 1}`}
                    className="w-full object-cover rounded-lg shadow-md"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Desktop için oyun ekranları ve başlıklar */}
      <motion.section 
        className="relative py-12 md:py-20 bg-white hidden md:block"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full px-4">
          <div className="text-center">
            <div className="grid grid-cols-4 gap-8 max-w-[90%] mx-auto mb-16">
              {screens.map((screen, index) => (
                <motion.img 
                  key={index}
                  src={screen}
                  alt={`Game Screen ${index + 1}`}
                  className="w-full rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
              ))}
            </div>

            {/* Alt Başlık ve Buton */}
            <motion.h3 
              className="font-mario text-yellow-400 text-2xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ROCKING THE SOLANA ECOSYSTEM
            </motion.h3>
            <motion.h2 
              className="font-mario text-degen-blue text-5xl md:text-6xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              THE FIRST MATCH-3 GAME
            </motion.h2>
            <motion.button 
              onClick={() => window.open(URLS.TELEGRAM_BOT, '_blank')}
              className="font-mario bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-12 py-3 rounded-full text-xl shadow-xl transform hover:scale-105 transition-all duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              PLAY NOW
            </motion.button>
          </div>
        </div>
      </motion.section>
      </section>
  );
};

export default LaunchSection; 