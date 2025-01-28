import React from 'react';
import { motion } from 'framer-motion';
import handPhoneLast from '../../assets/images/handPhoneLast.webp';
import whiteGameImgBig from '../../assets/images/whiteGameImgBig.webp';
import cloud2 from '../../assets/images/cloud2.webp';
import URLS from '../../config/urls';

const AirdropSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-degen-blue overflow-hidden">
      {/* Arka plan görseli */}
      <div 
        className="absolute inset-1 w-full h-full "
        style={{
          backgroundImage: `url(${whiteGameImgBig})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1,
        }}
      />

      {/* Bulut */}
      <motion.img
        src={cloud2}
        alt="Cloud"
        className="absolute right-0 top-20 w-[500px] "
        animate={{ y: [-25, 25, -25] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Ana içerik */}
      <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-screen">
        <div className="relative w-full max-w-[800px]">
          {/* Telefon görseli */}
          <motion.img
            src={handPhoneLast}
            alt="Phone in Hand"
            className="w-full z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />

          {/* Sarı kutu ve metin içeriği */}
          <motion.div 
            className="bg-[#FFD900] p-8 rounded-3xl w-full absolute -bottom-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center">
              <h1 className="font-mario text-white text-4xl md:text-5xl mb-8 drop-shadow-lg">
                JOIN NOW THE AIRDROP OF DEGENTOWN AND COMPLETE DAILY TASKS
              </h1>

              {/* Butonlar */}
              <div className="flex items-center justify-center gap-4">
                <motion.button
                  className="bg-[#FFE97D] hover:bg-[#FFE150] text-degen-blue font-mario px-8 py-3 rounded-xl text-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(URLS.TELEGRAM_BOT, '_blank')}
                >
                  CLAIM AIRDROP
                </motion.button>
                <motion.button
                  className="bg-degen-blue hover:bg-opacity-90 text-white font-mario px-8 py-3 rounded-xl text-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(URLS.TELEGRAM_CHANNEL, '_blank')}
                >
                  JOIN NOW
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AirdropSection; 