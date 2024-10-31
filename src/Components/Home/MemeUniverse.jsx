import React from 'react';
import potential1 from '../../assets/images/image 18.svg';
import potential2 from '../../assets/images/image 19.svg';
import potential3 from '../../assets/images/image 21.svg';
import potential4 from '../../assets/images/image 20.svg';
import potential5 from '../../assets/images/image 25.svg';
import potential6 from '../../assets/images/image 24.svg';
import home2 from '../../assets/images/home2.png';
import home5 from '../../assets/images/home5.svg';
import { Button } from '@mui/material';

const memeData = [
    { id: 1, img1: potential1, img2: potential2, marketCap: '4.7 B' },
    { id: 2, img1: potential3, img2: potential4, marketCap: '1.3 B' },
    { id: 3, img1: potential5, img2: potential6, marketCap: '231 M' },
];

export default function MemeUniverse() {
    return (
        <div className='memeUniverseSec leftSide'>
            <div className='mainTitle pt-3'>
                <h6 className="text-start">COMBINING TWO HUGE MARKETS</h6>
                <h5 className="text-start"
                 style={{
                    textShadow: "none",
                    color: "#ACD5F4",
                  }}
                  >THE MEME UNIVERSE</h5>
                <p className="text-start">Showcase the success of the biggest meme projects:</p>
            </div>
            <div className='d-md-block d-none'>
                <div className="row m-0 mt-5">
                    {memeData.map(meme => (
                        <React.Fragment key={meme.id}>
                            <div className="col-lg-4 col-md-5 col-sm-6 mt-4">
                                <div className="memeImgCard">
                                    <img src={meme.img1} alt={`Potential ${meme.id} Img1`} className='trackImg1' />
                                    <img src={meme.img2} alt={`Potential ${meme.id} Img2`} className='trackImg2' />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 mt-4">
                                <div className="memeCard">
                                    <h5>MARKETCAP</h5>
                                    <h6>{meme.marketCap}</h6>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-3 mt-4 d-md-block d-none"></div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className='d-md-none d-block'>
                
                <div className="row m-0">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-5 mt-4">
                        <div className='mark1'>
                            <div className="memeCard h-auto">
                                <h5>MARKETCAP</h5>
                                <h6>4.7 B</h6>
                            </div>
                            <div className="memeCard h-auto">
                                <h5>MARKETCAP</h5>
                                <h6>1.3 B</h6>
                            </div>
                            <div className="memeCard h-auto">
                                <h5>MARKETCAP</h5>
                                <h6>231 B</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-7 mt-4 backColor">
                        <div className="marketCapCol">
                            <img src={home2} alt="" />
                        </div>
                    </div>
                    <div className="col-12 p-0">
                        <div className="row m-0">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-5">
                                <div className='mt-3'>
                                    <img src={potential1} alt="" className='trackImg1'/>
                                </div>
                                <div className='mt-3'>
                                    <img src={potential3} alt="" className='trackImg1'/>
                                </div>
                                <div className='mt-3'>
                                    <img src={potential5} alt="" className='trackImg1'/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-7 ps-0 backColor">
                                <div className="mt-3">
                                    <img src={potential2} alt="" className='trackImg2'/>
                                </div>
                                <div className="mt-3">
                                    <img src={potential4} alt="" className='trackImg2'/>
                                </div>
                                <div className="mt-3">
                                    <img src={potential6} alt="" className='trackImg2'/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
