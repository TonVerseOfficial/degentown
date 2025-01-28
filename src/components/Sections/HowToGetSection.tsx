import React from 'react';
import { motion } from 'framer-motion';
import GradientBanner from '../Common/GradientBanner';
import diamondHand from '../../assets/images/diamondHand.webp';
import btcBottle from '../../assets/images/btcBottle.webp';
import btc from '../../assets/images/btc.webp';
import phantomWallet from '../../assets/images/phantomWallet.webp';

const HowToGetSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-degen-blue overflow-hidden">
      {/* Banner */}
      <GradientBanner 
        leftText="SWIPE. MATCH. EARN"
        rightText="MATCH, MEME, AND MULTIPLY"
        leftImage={diamondHand}
        centerImage={btcBottle}
        rightImage={btc}
        topColor="#2526B1"
        bottomColor="#2526B1"
        className="mb-20"
      />

      {/* Content */}
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
          className="font-mario text-white text-5xl md:text-7xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          HOW TO GET SOLANA?
        </motion.h1>

        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Sol taraf - Adımlar */}
          <motion.div 
            className="lg:w-1/2 space-y-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="font-mario text-[#00E0FF] text-2xl md:text-3xl mb-4">
                GET A SOL WALLET
              </h3>
              <p className="font-toony text-white text-lg md:text-xl">
                Get a SOL wallet! Here on the official Solana website you can find out more about the{' '}
                <a href="#" className="underline">Solana Ecosystem.</a>{' '}
                We recommend{' '}
                <a href="#" className="underline">Phantom.</a>
              </p>
            </div>

            <div>
              <h3 className="font-mario text-[#00E0FF] text-2xl md:text-3xl mb-4">
                BUY SOL FROM AN EXCHANGE
              </h3>
              <p className="font-toony text-white text-lg md:text-xl">
                SOL is listed on all mayor exchanges. Such as Binance, OKX, KuCoin, ByBit. 
                Check here on CoinMarketCap. After you purchased it we recommend highly to store 
                your SOL on a decentralized wallet. Remember, not your keys, not your coins.
              </p>
            </div>

            <div>
              <h3 className="font-mario text-[#00E0FF] text-2xl md:text-3xl mb-4">
                LOOKING TO PARTICIPATE IN PRESALE
              </h3>
              <p className="font-toony text-white text-lg md:text-xl">
                Congrats, your SOL are now in your desentralized wallet. Make sure to participate 
                only in our Presale if you send the funds from a decentralized wallet, like Solana 
                or any other supported wallet. Sending funds from an exchange can lead to total loss 
                as the token might not be supported from the exchange!
              </p>
            </div>
          </motion.div>

          {/* Sağ taraf - Phantom Wallet Görseli */}
          <motion.div 
            className="lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={phantomWallet}
              alt="Phantom Wallet"
              className="w-full max-w-[400px]"
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

export default HowToGetSection; 