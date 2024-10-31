import React from 'react';
import potentialLi from '../../assets/images/userLiRounded.png';
import winWithUsImg from '../../assets/images/pickaxeDuck.png';

export default function WinWithUs() {
    return (
        <>
            <div className='leftSide mt-sm-5 mt-4'>
                <div className='mainTitle pt-3'>
                    <h5 className='text-center'>WHY ARE YOU GOING TO WIN WITH US?</h5>
                    <div className="hr1 hr2"></div>
                </div>
                <div className="row m-0 flex-md-row flex-column-reverse">
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-md-0 mt-4">
                        <div className="winWithUSContent">
                            <div className='hugeContent'>
                                <img src={potentialLi} alt="" className='coinLogo' />
                                <div>
                                    <h2>Viral Marketing Plan</h2>
                                    <p>
                                        Implementing a strategic plan to ensure widespread reach and engagement.
                                    </p>
                                </div>
                            </div>
                            <div className='hugeContent mt-3'>
                                <img src={potentialLi} alt="" className='coinLogo' />
                                <div>
                                    <h2>Experienced Team </h2>
                                    <p>
                                        Our top execution team has extensive experience in crypto marketing.
                                    </p>
                                </div>
                            </div>
                            <div className='hugeContent mt-3'>
                                <img src={potentialLi} alt="" className='coinLogo' />
                                <div>
                                    <h2>Proven Success</h2>
                                    <p>
                                        Successfully marketed top cryptos into the millions.
                                    </p>
                                </div>
                            </div>
                            <div className='hugeContent mt-3'>
                                <img src={potentialLi} alt="" className='coinLogo' />
                                <div>
                                    <h2>Global Influencer Network</h2>
                                    <p>
                                        Connected to top live streamers and mainstream influencers worldwide.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-md-0 mt-4">
                        <img src={winWithUsImg} alt="" className='winWithUsImg1'/>
                    </div>
                </div>
            </div>
        </>
    );
}
