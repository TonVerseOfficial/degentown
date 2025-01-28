import React from 'react';
import { motion } from 'framer-motion';
import degenBoys from '../../assets/images/degenBoys.webp';
import degenWithCloud3 from '../../assets/images/degenWithCloud3.webp';
import degenWithCloud4 from '../../assets/images/degenWithCloud4.webp';

const UntappedPowerSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-degen-blue">
      {/* Logo */}
      <div className="container mx-auto px-4 mb-32">
        <motion.img
          src={degenBoys}
          alt="Degen Boys"
          className="w-full max-w-[600px] mx-auto mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* First Section */}
      <div className="container mx-auto px-4 mb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-mario text-yellow-400 text-3xl mb-4">
              THE POTENTIAL
            </h2>
            <h1 className="font-mario text-white text-5xl md:text-7xl mb-8">
              THE UNTAPPED POWER OF DEGEN TOWN
            </h1>
            <h3 className="font-mario text-[#00E0FF] text-2xl md:text-3xl mb-6">
              LEVERAGING VIRAL MEME CULTURE FOR BROAD REACH
            </h3>
            <p className="font-toony text-white text-lg md:text-xl">
              Degen Town is more than a game—it's a movement powered by viral meme energy 
              and smart design. By blending humor, culture, and blockchain innovation, we're 
              creating a space where users don't just play—they connect, grow, and thrive. 
              Every character upgrade, interaction, and reward earned in Degen Town adds to 
              an expanding ecosystem. This isn't just entertainment, it's a launchpad for a 
              new kind of digital experience.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="lg:w-1/2 flex justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={degenWithCloud3}
              alt="Degen Character"
              className="w-full max-w-[500px]"
              animate={{ y: [0, -20, 0] }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Second Section */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
          {/* Right Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-mario text-yellow-400 text-3xl mb-4">
              THE POTENTIAL
            </h2>
            <h1 className="font-mario text-white text-5xl md:text-7xl mb-8">
              EXPLORE THE DEGEN TOWN UNIVERSE
            </h1>
            <h3 className="font-mario text-[#00E0FF] text-2xl md:text-3xl mb-6">
              BUILD, EARN, AND EXPAND IN A MEME-DRIVEN WORLD
            </h3>
            <p className="font-toony text-white text-lg md:text-xl">
              In Degen Town, players shape their own journey. Start by building and upgrading 
              a character inspired by the best of meme culture, then unlock rewards and access 
              exclusive airdrops as you progress. As your character evolves, so does your 
              network—connect with others, grow your Degen Town family, and take part in a 
              collaborative, ever-expanding ecosystem. This isn't just a game, it's a 
              meme-powered economy waiting for you to dive in.
            </p>
          </motion.div>

          {/* Left Image */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={degenWithCloud4}
              alt="Degen Character"
              className="w-full max-w-[500px]"
              animate={{ y: [0, -20, 0] }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UntappedPowerSection; 