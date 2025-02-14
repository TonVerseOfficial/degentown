import React, { useState, useEffect } from 'react';
import Section from '../Layout/Section';
import { motion } from 'framer-motion';
import LoadingSpinner from '../Common/LoadingSpinner';
import logoImage from '../../assets/images/degen-logo.webp';
import backgroundImage from '../../assets/images/bkg.webp';
import { URLS } from '../../config/urls';

// Round bilgilerini içeren interface
interface RoundInfo {
  date: Date;
  roundNumber: number;
  bonusPercentage: number;
}

// Tüm round bilgilerini tanımla
const ROUND_INFO: RoundInfo[] = [
  {
    date: new Date('2025-02-13T00:00:00Z'), // Sabit başlangıç tarihi
    roundNumber: 1,
    bonusPercentage: 50
  },
  {
    date: new Date('2025-03-14T00:00:00Z'), // İlk rounddan 30 gün sonra
    roundNumber: 2,
    bonusPercentage: 40
  },
  {
    date: new Date('2025-04-14T00:00:00Z'), // İkinci rounddan 30 gün sonra
    roundNumber: 3,
    bonusPercentage: 25
  },
  {
    date: new Date('2025-05-14T00:00:00Z'), // Üçüncü rounddan 30 gün sonra
    roundNumber: 4,
    bonusPercentage: 20
  }
];

// TimeLeft tipini tanımla
type TimeUnit = 'days' | 'hours' | 'minutes' | 'seconds';
type TimeLeft = Record<TimeUnit, number>;

const HeroSection: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [currentRound, setCurrentRound] = useState<RoundInfo>(() => {
    const now = new Date();
    const nearestRound = ROUND_INFO.reduce((prev, curr) => {
      return (curr.date > now && (!prev || curr.date < prev.date)) ? curr : prev;
    }, null as RoundInfo | null);
    return nearestRound || ROUND_INFO[0];
  });

  useEffect(() => {
    if (!currentRound) return;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = currentRound.date.getTime() - now;

      if (distance < 0) {
        const nextRounds = ROUND_INFO.filter(round => round.date.getTime() > now);
        if (nextRounds.length > 0) {
          const newRound = nextRounds[0];
          setCurrentRound(newRound);
          
          const newDistance = newRound.date.getTime() - now;
          const days = Math.floor(newDistance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((newDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((newDistance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((newDistance % (1000 * 60)) / 1000);
          
          setTimeLeft({ days, hours, minutes, seconds });
        } else {
          clearInterval(timer);
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentRound]);

  useEffect(() => {
    // Arka plan görüntüsünü önden yükle
    const bgImg = new Image();
    bgImg.src = backgroundImage;
    bgImg.onload = () => setBackgroundLoaded(true);

    // Logo görüntüsünü önden yükle
    const logo = new Image();
    logo.src = logoImage;
    logo.onload = () => setLogoLoaded(true);
  }, []);

  // Tüm görseller yüklendiğinde
  useEffect(() => {
    if (logoLoaded && backgroundLoaded) {
      setImagesLoaded(true);
    }
  }, [logoLoaded, backgroundLoaded]);

  if (!imagesLoaded) {
    return (
      <div className="absolute inset-0 min-h-screen bg-degen-blue flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 min-h-screen">
      {/* Arka plan */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-black bg-opacity-100"
        style={{ backgroundImage: `url(${backgroundImage})`,
          backgroundBlendMode: 'hue',
          backgroundColor: 'rgba(0, 0, 0, 0.2)'
         }}
      />

      {/* İçerik */}
      <Section className="relative z-10 min-h-screen flex flex-col justify-between overflow-hidden">
        {/* Countdown Modal */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-full px-4 sm:px-8 md:px-16 lg:px-24 mt-10">
          <motion.div
            initial={{ opacity: 0.8, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/25 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8 text-center modal-gradient-border"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-mario text-white mb-4 drop-shadow-lg"
                style={{
                  WebkitTextStroke: '1px #FFD900',
                }}>
              ROUND #{currentRound.roundNumber} CLOSES IN
            </h2>
            
            <div className="inline-flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8 mb-4 sm:mb-6 md:mb-8 bg-black/20 backdrop-blur-md rounded-3xl p-2 sm:p-3 md:p-4">
              {(['days', 'hours', 'minutes', 'seconds'] as TimeUnit[]).map((unit) => (
                <div className="text-center px-2 sm:px-3" key={unit}>
                  <div className="text-4xl sm:text-5xl md:text-7xl font-digital text-white mb-1 sm:mb-2 tracking-wider">
                    {String(timeLeft[unit]).padStart(2, '0')}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white">{unit.toUpperCase()}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-mario text-white mb-4 sm:mb-6 md:mb-8 drop-shadow-lg"
                  style={{
                    WebkitTextStroke: '1px #FFD900',
                  }}>
                BE EARLY
                <br />
                GET {currentRound.bonusPercentage}% BONUS TOKENS NOW
              </h2>
              
              <div className="text-3xl sm:text-4xl md:text-5xl font-mario text-[#FFD900]"
                   style={{ WebkitTextStroke: '1px white' }}>
                SEND SOL TO:
              </div>
              <div className="relative flex items-center justify-between bg-[#FFD900] rounded-full py-2 sm:py-3 px-4 sm:px-6 text-white font-mario text-md sm:text-lg md:text-2xl break-all max-w-full mx-4">
                <span className="flex-1 text-center">Hiq3VtW9NiUC2GCBVw59CKGZfK6rNgWFHDaQWQSQvHSc</span>
                <div className="relative">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('Hiq3VtW9NiUC2GCBVw59CKGZfK6rNgWFHDaQWQSQvHSc');
                      const tooltip = document.getElementById('copy-tooltip');
                      if (tooltip) {
                        tooltip.classList.remove('opacity-0');
                        tooltip.classList.add('opacity-100');
                        setTimeout(() => {
                          tooltip.classList.remove('opacity-100');
                          tooltip.classList.add('opacity-0');
                        }, 2000);
                      }
                    }}
                    className="ml-4 text-degen-blue hover:opacity-80 transition-opacity flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                  <div 
                    id="copy-tooltip"
                    className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 transition-opacity duration-300 whitespace-nowrap"
                  >
                    Copied!
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Logo Container */}
        <div className="container mx-auto px-4 z-10 text-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Logo */}
            <motion.img
              src={logoImage}
              alt="Degen Town Logo"
              loading="eager"
              className="w-full max-w-[300px] mx-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </motion.div>
        </div>

        {/* Play Now Button Container */}
        <div className="container mx-auto px-4 z-10 text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button 
              onClick={() => window.open(URLS.TELEGRAM_BOT, '_blank')}
              className="font-mario bg-yellow-400 hover:bg-yellow-500 text-blue-900 
                             px-12 py-4 rounded-full text-2xl shadow-xl 
                             transform hover:scale-105 transition-all duration-200">
              PLAY NOW
            </button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default HeroSection; 