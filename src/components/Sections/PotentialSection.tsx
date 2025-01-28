import React from 'react';
import { motion } from 'framer-motion';
import degenWithCloud from '../../assets/images/degenWithCloud.webp';
import degenWithCloud2 from '../../assets/images/degenWithCloud2.webp';
import pepeChar from '../../assets/images/pepeChar.webp';
import brettChar from '../../assets/images/brettChar.webp';
import ponkeChar from '../../assets/images/ponkeChar.webp';
import pepeStat from '../../assets/images/pepeStat.webp';
import brettStat from '../../assets/images/brettStat.webp';
import ponkeStat from '../../assets/images/ponkeStat.webp';
import { URLS } from '../../config/urls';

const PotentialSection: React.FC = () => {
  const memeProjects = [
    {
      name: "PEPE MARKETCAP",
      value: "$8.71B",
      character: pepeChar,
      stats: pepeStat,
    },
    {
      name: "BRETT MARKETCAP",
      value: "$1.48B",
      character: brettChar,
      stats: brettStat,
    },
    {
      name: "PONKE MARKETCAP",
      value: "$192M",
      character: ponkeChar,
      stats: ponkeStat,
    },
  ];

  return (
    <section className="relative py-20 bg-degen-blue overflow-hidden">
      {/* Mobil Görünüm */}
      <div className="lg:hidden flex flex-col items-center text-center px-4">
        <motion.h2 
          className="font-mario text-yellow-400 text-3xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          THE POTENTIAL
        </motion.h2>
        <motion.h1 
          className="font-mario text-white text-5xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          CLIMBING TWO HUGE MARKETS
        </motion.h1>

        <motion.div
          className="space-y-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div>
            <h3 className="font-mario text-[#00E0FF] text-2xl mb-4">
              LEVERAGING VIRAL MEME CULTURE FOR BROAD REACH
            </h3>
            <p className="font-toony text-white text-lg">
              We harness the viral potential of meme culture to achieve extensive reach. 
              Inspired by successful projects like PEPE, BRETT and POKE. Drawing inspiration 
              from successful meme projects such as PEPE, BRETT and POKE.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-full max-w-[400px] mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={degenWithCloud}
            alt="Degen Character"
            className="w-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        <motion.div
          className="space-y-4 text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="font-mario text-[#00E0FF] text-2xl">
            THE FIRST MEME MATCH-3 GAME ON TON
          </h3>
          <p className="font-toony text-white text-lg">
            Our game features engaging mechanics that reward users, keep them continuously 
            engaged through earning and upgrading, and use a unique algorithm to make content 
            go viral.
          </p>
        </motion.div>

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

      {/* Desktop Görünüm */}
      <div className="hidden lg:block">
        <div className="container mx-auto">
          <div className="flex flex-row items-center relative">
            {/* Sol taraf - Metin içeriği */}
            <motion.div 
              className="w-1/2 px-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="font-mario text-yellow-400 text-3xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                THE POTENTIAL
              </motion.h2>
              <motion.h1 
                className="font-mario text-white text-5xl md:text-7xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                COMBINING TWO HUGE MARKETS
              </motion.h1>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="font-mario text-[#00E0FF] text-2xl md:text-3xl mb-4">
                    LEVERAGING VIRAL MEME CULTURE FOR BROAD REACH
                  </h3>
                  <p className="font-toony text-white text-lg md:text-xl">
                    We harness the viral potential of meme culture to achieve extensive reach. 
                    Inspired by successful projects like PEPE, BRETT and POKE. Drawing inspiration 
                    from successful meme projects such as PEPE, BRETT and POKE.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="font-mario text-[#00E0FF] text-2xl md:text-3xl mb-4">
                    THE FIRST MEME MATCH-3 GAME ON SOLANA
                  </h3>
                  <p className="font-toony text-white text-lg md:text-xl">
                    Our game features engaging mechanics that reward users, keep them continuously 
                    engaged through earning and upgrading, and use a unique algorithm to make 
                    content go viral.
                  </p>
                </motion.div>
              </div>

              <motion.button 
                onClick={() => window.open(URLS.TELEGRAM_BOT, '_blank')}
                className="font-mario bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-12 py-3 rounded-full text-xl mt-10 shadow-xl transform hover:scale-105 transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                PLAY NOW
              </motion.button>
            </motion.div>

            {/* Sağ taraf - Görsel */}
            <motion.div 
              className="absolute right-0 top-0 h-full w-1/2 flex items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src={degenWithCloud}
                alt="Degen Character"
                className="h-[120%] object-contain"
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
      </div>

      {/* Meme Projects Section */}
      <div className="container mx-auto px-4 mt-32">
        <motion.h2 
          className="font-mario text-yellow-400 text-3xl text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          COMBINING TWO HUGE MARKETS
        </motion.h2>
        <motion.h1 
          className="font-mario text-white text-5xl md:text-7xl text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          THE MEME UNIVERS
        </motion.h1>
        <motion.p 
          className="font-toony text-white text-xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Showcase the success of the biggest meme projects
        </motion.p>

        {/* Meme Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {memeProjects.map((project, index) => (
            <motion.div
              key={project.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.img
                src={project.character}
                alt={project.name}
                className="w-32 h-32 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <h3 className="font-mario text-[#00E0FF] text-2xl mb-2">{project.name}</h3>
              <p className="font-mario text-white text-4xl mb-4">{project.value}</p>
              <motion.img
                src={project.stats}
                alt={`${project.name} Stats`}
                className="w-full max-w-[150px] rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* First Mover Section */}
      <div className="container mx-auto px-4 mt-32">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Image */}
          <motion.div 
            className="lg:w-1/2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={degenWithCloud2}
              alt="Game Preview"
              className="w-full max-w-[600px] mx-auto"
              animate={{ y: [0, -20, 0] }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Right side - Content */}
          <motion.div 
            className="lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="font-mario text-yellow-400 text-3xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              COMBINING TWO HUGE MARKETS
            </motion.h2>
            
            <motion.h1 
              className="font-mario text-white text-5xl md:text-7xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              FIRST MOVER
            </motion.h1>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div>
                <h3 className="font-mario text-[#00E0FF] text-2xl md:text-3xl mb-4">
                  PIONEERING INNOVATION IN GAMING
                </h3>
                <p className="font-toony text-white text-lg md:text-xl">
                  We are the first to bring Meme themed Match-3 game on the Telegram App Ecosystem, 
                  combining meme culture with game mechanics. This creates the next gaming meta and 
                  captures millions of users quickly.
                </p>
              </div>

              <div>
                <h3 className="font-mario text-[#00E0FF] text-2xl md:text-3xl mb-4">
                  APPS GAINING MILLIONS OF USERS
                </h3>
                <p className="font-toony text-white text-lg md:text-xl">
                  NotCoin and Hamster Kombat are leading the way, gaining hundreds of millions of users 
                  and becoming the fastest-growing niche in tech. We aim to replicate their success by 
                  introducing a new META within Telegram Apps.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PotentialSection; 