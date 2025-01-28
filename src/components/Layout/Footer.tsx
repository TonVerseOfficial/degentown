import React from 'react';
import { motion } from 'framer-motion';
import degenLogo from '../../assets/images/degen-logo.webp';
import youtube from '../../assets/images/yt.webp';
import telegram from '../../assets/images/tg.webp';
import tiktok from '../../assets/images/tiktok.webp';
import twitter from '../../assets/images/x.webp';
import instagram from '../../assets/images/ig.webp';
import { URLS } from '../../config/urls';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <motion.img 
            src={degenLogo} 
            alt="Degen Town Logo" 
            className="w-full max-w-[200px] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Sosyal Medya İkonları */}
          <div className="flex items-center justify-center gap-4 mb-6">
            {[
              { icon: instagram, link: URLS.INSTAGRAM, alt: "Instagram" },
              { icon: telegram, link: URLS.TELEGRAM_CHANNEL, alt: "Telegram" },
              { icon: tiktok, link: URLS.TIKTOK, alt: "TikTok" },
              { icon: youtube, link: URLS.YOUTUBE, alt: "YouTube" },
              { icon: twitter, link: URLS.TWITTER, alt: "Twitter" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <img src={social.icon} alt={social.alt} className="w-8 h-8" />
              </motion.a>
            ))}
          </div>

          {/* Website URL */}
          <motion.a
            href="https://www.degentown.io"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mario text-yellow-400 text-xl mb-6 hover:text-yellow-300 transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            WWW.DEGENTOWN.IO
          </motion.a>

          {/* Gri çizgi */}
          <motion.div 
            className="w-full max-w-[200px] h-[1px] bg-gray-700 mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />

          {/* Copyright */}
          <motion.p
            className="text-gray-500 text-xs text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Copy Right & Graphics DEGEN TOWN, All Rights Reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 