import { useState, useEffect } from 'react';

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
    date: new Date('2025-03-30T00:00:00Z'), // İkinci rounddan 15 gün sonra
    roundNumber: 3,
    bonusPercentage: 30
  },
  {
    date: new Date('2025-04-14T00:00:00Z'), // Üçüncü rounddan 15 gün sonra
    roundNumber: 4,
    bonusPercentage: 25
  },
  {
    date: new Date('2025-04-29T00:00:00Z'), // Dördüncü rounddan 15 gün sonra
    roundNumber: 5,
    bonusPercentage: 20
  },
  {
    date: new Date('2025-05-14T00:00:00Z'), // Beşinci rounddan 15 gün sonra
    roundNumber: 6,
    bonusPercentage: 15
  }
];


type TimeUnit = 'days' | 'hours' | 'minutes' | 'seconds';
type TimeLeft = Record<TimeUnit, number>;

const Timer = () => {
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
          setTimeLeft({
            days: Math.floor(newDistance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((newDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((newDistance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((newDistance % (1000 * 60)) / 1000)
          });
        } else {
          clearInterval(timer);
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentRound]);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <div 
      data-timer 
      className="fixed top-0 left-0 right-0 bg-yellow-400 py-2 text-center z-[51] font-bold border-b-2 border-yellow-600 shadow-md"
    >
      <div className="flex flex-row items-center justify-center gap-12">
        {/*<div className="text-xl font-mario text-blue-900">
          ROUND #{currentRound.roundNumber} CLOSES IN
        </div>*/}
        <div className="flex justify-center items-center">
          {(['days', 'hours', 'minutes', 'seconds'] as TimeUnit[]).map((unit) => (
            <div className="text-center px-2" key={unit}>
              <div className="text-lg md:text-2xl font-digital text-blue-900 tracking-wider">
                {formatNumber(timeLeft[unit])}
              </div>
              <div className="text-[10px] md:text-xs font-bold text-blue-900">{unit.toUpperCase()}</div>
            </div>
          ))}
        </div>
       {/* <div className="text-lg font-mario text-blue-900">
          {currentRound.bonusPercentage}% BONUS
        </div>*/}
      </div>
    </div>
  );
};

export default Timer; 
