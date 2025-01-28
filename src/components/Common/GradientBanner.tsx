import React from 'react';
import { motion } from 'framer-motion';

interface GradientBannerProps {
  leftText: string;
  rightText: string;
  leftImage: string;
  centerImage: string;
  rightImage: string;
  topColor?: string;
  bottomColor?: string;
  className?: string;
}

const GradientBanner: React.FC<GradientBannerProps> = ({ 
  leftText,
  rightText,
  leftImage,
  centerImage,
  rightImage,
  topColor = "#2526B1",
  bottomColor = "#2526B1",
  className = ""
}) => {
  return (
    <div className={`relative w-screen h-48 ${className}`}>
      {/* Üst renk dolgusu */}
      <div 
        className="absolute top-0 left-0 right-0 h-1/2"
        style={{ backgroundColor: topColor }}
      />

      {/* Alt renk dolgusu */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/2"
        style={{ backgroundColor: bottomColor }}
      />

      {/* Sarı banner container */}
      <div className="absolute inset-0 w-full h-full overflow">
        {/* Sarı banner ve içerik */}
        <div 
          className="absolute left-1/2 w-[200%] h-48 -translate-x-1/2 -rotate-6 origin-center"
          style={{
            background: 'linear-gradient(90deg, #FED702 0%, #FDBA1C 100%)',
          }}
        >
          {/* İçerik container - aynı rotasyonda */}
          <div className="relative w-1/2 h-full left-1/4">
            <div className="container mx-auto h-full px-4">
              <div className="hidden md:flex items-center justify-between h-full">
                <div className="flex items-center space-x-6">
                  <motion.img
                    src={leftImage}
                    alt="Left Icon"
                    className="w-20 h-20"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="font-mario text-blue-900 text-3xl">{leftText}</span>
                </div>
                <motion.img
                  src={centerImage}
                  alt="Center Icon"
                  className="w-24 h-24"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0] 
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="flex items-center space-x-6">
                  <span className="font-mario text-blue-900 text-3xl">{rightText}</span>
                  <motion.img
                    src={rightImage}
                    alt="Right Icon"
                    className="w-20 h-20"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </div>
              {/* Mobil banner içeriği */}
              <div className="flex md:hidden items-center justify-between h-full">
                <span className="font-mario text-blue-900 text-xl">{leftText}</span>
                <span className="font-mario text-blue-900 text-xl">{rightText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientBanner; 