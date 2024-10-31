import React from 'react';
import project1 from '../../assets/images/project1.svg';
import project2 from '../../assets/images/project2.svg';
import project3 from '../../assets/images/project3.svg';
import project4 from '../../assets/images/project4.svg';
import project5 from '../../assets/images/project5.svg';
import project6 from '../../assets/images/project6.svg';
import winWithUsImg from '../../assets/images/winWithUsImg.png';
import { Link } from 'react-router-dom';

export default function WeGotYour() {
    return (
        <>
            <div className='leftSide mt-xxl-5 mt-4'>
                <div className='mainTitle pt-3'>
                    <h5 className='text-center'>WE GOT YOUR BACK!</h5>
                    <p>
                        We are here to build a legacy!
                    </p>
                    <p>
                        We are an experienced team launched multiple <br className='d-sm-block d-none' /> projects into the millions!
                    </p>
                </div>
                <div className='projectSec'>
                    <div className='projectCardSec'>
                        <div className="headerTxt">
                            <Link to="https://coinmarketcap.com/currencies/super-trump-io/">SUPER TRUMP</Link>
                        </div>
                        <img src={project1} alt="" />
                    </div>
                    <div className='projectCardSec'>
                        <div className="headerTxt">
                            <Link to="https://coinmarketcap.com/currencies/gorilla-token/">GORILLA</Link>
                        </div>
                        <img src={project2} alt="" />
                    </div>
                    <div className='projectCardSec'>
                        <div className="headerTxt">
                            <Link to="https://coinmarketcap.com/currencies/kek/">KEKE</Link>
                        </div>
                        <img src={project3} alt="" />
                    </div>
                </div>
                <div className='projectSec projectSec2'>
                    <div className='projectCardSec'>
                        <div className="headerTxt">
                            <Link to="https://coinmarketcap.com/currencies/pandaswapsol/">PANDA SWAP</Link>
                        </div>
                        <img src={project4} alt="" />
                    </div>
                    <div className='projectCardSec'>
                        <div className="headerTxt">
                            <Link to="https://coinmarketcap.com/currencies/meme-ai-token/">MEME AI</Link>
                        </div>
                        <img src={project5} alt="" />
                    </div>
                    <img src={project6} alt="" className='projectLast' />
                </div>
                <div className='d-sm-none d-block'>
                    <div className="row m-0 projectLastCol">
                        <div className="col-6 mt-3 col-custom">
                            <div className='projectCardSec'>
                                <div className="headerTxt">
                                    <Link to="https://coinmarketcap.com/currencies/super-trump-io/">SUPER TRUMP</Link>
                                </div>
                                <img src={project1} alt="" />
                            </div>
                        </div>
                        <div className="col-6 mt-3 col-custom">
                            <div className='projectCardSec'>
                                <div className="headerTxt">
                                    <Link to="https://coinmarketcap.com/currencies/gorilla-token/">GORILLA</Link>
                                </div>
                                <img src={project2} alt="" />
                            </div>
                        </div>
                        <div className="col-6 mt-3 col-custom">
                            <div className='projectCardSec'>
                                <div className="headerTxt">
                                    <Link to="https://coinmarketcap.com/currencies/kek/">KEKE</Link>
                                </div>
                                <img src={project3} alt="" />
                            </div>
                        </div>
                        <div className="col-6 mt-3 col-custom">
                            <div className='projectCardSec'>
                                <div className="headerTxt">
                                    <Link to="https://coinmarketcap.com/currencies/pandaswapsol/">PANDA SWAP</Link>
                                </div>
                                <img src={project4} alt="" />
                            </div>
                        </div>
                        <div className="col-6 mt-3 col-custom">
                            <div className='projectCardSec'>
                                <div className="headerTxt">
                                    <Link to="https://coinmarketcap.com/currencies/meme-ai-token/">MEME AI</Link>
                                </div>
                                <img src={project5} alt="" />
                            </div>
                        </div>
                        <div className="col-6 mt-3 col-custom">
                            <img src={project6} alt="" className='projectLast'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
