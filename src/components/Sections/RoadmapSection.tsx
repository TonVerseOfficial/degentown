import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gameMap from '../../assets/images/gameMap.webp';
import cloud1 from '../../assets/images/cloud1.webp';
import cloud2 from '../../assets/images/cloud2.webp';
import cloud3 from '../../assets/images/cloud3.webp';
import cloud4 from '../../assets/images/cloud4.webp';
import donut from '../../assets/images/donut.webp';


const RoadmapSection: React.FC = () => {
  const donutRef = useRef<HTMLImageElement>(null);
  const [donutSize, setDonutSize] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      if (donutRef.current) {
        const width = donutRef.current.offsetWidth;
        setDonutSize(width);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const roadmapItems = [
    {
      title: "Fair Launch",
      description: "Launching the Fair Launch & the DEGEN TOWN Airdrop to Kickstart the Degen Town Journey."
    },
    {
      title: "10.000 Users",
      description: "Reaching 10.000 users as our community begins to grow rapidly."
    },
    {
      title: "LAUNCH GAME & AIRDROP",
      description: "Official Game Launch & Airdrop Season Two to boost player engagement."
    },
    {
      title: "100.000 USERS",
      description: "100.000 Users signaling widespread adoption"
    },
    {
      title: "LISTING $DEGEN",
      description: "Launching $DEGEN & atracting more holders"
    },
    {
      title: "500'000 USERS",
      description: "Achieving 500'000 users, Making Degen Town a Global Phenomena"
    },
    {
      title: "GROWTH MODE",
      description: "Degen Town Token up for an exchange listings."
    },
    {
      title: "LAUNCH OF THE DEGEN TOWN VERSE",
      description: "Expanding into the Degen Town Verse, offering a whole new universe to explore"
    }
  ];

  const tokenomicsData = [
    { percent: "20%", label: "FAIR LAUNCH", color: "bg-[#8B4513]" },
    { percent: "5%", label: "COMMUNITY INCENTIVES", color: "bg-[#FF69B4]" },
    { percent: "25%", label: "EXCHANGES", color: "bg-[#4169E1]" },
    { percent: "5%", label: "TEAM", color: "bg-[#808080]" },
    { percent: "25%", label: "DEX LIQUIDITY", color: "bg-[#87CEEB]" },
    { percent: "10%", label: "CEX LIQUIDITY", color: "bg-[#4682B4]" },
    { percent: "5%", label: "OPERATIONS", color: "bg-[#00CED1]" },
    { percent: "5%", label: "MARKETMAKING", color: "bg-[#40E0D0]" }
  ];

  return (
    <>
      <section className="relative min-h-screen py-20 bg-degen-blue overflow-hidden">
        {/* Arka plan görseli */}
        <div 
          className="absolute inset-0 w-full h-full mix-blend-soft-light"
          style={{
            backgroundImage: `url(${gameMap})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
          }}
        />

        {/* Bulutlar */}
        <motion.img
          src={cloud1}
          alt="Cloud 1"
          className="absolute top-20 -left-20 w-96 opacity-50"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src={cloud2}
          alt="Cloud 2"
          className="absolute top-60 -right-32 w-[500px] opacity-50"
          animate={{ y: [-25, 25, -25] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src={cloud3}
          alt="Cloud 3"
          className="absolute bottom-96 -left-40 w-[600px] opacity-50"
          animate={{ y: [-30, 30, -30] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src={cloud4}
          alt="Cloud 4"
          className="absolute -bottom-20 -right-20 w-[450px] opacity-50"
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* İçerik */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="font-mario text-yellow-400 text-3xl text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            BECOME AN EARLY SUPPORTER
          </motion.h2>
          
          <motion.h1 
            className="font-mario text-white text-5xl md:text-7xl text-center mb-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            THE ROADMAP
          </motion.h1>

          {/* Roadmap Items */}
          <div className="max-w-6xl mx-auto">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                className={`max-w-xl mb-20 ${index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-b from-[rgba(0,217,255,0.72)] to-[#0E0E90] backdrop-blur-sm rounded-xl p-8 hover:scale-105 transition-all duration-300">
                  <h3 className="font-mario text-white text-3xl md:text-4xl mb-4">{item.title}</h3>
                  <p className="font-toony text-white/90 text-lg md:text-xl">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="relative py-20 bg-degen-blue overflow-hidden">
        {/* Arka plan görseli */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${gameMap})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
            mixBlendMode: 'overlay'
          }}
        />

        {/* Bulutlar */}
        <motion.img
          src={cloud1}
          alt="Cloud 1"
          className="absolute top-20 -left-20 w-96 opacity-50"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src={cloud2}
          alt="Cloud 2"
          className="absolute top-60 -right-32 w-[500px] opacity-50"
          animate={{ y: [-25, 25, -25] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* İçerik */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="font-mario text-yellow-400 text-3xl text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            BECOME AN EARLY SUPPORTER
          </motion.h2>
          
          <motion.h1 
            className="font-mario text-white text-5xl md:text-7xl text-center mb-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            TOKENOMICS
          </motion.h1>

          {/* Mobil görünüm */}
          <div className="md:hidden">
            <motion.img 
              src={donut} 
              alt="Tokenomics Distribution" 
              className="w-full max-w-[300px] mx-auto mb-8"
              initial={{ rotate: -180, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            <div className="space-y-4 max-w-md mx-auto">
              {tokenomicsData.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-4 h-4 rounded-full ${item.color}`} />
                  <div className="flex-1">
                    <div className="font-mario text-yellow-400 text-2xl">
                      {item.label}
                    </div>
                  </div>
                  <div className="font-mario text-white text-2xl">
                    {item.percent}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop görünüm */}
          <div className="hidden md:block mb-44">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[800px] mx-auto"
            >
              <motion.img 
                ref={donutRef}
                src={donut} 
                alt="Tokenomics Distribution" 
                className="w-full"
                initial={{ rotate: -180 }}
                whileInView={{ rotate: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />

              {/* Token Distribution Labels */}
              {tokenomicsData.map((item, index) => {
                const angleStep = 360 / tokenomicsData.length;
                const radius = donutSize * 0.65; // Donut boyutunun %65'i kadar yarıçap
                const angleInRadians = (index * angleStep * Math.PI) / 180;
                const x = Math.cos(angleInRadians) * radius;
                const y = Math.sin(angleInRadians) * radius;

                return (
                  <motion.div
                    key={index}
                    className="absolute text-center "
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: `translate(-50%, -50%)`,
      
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`font-mario text-yellow-400 ${x < 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-3xl md:text-4xl text-white">
                        {item.percent}
                      </div>
                      <div className="text-sm md:text-base whitespace-nowrap">{item.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
};

export default RoadmapSection; 
