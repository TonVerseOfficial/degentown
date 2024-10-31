import React from 'react';
import user from '../../assets/images/users.svg';
import dollar from '../../assets/images/icon.svg';
import cart from '../../assets/images/cart1.svg';
import dollar1 from '../../assets/images/dollar.svg';
import secu from '../../assets/images/secu.svg';
export default function Summary() {
    return (
        <>
            <div className='manageSection' style={{ position : 'relative' }}>
                <div className='mainTitle pt-sm-3 pt-4'>
                    <h6 className='text-start'>summary</h6>
                    <h5 className='text-start potentialText'>THE EXECUTION</h5>
                </div>
                <div className="row phaseRow">
                    <div className="col-lg-3 col-md-6 mt-lg-5 mt-4">
                        <div className="summaryCard">
                            <img src={user} alt="" />
                            <h1>1. Phase</h1>
                            <h2>Building Initial
                                Community and Tech</h2>
                            <p>Engage web3 insiders and target 1M users within the app. Airdrop Season 1. Seed Sale is open for our early supporters.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-lg-5 mt-4">
                        <div className="summaryCard">
                            <img src={dollar} alt="" />
                            <h1>2. Phase</h1>
                            <h2>User Growth via Gameplay & Gamification</h2>
                            <p>Launch the slice2earn game and implement engaging gameplay mechanics. Airdrop Season 2.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-lg-5 mt-4">
                        <div className="summaryCard cartCard">
                            <img src={cart} alt="" />
                            <h1>3. Phase</h1>
                            <h2>MARKETING HYPE &
                                RESALE</h2>
                            <p>Generate buzz through influencer promotions and conduct a presale of $PAPO tokens. Airdrop Season 2.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-lg-5 mt-4" style={{ position : "relative" }}>
                    <img src={secu} alt="" className='securImg securImg2 d-sm-none d-block'/>
                        <div className="summaryCard summaryCard2">
                            <img src={dollar1} alt="" />
                            <h1>4. Phase</h1>
                            <h2>LAUNCH OF THE PAPO TOKEN</h2>
                            <p>Officially launch the $PAPO token and integrate it into the game for broader use.</p>
                        </div>
                    </div>
                </div>
                <img src={secu} alt="" className='securImg d-sm-block d-none'/>
            </div>
        </>
    );
}
