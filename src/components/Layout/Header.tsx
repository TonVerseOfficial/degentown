import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import logoImage from '../../assets/images/degen-logo.webp';
import { URLS } from '../../config/urls';

const Header: React.FC = () => {
  const menuItems = [
    { title: 'MISSION', to: 'mission-section' },
    { title: 'GAME', to: 'game-section' },
    { title: 'LAUNCH', to: 'launch-section' },
    { title: 'POTENTIAL', to: 'potential-section' },
    { title: 'ROADMAP', to: 'roadmap-section' },
    { title: 'FAIR LAUNCH', to: 'presale-section' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-20 backdrop-blur-md bg-degen-blue bg-opacity-20 backdrop-opacity-35">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src={logoImage}
              alt="Logo"
              className="h-12"
            />
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="font-mario text-white hover:text-yellow-400 cursor-pointer transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>


            <div className="flex items-center space-x-6">
           {/* Buy Button */}
           <motion.button
            onClick={() => window.open('https://www.degentown.io/buy', '_blank')}
            className="bg-yellow-400 hover:bg-yellow-300 text-degen-blue font-mario px-6 py-2 rounded-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
              BUY
          </motion.button>

          {/* Play Now Button */}
          <motion.button
            onClick={() => window.open(URLS.TELEGRAM_BOT, '_blank')}
            className="bg-yellow-400 hover:bg-yellow-300 text-degen-blue font-mario px-6 py-2 rounded-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PLAY NOW
          </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 