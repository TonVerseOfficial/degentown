import React from 'react';
import { motion } from 'framer-motion';
import handPhoneRight from '../../assets/images/handPhoneRight.webp';
import handPhoneLeft from '../../assets/images/handPhoneLeft.webp';

const WhyWinSection: React.FC = () => {
    return (
        <section className="relative py-20 bg-degen-blue overflow-hidden">
            {/* Mobil için container */}
            <div className="lg:hidden px-4 flex flex-col">
                <motion.h2
                    className="font-mario text-yellow-400 text-2xl text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    ROCKING THE TON ECOSYSTEM
                </motion.h2>
                <motion.h1
                    className="font-mario text-white text-4xl text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    WHY ARE WE BUILDING ON TON?
                </motion.h1>

                {/* Mobil Özellikler Listesi */}
                <motion.div
                    className="space-y-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div>
                        <h3 className="font-mario text-[#00E0FF] text-xl mb-1">VIRAL MARKETING PLAN</h3>
                        <p className="font-toony text-white text-sm">Implementing a strategic plan to ensure widespread reach and engagement.</p>
                    </div>
                    <div>
                        <h3 className="font-mario text-[#00E0FF] text-xl mb-1">EXPERIENCED TEAM</h3>
                        <p className="font-toony text-white text-sm">Our top execution team has extensive experience in crypto marketing.</p>
                    </div>
                    <div>
                        <h3 className="font-mario text-[#00E0FF] text-xl mb-1">PROVEN SUCCESS</h3>
                        <p className="font-toony text-white text-sm">Successfully marketed top cryptos into the millions.</p>
                    </div>
                    <div>
                        <h3 className="font-mario text-[#00E0FF] text-xl mb-1">GLOBAL INFLUENCER NETWORK</h3>
                        <p className="font-toony text-white text-sm">Connected to top live streamers and mainstream influencers worldwide.</p>
                    </div>
                </motion.div>

                {/* Mobil Telefon Görseli 1 */}
                <motion.div
                    className="relative w-full mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <img src={handPhoneRight} alt="Game Map" className="w-full max-w-[300px] mx-auto" />
                </motion.div>

                {/* Mobil Alt Bölüm */}
                <motion.h2
                    className="font-mario text-yellow-400 text-2xl text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    COMBINE TWO HUGE MARKETS
                </motion.h2>
                <motion.h1
                    className="font-mario text-white text-4xl text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    IN APP SALE
                </motion.h1>

                {/* Mobil Alt Özellikler */}
                <motion.div
                    className="space-y-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div>
                        <h3 className="font-mario text-[#00E0FF] text-xl text-center mb-1">UPGRADEABLE ACCOUNT THROUGH IN APP SALES</h3>
                        <p className="font-toony text-white text-sm text-center">
                            Unlock exclusive features and benefits by upgrading your account through in-App purchases. Enjoy enhanced capabilities and perks with each tier upgrade.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-mario text-[#00E0FF] text-xl text-center mb-1">BOOST LEVELS THROUGH PURCHASES</h3>
                        <p className="font-toony text-white text-sm text-center">
                            Quickly level up your avatar with in-App purchases. Gain advanced skills and abilities to stay ahead in the game.
                        </p>
                    </div>
                </motion.div>

                {/* Mobil Telefon Görseli 2 */}
                <motion.div
                    className="relative w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={handPhoneLeft} alt="Game Interface" className="w-full max-w-[300px] mx-auto" />
                </motion.div>
            </div>

            {/* Masaüstü container - mevcut tasarım */}
            <div className="hidden lg:block">
                {/* Mevcut masaüstü içeriği */}
                <div className="container mx-auto px-4 mb-32">
                    <motion.h2
                        className="font-mario text-yellow-400 text-3xl text-center mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        ROCKING THE SOL ECOSYSTEM
                    </motion.h2>
                    <motion.h1
                        className="font-mario text-white text-5xl md:text-7xl text-center mb-32"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        WHY ARE YOU GOING TO WIN WITH US?
                    </motion.h1>

                    <div className="flex flex-col lg:flex-row items-start justify-between relative">
                        {/* Sol Kısım - Özellikler */}
                        <motion.div
                            className="lg:w-1/3 space-y-12 mt-12 lg:mt-0 z-10"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div>
                                <h3 className="font-mario text-[#00E0FF] text-3xl mb-2">VIRAL MARKETING PLAN</h3>
                                <p className="font-toony text-white text-lg">Implementing a strategic plan to ensure widespread reach and engagement.</p>
                            </div>
                            <div>
                                <h3 className="font-mario text-[#00E0FF] text-3xl mb-2">EXPERIENCED TEAM</h3>
                                <p className="font-toony text-white text-lg">Our top execution team has extensive experience in crypto marketing.</p>
                            </div>
                            <div>
                                <h3 className="font-mario text-[#00E0FF] text-3xl mb-2">PROVEN SUCCESS</h3>
                                <p className="font-toony text-white text-lg">Successfully marketed top cryptos into the millions.</p>
                            </div>
                            <div>
                                <h3 className="font-mario text-[#00E0FF] text-3xl mb-2">GLOBAL INFLUENCER NETWORK</h3>
                                <p className="font-toony text-white text-lg">Connected to top live streamers and mainstream influencers worldwide.</p>
                            </div>
                        </motion.div>

                        {/* Sağ Telefon */}
                        <motion.div
                            className="lg:w-1/2 absolute right-0 -top-40 lg:-right-20"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src={handPhoneRight} alt="Game Map" className="w-full" />
                        </motion.div>
                    </div>
                </div>

            </div>

            {/* Alt Bölüm */}
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between relative">
                    {/* Sol Telefon */}
                    <motion.div
                        className="lg:w-1/2 lg:-left-20 relative mb-20 lg:mb-0"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Bulut Efekti */}

                        <img src={handPhoneLeft} alt="Game Interface" className="w-full" />
                    </motion.div>

                    {/* Sağ İçerik */}
                    <motion.div
                        className="lg:w-1/2 space-y-12 lg:pl-20"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            className="font-mario text-yellow-400 text-4xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            COMBINE TWO HUGE MARKETS
                        </motion.h2>
                        <motion.h1
                            className="font-mario text-white text-6xl md:text-8xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            IN APP SALE
                        </motion.h1>

                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h3 className="font-mario text-[#00E0FF] text-3xl mb-4">UPGRADEABLE ACCOUNT THROUGH IN APP SALES</h3>
                                <p className="font-toony text-white text-xl">
                                    Unlock exclusive features and benefits by upgrading your account through in-App purchases. Enjoy enhanced capabilities and perks with each tier upgrade.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h3 className="font-mario text-[#00E0FF] text-3xl mb-4">BOOST LEVELS THROUGH PURCHASES</h3>
                                <p className="font-toony text-white text-xl">
                                    Quickly level up your avatar with in-App purchases. Gain advanced skills and abilities to stay ahead in the game.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
        
            

        </div>
            
        </section >
    );
};

export default WhyWinSection; 