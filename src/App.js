import logo from './logo.svg';
import './App.css';
import WelcomePage from './components/WelcomePage';

import Marquee from './components/Marquee';
import Header from './components/Header';
import OurMission from './components/OurMission';
import telegramLogo from "./assets/images/telegramLogo.png";
import twitterLogo from "./assets/images/twitterLogo.png";


function App() {
  return (
    <div className='flex flex-col  bg-[#5AC8FA] min-h-screen'>
      <Header />
      <div 
      className='hidden md:block'>
      <Marquee />
      </div>
      <WelcomePage />
      <div
        className='flex items-center justify-center'>
        {/* Social Media Icons */}

        <div className="flex flex-row  space-x-2 md:space-x-10  mt-20 md:mt-32">
          <a href="https://x.com/degentown_ton" target="_blank" rel="noreferrer">
            <img
              src={twitterLogo}
              alt="Twitter Logo"
              className="w-10 h-10 mx-2"
            />
          </a>
          <a href="https://t.me/degentown_ton" target="_blank" rel="noreferrer">
            <img
              src={telegramLogo}
              alt="Telegram Logo"
              className="w-10 h-10 mx-2"
            />

          </a>
        </div>
      </div>


      <div
        className='flex md:hidden items-center justify-center mt-4'>
        <div className="flex flex-col text-white text-xl  space-y-2">
          <div className='text-center font-mario'>

            DEGEN TOWN

          </div>

          <div className='text-center  text-lg font-serif'>

            www.degentown.io

          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
