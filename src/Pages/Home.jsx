import React from 'react'
import Header from '../Components/Header/Header'
import HomeHero from '../Components/Home/HomeHero'
import OurMission from '../Components/Home/OurMission'
import RockingTon from '../Components/Home/RockingTon'
import ThePotential from '../Components/Home/ThePotential'
import MemeUniverse from '../Components/Home/MemeUniverse'
import FirstOver from '../Components/Home/FirstOver'
import TheBlockchain from '../Components/Home/TheBlockchain'
import HowToGetTon from '../Components/Home/HowToGetTon'
import NinjaUniverse from '../Components/Home/NinjaUniverse'
import WinWithUs from '../Components/Home/WinWithUs'
import WeGotYour from '../Components/Home/WeGotYour'
import OurTopProject from '../Components/Home/OurTopProject'
import Summary from '../Components/Home/Summary'
import Roadmap from '../Components/Home/Roadmap'
import TokenoMics from '../Components/Home/TokenoMics'
import Listing from '../Components/Home/Listing'
import Backers from '../Components/Home/Backers'
import AirDrop from '../Components/Home/AirDrop'
import { useOutletContext } from 'react-router-dom'
import HowToDegen from '../Components/Home/HowToDegen'

export default function Home() {
    
    const raisedAmount = useOutletContext();

    return (
        <div className='layoutContainer'>
            <HomeHero />
            <OurMission/>
            <RockingTon />
            <ThePotential />
            <MemeUniverse />
            <FirstOver />
            <HowToDegen />
            <TheBlockchain />
            <HowToGetTon />
            <NinjaUniverse />
            <WinWithUs />
             
            <OurTopProject raisedAmount={raisedAmount}/>
            
            <Roadmap />
            <TokenoMics />
            <Listing />
            
            <AirDrop />
        </div>
    )
}
