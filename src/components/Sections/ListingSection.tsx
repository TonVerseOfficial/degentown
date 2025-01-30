import React from 'react';
import { motion } from 'framer-motion';
import cloud1 from '../../assets/images/cloud1.webp';
import cloud2 from '../../assets/images/cloud2.webp';
import hammer from '../../assets/images/hammer.webp';
import star from '../../assets/images/star.webp';
import bomb from '../../assets/images/bomb.webp';
import GradientBanner from '../Common/GradientBanner';

const ListingSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-degen-blue overflow-hidden">
      {/* Arka plan görseli 
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${gameMap})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }}
      />
      */}

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
        className="absolute bottom-20 -right-32 w-[500px] opacity-50"
        animate={{ y: [-25, 25, -25] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Banner */}
      <GradientBanner 
        leftText="BECOME AN EARLY SUPPORTER"
        rightText="THE ROADMAP"
        leftImage={hammer}
        centerImage={star}
        rightImage={bomb}
        className="mb-32"
      />

      {/* İçerik */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="font-mario text-yellow-400 text-3xl text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          GOING LIVE
        </motion.h2>
        
        <motion.h1 
          className="font-mario text-white text-5xl md:text-7xl text-center mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          THE LISTING
        </motion.h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-16 max-w-6xl mx-auto">
          {/* Top Tier Exchanges Listings */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-mario text-[#00E0FF] text-2xl md:text-3xl mb-4">TOP EXCHANGES LISTINGS</h3>
            <p className="font-toony text-white text-lg">Degen Town Token will aim to list on major exchanges, making it easy to buy, sell & trade globally</p>
          </motion.div>

          {/* Partnership with Crypto KOLs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-mario text-[#00E0FF] text-2xl md:text-3xl mb-4">PARTNERSHIP WITH CRYPTO KOLS</h3>
            <p className="font-toony text-white text-lg">We're teaming up with leading crypto influencers to spread the word about Degen Town and drive engagement</p>
          </motion.div>

          {/* Crypto Trendings */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-mario text-[#00E0FF] text-2xl md:text-3xl mb-4">CRYPTO TRENDINGS</h3>
            <p className="font-toony text-white text-lg">We'll push to get Degen Town trending across top crypto platforms, ensuring visibility and BUZZ.</p>
          </motion.div>

          {/* Top Tier Exchanges Listings */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-mario text-[#00E0FF] text-2xl md:text-3xl mb-4">TOP INFLUENCERS</h3>
            <p className="font-toony text-white text-lg">We'll work with mainstream influencers to introduce Degen Town to a broader audience, expanding our reach beyond the crypto space.</p>
          </motion.div>
        </div>

        {/* Facts About The Listing */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mt-16"
        >
          <h3 className="font-mario text-[#00E0FF] text-2xl md:text-3xl mb-4">FACTS ABOUT THE LISTING</h3>
          <div className="font-toony text-white text-lg space-y-2">
            <p>At a fair launch, everyone receives $degen at the same token price. BE EARLY - Don’t wait. The future is now.</p>
            <p>The earlier you join, the more token bonus you receive.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ListingSection; 
