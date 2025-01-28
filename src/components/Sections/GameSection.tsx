import React from 'react';
import { motion } from 'framer-motion';


const GameSection: React.FC = () => {
  return (
    <>
      {/* İlk Bölüm - Mavi Arka Plan */}
      <motion.section 
        className="relative py-20 bg-degen-blue"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Üst Banner */}
        <div className="container mx-auto px-4 text-center mb-20">
          <motion.h2 
            className="font-mario text-yellow-400 text-2xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ROCKING THE SOLANA ECOSYSTEM
          </motion.h2>
          <motion.h1 
            className="font-mario text-white text-5xl md:text-7xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            THE FIRST MATCH-3 GAME
          </motion.h1>
          <motion.p 
            className="font-toony text-white text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            JOIN THE DEGEN UNIVERSE AND WIN WITH THE WINNER TEAM
          </motion.p>
        </div>

      
      </motion.section>
    </>
  );
};

export default GameSection; 