import React from 'react';
import { motion } from 'framer-motion';
import whiteGameImg from '../../assets/images/whiteGameImg.webp';
import tgLogo from '../../assets/images/tgLogo.webp';
import { URLS } from '../../config/urls';

const TelegramUsersSection: React.FC = () => {
  return (
    <section className="relative h-[400px] overflow-hidden bg-white">
      {/* Arkaplan */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${whiteGameImg})` }}
      />

      {/* İçerik */}
      <div className="relative h-full flex items-center justify-center">
        <div className="flex items-center justify-center w-full px-4">
          {/* Sol Logo */}
          <motion.img
            src={tgLogo}
            alt="Telegram Logo"
            className="w-32 md:w-48"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          />

          {/* Orta Yazı */}
          <div className="text-center mx-8 md:mx-16">
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
            <motion.h1
              className="font-mario text-degen-blue text-5xl md:text-8xl mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              900M
            </motion.h1>
            <motion.h3
              className="font-mario text-degen-blue text-2xl md:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              USERS ON TELEGRAM
            </motion.h3>
          </div>

          {/* Sağ Logo */}
          <motion.img
            src={tgLogo}
            alt="Telegram Logo"
            className="w-32 md:w-48"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
          />
        </div>
      </div>
    </section>
  );
};

export default TelegramUsersSection; 