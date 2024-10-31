import React from 'react';
import potentialLi from '../../assets/images/userLiRounded.png';
import home3 from '../../assets/images/home3.svg';
import home4 from '../../assets/images/home4.svg';
import phoneApp from '../../assets/images/phoneApp.png';
export default function FirstOver() {
    return (
        <>
            <div className='marketsSec leftSide' id='firstMovers'>
                <div style={{ position: 'relative',  display : "flex" }}>
                    <div className='mainTitle pt-3 mainTitle01'>
                        <h6 className='text-start'>COMBINING TWO HUGE MARKETS</h6>
                        <h5 className='text-start potentialText'
                          style={{
                            textShadow: "none",
                            color: "#ACD5F4",
                          }}
                        >WE ARE THE FIRST MOVER</h5>
                    </div>
                </div>
                <div className="thePatentialContent mt-5 d-md-block d-none">
                    <div className='hugeContent hugeContentSec02'>
                        <img src={potentialLi} alt="" className='coinLogo' />
                        <div>
                            <h2>Pioneering Innovation in Gaming</h2>
                            <p>
                            We are the first to bring Meme themed Match-3 game to the Telegram app ecosystem, combining meme culture with game mechanics. This creates the next gaming meta and captures millions of users quickly.
                            </p>
                        </div>
                    </div>
                    <div className='hugeContent mt-5 hugeContentSec02'>
                        <img src={potentialLi} alt="" className='coinLogo' />
                        <div>
                            <h2>APPS GAINING MILLIONS OF USERS</h2>
                            <p>
                                Notcoin and Hamster Kombat are leading the way, gaining hundreds of millions of users and becoming the fastest-growing niche in tech. We aim to replicate their success by introducing a new META within Telegram apps.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='d-md-none d-block'>
                    <div className="row m-0">
                        <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                            <div className='col1'>
                                <img src={phoneApp} alt="" className='home4' />
                            </div>
                        </div>
                        {/* <div className="col-lg-6 col-md-6 col-sm-6 col-7 backColor">
                            <div className='col2'>
                                <img src={home3} alt="" className='home3' />
                            </div>
                        </div> */}
                        <div className="col-lg-11 col-md-11 col-sm-11 col-12">
                            <div className="thePatentialContent thePatentialContent1 mt-5">
                                <div className='hugeContent'>
                                    <img src={potentialLi} alt="" className='coinLogo' />
                                    <div>
                                        <h2>Pioneering Innovation in Gaming</h2>
                                        <p>
                                        We are the first to bring Meme themed Match-3 game to the Telegram app ecosystem, combining meme culture with game mechanics. This creates the next gaming meta and captures millions of users quickly.
                                        </p>
                                    </div>
                                </div>
                                <div className='hugeContent mt-sm-5 mt-4'>
                                    <img src={potentialLi} alt="" className='coinLogo' />
                                    <div>
                                        <h2>APPS GAINING MILLIONS OF USERS</h2>
                                        <p>
                                            Notcoin and Hamster Kombat are leading the way, gaining hundreds of millions of users and becoming the fastest-growing niche in tech. We aim to replicate their success by introducing a new META within Telegram apps.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
