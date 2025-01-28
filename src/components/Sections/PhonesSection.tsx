import React from 'react';
import { motion } from 'framer-motion';
import phones from '../../assets/images/phones.webp';
import degenBoys from '../../assets/images/degenBoys.webp';
import solLogo from '../../assets/images/solLogo.webp';
import solBottle from '../../assets/images/solBottle.webp';
import hammer from '../../assets/images/hammer.webp';

const PhonesSection: React.FC = () => {
  return (
    <section className="relative bg-degen-blue">
      {/* Logo */}
      <div className="container mx-auto px-4">
        <motion.img
          src={degenBoys}
          alt="Degen Boys"
          className="w-full max-w-[650px] mx-auto -mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Phones */}
      <div className="relative">
        <motion.img
          src={phones}
          alt="Game Phones"
          className="w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Alt Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#FFD900] to-[#FDB71D] py-6">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-8">
                <motion.img 
                  src={solLogo}
                  alt="Sol Logo"
                  className="w-12 h-12"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.p 
                  className="font-mario text-degen-blue text-xl md:text-2xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  PLAY. MEME. PROFIT.
                </motion.p>
              </div>

              <motion.img 
                src={solBottle}
                alt="Sol Bottle"
                className="w-12 h-12"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />

              <motion.p 
                className="font-mario text-degen-blue text-xl md:text-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                BLOCKCHAIN FUN STARTS HERE!
              </motion.p>

              <motion.img 
                src={hammer}
                alt="Hammer"
                className="w-12 h-12"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhonesSection; 