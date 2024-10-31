import React from 'react';
//import ton1 from '../../assets/images/ton1.svg';
import ton1 from '../../assets/images/ton2new.png';
import ton2 from '../../assets/images/ton1new.png';


export default function TheBlockchain() {
    return (
        <>
            <div className='leftSide whyAreSec'>
                <div className='mainTitle pt-5'>
                    <h6 className='text-center'>THE BLOCKCHAIN</h6>
                    <h5 className='text-center'>WHY ARE WE BUILDING ON TON</h5>
                </div>
                <div className='boostDesc'>
                    <h6>UPCOMING IPO RUMORS OF TELEGRAM</h6>
                    <p>
                        Potential Telegram IPO could drive huge hype and boost market presence.
                    </p>
                </div>
                <div className='boostDesc'>
                    <h6>TELEGRAM BECOMING WECHAT OF THE WEST</h6>
                    <p>
                        Telegram is positioning itself to compete with WeChat by expanding into e-commerce, becoming a bigger social media platform, and enabling payments via cryptocurrency, specifically using TON.
                    </p>
                </div>
                <div className='boostDesc'>
                    <h6>THE UNDERDOG TON</h6>
                    <p>
                        The 900 Million Telegram Users are potential TON users. Based on our analytics TON is heavily undervalued and has as well no MASCOT Meme yet. Degen Town is set to become the TON Meme.
                    </p>
                </div>
            </div>
            <div className='telegramChainSec'>
                <img src={ton2} alt=""  className='ton1Img tonImg1 ' />
                <div className='boostDesc boostDesc2'>
                    <h6>TON - THE TELEGRAM CHAIN</h6>
                    <h1>900M</h1>
                    <h2>users on Telegram</h2>
                </div>
            
                <img src={ton1} alt=""  className='ton1Img tonImg2'/>

            </div>
        </>
    );
}
