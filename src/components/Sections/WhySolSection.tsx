import React from 'react';
import { motion } from 'framer-motion';
import dark1 from '../../assets/images/dark1.webp';
import dark2 from '../../assets/images/dark2.webp';
import dark3 from '../../assets/images/dark3.webp';

const WhySolSection: React.FC = () => {
  const features = [
    {
      image: dark1,
      title: "IPO Rumors on TG",
      description: "Potential Telegram IPO could drive huge and boost market presence of Telegram Apps. Solana has a huge audience of gamers"
    },
    {
      image: dark2,
      title: "Speed, Scale, and Success",
      description: "Solana is positioning itself as the ultimate blockchain for mass adoption by revolutionizing payments, powering next-gen decentralized applications, and scaling at lightning speed. With near-instant finality, ultra-low fees, and a thriving ecosystem, Solana is driving the future of crypto commerce, social integration, and seamless on-chain experiences."
    },
    {
      image: dark3,
      title: "Unstoppable Innovation",
      description: "With unmatched speed, near-zero fees, and massive scalability, Solana is the ultimate blockchain for the future of crypto."
    }
  ];

  return (
    <section className="relative py-20 bg-degen-blue">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="font-mario text-yellow-400 text-3xl text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ROCKING THE SOL ECOSYSTEM
        </motion.h2>
        
        <motion.h1 
          className="font-mario text-white text-5xl md:text-7xl text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          WHY ARE WE{'\n'}
          BUILDING ON SOL?
        </motion.h1>

        <div className="flex flex-col gap-20 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                className="lg:w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full rounded-lg"
                  style={{
                    boxShadow: '94px 108px 127px -43px #00000082'
                  }}
                />
              </motion.div>
              <div className="lg:w-1/2 flex flex-col items-start lg:items-start text-left">
                <h3 className="font-mario text-[#00E0FF] text-3xl md:text-4xl mb-6">
                  {feature.title}
                </h3>
                <p className="font-toony text-white text-lg md:text-xl">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySolSection; 
