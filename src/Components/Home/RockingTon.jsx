import React from 'react';
//import papo from '../../assets/images/papo.svg';
import magnet from '../../assets/images/magnet.svg';
import hammer from '../../assets/images/hammer.svg'; 
import papo1 from '../../assets/images/papo1.svg';
import papo2 from '../../assets/images/papo2.svg';
import papo3 from '../../assets/images/papo3.svg';
import papo4 from '../../assets/images/papo4.svg';

import degenPeople1 from '../../assets/images/degenPeople1.png';
import degenPeople2 from '../../assets/images/degenPeople2.png';
import degenPeople3 from '../../assets/images/degenPeople3.png';
import degenPeople4 from '../../assets/images/degenPeople4.png';

import papo5 from '../../assets/images/12.png';
import { Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function RockingTn() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        window.location.href = "https://t.me/papo_official_bot"; // Navigate to the external link
    };
    return (
        <>
            <div className='manageWidth marginSet'>
                <div className='mainTitle'>
                    <h6>ROCKING THE TON ECOSYSTEM</h6>
                    <h5>THE FIRST Match-3 GAME</h5>
                    <p>JOIN NOW THE DEGEN UNIVERSE AND WIN WITH THE WINNER TEAM</p>
                </div>
            </div>
            <div className='container'>
                <div className='includeSection'>
                    <img src={magnet} alt="" className='papoImg1' />
                    <img src={hammer} alt="" className='papoImg2 d-md-block d-none' />
                    <img src={hammer} alt="" className='papoImg2 d-md-none d-block' />
                    <div className='mainTitle'>
                        <p className='commingDesc'>OUR FIRST LAUNCHE INCLUDE</p>
                    </div>
                    <div className='row mx-0 mt-sm-0 mt-5 '>
                        {[
                            { imgSrc: magnet, title: 'SEASON ONE', additionalImg: degenPeople1, status: 'CLOSED' },
                            { imgSrc: magnet, title: 'SEASON TWO', additionalImg: degenPeople2, status: 'CLOSED' },
                            { imgSrc: magnet, title: 'SEASON TREE', additionalImg: degenPeople3, status: 'CLOSED' },
                            { imgSrc: magnet, title: 'GAME & TGE', additionalImg: degenPeople4, status: 'LIVE' }
                        ].map((card, index) => (
                            <div className='col-lg-3 col-md-3 col-sm-3 col-6 mt-sm-3 mt-2 proCard col-custom' key={index}>
                                <div className='includeCard'>
                                    <div className='includeCardContent'>
                                        <div className='cardHeader'>
                                            <h3>{card.title}</h3>
                                        </div>
                                        <img src={card.additionalImg} alt={`${card.title} additional`}
                                        />
                                    </div>
                                    {card.status && <h4>{card.status.split(' ').map((line, i) => <React.Fragment key={i}>{line} <br /></React.Fragment>)}</h4>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <Button
                        variant='contained'
                        className='claimBtn playNowBtn'
                        onClick={handleButtonClick}
                    >
                        PLAY NOW
                    </Button>
                </div>
            </div>
        </>
    );
}
