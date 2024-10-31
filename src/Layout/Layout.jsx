import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Marquee from '../Components/Home/Marquee';
import { Outlet } from 'react-router-dom';

export default function Layout() {

    const [raisedAmount, setRaisedAmount] = useState(700000);
    const [totalUsers, setTotalUsers] = useState(590000);

    useEffect(() => {
        fetch("https://vds.mertcantoglu.xyz/crypto-api/income")
            .then(response => response.json())
            .then(data => setRaisedAmount(data.total_income_usd));

        fetch("https://frontend.papo.ninja/api/system/status")
            .then(response => response.json())
            .then(data => setTotalUsers(data.data.users));

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
