import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GameStats } from '../../types/api';
import { formatNumber } from '../../services/util';

interface MarqueeTextProps {
  stats: GameStats;
}

const MARQUEE_HEIGHT = 40;
const TIMER_HEIGHT = 48;

const MarqueeText: React.FC<MarqueeTextProps> = ({ stats }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timerHeight, setTimerHeight] = useState(TIMER_HEIGHT);
  const observerRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    const updateTimerHeight = () => {
      const timer = document.querySelector('[data-timer]');
      if (timer) {
        const height = timer.getBoundingClientRect().height;
        setTimerHeight(height);
      }
    };

    // İlk yükleme için timer yüksekliğini al
    updateTimerHeight();

    // ResizeObserver oluştur
    observerRef.current = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const height = entry.borderBoxSize[0]?.blockSize || entry.target.getBoundingClientRect().height;
        setTimerHeight(height);
      }
    });

    // Timer elementini gözlemle
    const timer = document.querySelector('[data-timer]');
    if (timer && observerRef.current) {
      observerRef.current.observe(timer);
    }

    // Scroll event listener
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition < 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Header'a padding ekle/kaldır
    const header = document.querySelector('header');
    if (header) {
      if (isVisible) {
        header.style.paddingTop = `${MARQUEE_HEIGHT}px`;
      } else {
        header.style.paddingTop = '0';
      }
    }
  }, [isVisible]);

  const marqueeItems = [
    `AIRDROP S3 IS LIVE EARN POINTS AND MOVE UP`,
    `BITMART LISTING ANNOUNCEMENT`,
    `FIRST ${formatNumber(stats.degenTownPlayers)} USERS SIGNED UP!`,
    `AIRDROP S3 IS LIVE EARN POINTS AND MOVE UP`,
    `SEED SALE CLOSED WITH ${formatNumber(stats.totalUsdRaised)} RAISED`
  ];

  // Yazıları üç kez tekrarlayalım ki sürekli akış olsun
  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  const shouldHighlight = (text: string) => {
    return text.includes('BITMART') || 
           text.includes('K USERS') || 
           text.includes('K RAISED') ||
           text.includes('LISTING');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: MARQUEE_HEIGHT, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`bg-degen-blue overflow-hidden fixed left-0 right-0 z-[50]`}
          style={{ top: `${timerHeight}px` }}
        >
          <div className="relative h-full flex items-center justify-center overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap gap-8 absolute"
              animate={{
                x: ['-33.33%', '-66.66%']
              }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
              style={{ width: 'fit-content' }}
            >
              {repeatedItems.map((text, index) => (
                <span
                  key={index}
                  className={`font-mario text-sm sm:text-base ${
                    shouldHighlight(text) ? 'text-yellow-400' : 'text-white'
                  }`}
                >
                  {text}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MarqueeText; 