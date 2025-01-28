import React from 'react';
import { motion } from 'framer-motion';
import solLogo from '../../assets/images/solLogo.webp';
import solBottle1 from '../../assets/images/solBottle1.webp';

const HowToGetTokenSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-degen-blue">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="font-mario text-yellow-400 text-3xl text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          THE BLOCKCHAIN
        </motion.h2>
        
        <motion.h1 
          className="font-mario text-white text-5xl md:text-7xl text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          HOW TO GET THE{'\n'}
          DEGEN TOWN TOKEN?
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Sol taraf - Buy SOL */}
          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={solLogo}
              alt="SOL Logo"
              className="w-48 h-48 mb-8"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <h3 className="font-mario text-[#00E0FF] text-3xl mb-4">
              BUY SOL ON AN EXCHANGE
            </h3>
          </motion.div>

          {/* Sağ taraf - Get Phantom */}
          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img
              src={solBottle1}
              alt="Phantom Wallet"
              className="w-48 h-48 mb-8"
              animate={{ y: [0, -15, 0] }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <h3 className="font-mario text-[#00E0FF] text-3xl mb-4">
              GET PHANTOM WALLET
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToGetTokenSection; 