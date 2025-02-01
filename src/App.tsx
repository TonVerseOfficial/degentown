import { lazy, useEffect, useState } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeroSection from './components/Sections/HeroSection';
import LazySection from './components/Common/LazySection';
import MarqueeText from './components/Common/MarqueeText';
import { fetchGameStats } from './services/api';
import { GameStats } from './types/api';
import MissionSection from './components/Sections/MissionSection';

// Lazy loaded components
const GameSection = lazy(() => import('./components/Sections/GameSection'));
const LaunchSection = lazy(() => import('./components/Sections/LaunchSection'));
const PotentialSection = lazy(() => import('./components/Sections/PotentialSection'));
const HowToGetSection = lazy(() => import('./components/Sections/HowToGetSection'));
const HowToGetTokenSection = lazy(() => import('./components/Sections/HowToGetTokenSection'));
const WhySolSection = lazy(() => import('./components/Sections/WhySolSection'));
const TelegramUsersSection = lazy(() => import('./components/Sections/TelegramUsersSection'));
const UntappedPowerSection = lazy(() => import('./components/Sections/UntappedPowerSection'));
const WhyWinSection = lazy(() => import('./components/Sections/WhyWinSection'));
const PresaleSection = lazy(() => import('./components/Sections/PresaleSection'));
const RaisedSection = lazy(() => import('./components/Sections/RaisedSection'));
const RoadmapSection = lazy(() => import('./components/Sections/RoadmapSection'));
const ListingSection = lazy(() => import('./components/Sections/ListingSection'));
const PhonesSection = lazy(() => import('./components/Sections/PhonesSection'));
const AirdropSection = lazy(() => import('./components/Sections/AirdropSection'));

function App() {
  const [stats, setStats] = useState<GameStats>({
    degenTownPlayers: 0,
    totalUsdRaised: 0,
    totalSolRaised: 0
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchGameStats();
        setStats(data);
      } catch (error) {
        console.error('Stats yüklenirken hata oluştu:', error);
      }
    };

    loadStats();
  }, []);

  return (
    <div className="relative">
      <MarqueeText stats={stats} />
      <div className="relative">
        {/* Hero bölümü için arka plan ve içerik */}
        <div className="relative min-h-screen">
          <Header />
          <HeroSection />
        </div>
        
        {/* Diğer bölümler */}
        <div className="bg-degen-blue">
          <div id="mission-section">
            <MissionSection stats={stats} />
          </div>
          
          <LazySection id="game-section">
            <GameSection />
          </LazySection>
          
          <LazySection id="launch-section">
            <LaunchSection />
          </LazySection>
          
          <LazySection id="potential-section">
            <PotentialSection />
          </LazySection>
          
          <LazySection>
            <HowToGetSection />
          </LazySection>
          
          <LazySection>
            <HowToGetTokenSection />
          </LazySection>
          
          <LazySection>
            <WhySolSection />
          </LazySection>
          
          <LazySection>
            <TelegramUsersSection />
          </LazySection>
          
          <LazySection>
            <UntappedPowerSection />
          </LazySection>
          
          <LazySection>
            <WhyWinSection />
          </LazySection>
          
          <LazySection id="presale-section">
            <PresaleSection stats={stats} />
          </LazySection>
          
          <LazySection>
            <RaisedSection stats={stats} />
          </LazySection>
          
          <LazySection id="roadmap-section">
            <RoadmapSection />
          </LazySection>
          
          <LazySection>
            <ListingSection />
          </LazySection>
          
          <LazySection>
            <PhonesSection />
          </LazySection>
          
          <LazySection>
            <AirdropSection />
          </LazySection>
          
          <LazySection>
            <Footer />
          </LazySection>
        </div>
      </div>
    </div>
  );
}

export default App;
