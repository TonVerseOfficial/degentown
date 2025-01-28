import React from 'react';
import { motion } from 'framer-motion';
import whiteGameImgBig from '../../assets/images/whiteGameImgBig.webp';
import { GameStats } from '../../types/api';
import { formatNumber } from '../../services/util';


interface RaisedSectionProps {
  stats: GameStats;
}

const RaisedSection: React.FC<RaisedSectionProps> = ({ stats }) => {


  // Hedef miktar (örneğin: 5M USD)
  const targetAmount = 75000;
  // İlerleme yüzdesi hesaplama
  const progressPercentage = Math.min((stats.usdRaised / targetAmount) * 100, 100);

  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Arka plan görseli */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${whiteGameImgBig})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Toplanan Miktar */}
        <div className="text-center mb-20">
          <motion.h2
            className="font-mario text-[#00E0FF] text-3xl md:text-4xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            WE HAVE RAISED
          </motion.h2>
          <motion.h1
            className="font-mario text-degen-blue text-8xl md:text-9xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            USD {formatNumber(stats.usdRaised)}
          </motion.h1>
          {/* USD ${(stats.usdRaised / 1000000).toFixed(1)}M */}
          {/* İlerleme Çubuğu */}
          <div className="relative max-w-3xl mx-auto mb-20">
            <motion.div
              className="h-4 bg-gray-200 rounded-full overflow-hidden"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.div
                className="h-full bg-[#00E0FF] rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </motion.div>
            
            {/* Hedef göstergesi
            <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 font-mario text-degen-blue">
              ${(targetAmount / 1000000)}M
            </div> */}
          </div>
        </div>

        {/* Bonus ve Supply Bilgileri */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto mb-20">
          {/* Early Stage Bonus */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-mario text-degen-blue text-7xl md:text-8xl mb-4">50%</h2>
            <p className="font-mario text-degen-blue text-xl md:text-2xl">EARLY STAGE BONUS</p>
          </motion.div>

          {/* Supply Info */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-mario text-degen-blue text-7xl md:text-8xl mb-4">50%</h2>
            <p className="font-mario text-degen-blue text-xl md:text-2xl">DEX SUPPLY</p>
          </motion.div>
        </div>

        {/* Açıklama Metni */}
        <motion.p
          className="font-toony text-degen-blue text-lg md:text-xl text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contributors in the Presale Stage will receive a DEGEN TOWN NFT which can be staked and permit them access to the PRESALE POT. 10% of all profits generate from the game, including earnings from in-app sales, sales of physical products, selling of traffic and revenues from YouTube clicks will be kicked back to the Degen Town Community through our token.
        </motion.p>
      </div>
    </section>
  );
};

export default RaisedSection; 