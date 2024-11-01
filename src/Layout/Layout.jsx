import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Marquee from '../Components/Home/Marquee';
import { Outlet } from 'react-router-dom';

export default function Layout() {

    const [raisedAmount, setRaisedAmount] = useState(700000);
    const [totalUsers, setTotalUsers] = useState(865);

    useEffect(() => {
        fetch("https://telegram-bot-degen-town.replit.app/api/total-deposits")
            .then(response => response.json())
            .then(data => setRaisedAmount(data.totalDepositsInUsd));

        fetch("https://telegram-bot-degen-town.replit.app/api/player-count")
            .then(response => response.json())
            .then(data => setTotalUsers(data.count));

    }, []);

    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = 0;
            if (window.scrollY > threshold) {
                setIsHeaderFixed(true);
            } else {
                setIsHeaderFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
           
            <div className='marqueeSection1'>
            <Marquee speed={1} raisedAmount={raisedAmount} totalUsers={totalUsers}/>
            </div>
            <Header isHeaderFixed={isHeaderFixed} />
            <div className='layout-container'>
                <Outlet context = {raisedAmount}/>
            </div>
            <Footer />
        </>
    );
}
