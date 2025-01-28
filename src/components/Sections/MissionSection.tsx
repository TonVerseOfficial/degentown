import React from 'react';
import { motion } from 'framer-motion';
import degenLogo from '../../assets/images/degenBoys.webp';
import gameScreen1 from '../../assets/images/phoneScreen1.webp';
import gameScreen2 from '../../assets/images/phoneScreen2.webp';
import GradientBanner from '../Common/GradientBanner';
import diamondHand from '../../assets/images/diamondHand.webp';
import solBottle from '../../assets/images/solBottle.webp';
import gemSol from '../../assets/images/gemSol.webp';
import { GameStats } from '../../types/api';
import { formatNumber } from '../../services/util';

interface MissionSectionProps {
  stats: GameStats;
}

const MissionSection: React.FC<MissionSectionProps> = ({stats}) => {
  

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Sarı banner */}
      <GradientBanner 
        leftText="100M PLAYERS"
        rightText="FROM MATCH-3 TO WEB3"
        leftImage={diamondHand}
        centerImage={solBottle}
        rightImage={gemSol}
        topColor="transparent"
        bottomColor="transparent"
        className="-mt-20"
      />

      {/* Mission içeriği */}
      <div className="container mx-auto px-4 mt-20 md:mt-32 text-center relative">
        <h2 className="font-mario text-yellow-400 text-3xl md:text-4xl mb-4 md:mb-6">OUR MISSION</h2>
        <h1 className="font-mario text-white text-5xl md:text-7xl mb-6 md:mb-10">CRYPTO MASS ADOPTION</h1>
        <p className="font-toony text-white text-xl md:text-2xl max-w-4xl mx-auto mb-16 md:mb-20">
          OUR MISSION IS TO ONBOARD 100 MILLION NEW USERS TO WEB3. HOW?
          WITH A MIX OF GAMIFICATION AND VIRAL MEME ACTION
        </p>

        {/* Game showcase - Mobil */}
        <div className="md:hidden flex flex-col items-center space-y-16">
          <motion.img
            src={degenLogo}
            alt="Degen Town Logo"
            className="w-full max-w-[300px]"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          <motion.img
            src={gameScreen2}
            alt="Game Screen 2"
            className="w-full max-w-[300px]"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-mario text-white text-5xl mb-2">{formatNumber(stats.degenTownPlayers)}</h3>
              <p className="font-toony text-yellow-400 text-xl">Degen Town Players</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-mario text-white text-5xl mb-2">${formatNumber(stats.usdRaised)}</h3>
              <p className="font-toony text-yellow-400 text-xl">USD Raised</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="font-mario text-white text-5xl mb-2">{formatNumber(stats.totalSolRaised)}</h3>
              <p className="font-toony text-yellow-400 text-xl">Total SOL Raised</p>
            </motion.div>
          </div>

          <motion.img
            src={gameScreen1}
            alt="Game Screen 1"
            className="w-full max-w-[300px]"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Game showcase - Desktop */}
        <div className="hidden md:flex items-center justify-between">
          <motion.div
            className="w-1/3 -ml-20"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={gameScreen1}
              alt="Game Screen 1"
              className="w-full transform -rotate-12"
            />
          </motion.div>

          <div className="text-center mx-auto">
            <motion.img
              src={degenLogo}
              alt="Degen Town Logo"
              className="w-[500px] mx-auto mb-16"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />

            <div className="space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-mario text-white text-6xl mb-3">{formatNumber(stats.degenTownPlayers)}</h3>
                <p className="font-toony text-yellow-400 text-2xl">Degen Town Players</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="font-mario text-white text-6xl mb-3">${formatNumber(stats.usdRaised)}</h3>
                <p className="font-toony text-yellow-400 text-2xl">USD Raised</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="font-mario text-white text-6xl mb-3">{formatNumber(stats.totalSolRaised)}</h3>
                <p className="font-toony text-yellow-400 text-2xl">Total SOL Raised</p>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="w-1/3 -mr-20 overflow-hidden"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={gameScreen2}
              alt="Game Screen 2"
              className="w-full transform rotate-12"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection; 