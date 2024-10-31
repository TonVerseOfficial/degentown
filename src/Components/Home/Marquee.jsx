import React from 'react';

const Marquee = ({raisedAmount , totalUsers}) => {
    const raisedAmountString = `${(raisedAmount / 1000).toFixed(0)}K`
    const totalUsersString = `${(totalUsers / 1000).toFixed(0)}K`
    return (
        <div className="marquee">
            <div className="marquee-content">
                <p className='yellowColor'>First {totalUsersString} USERS SIGNED UP!</p>
                <p>AIRDROP S2 IS LIVE EARN POINTS AND MOVE UP</p>
                <p className='yellowColor'>SEED SALE FIRST {raisedAmountString} RAISED</p>
                <p>AIRDROP S2 IS LIVE EARN POINTS AND MOVE UP</p>
                <p className='yellowColor'>AIRDROP SEASON 2 LIVE</p>
                <p>AIRDROP S2 IS LIVE EARN POINTS AND MOVE UP</p>
                <p className='yellowColor'>AIRDROP SEASON 2 LIVE</p>
                <p>AIRDROP S2 IS LIVE EARN POINTS AND MOVE UP</p>
                <p className='yellowColor'>First {totalUsersString} USERS SIGNED UP!</p>
                <p>AIRDROP S2 IS LIVE EARN POINTS AND MOVE UP</p>
                <p className='yellowColor'>SEED SALE FIRST {raisedAmountString} RAISED</p>
                <p>AIRDROP S2 IS LIVE EARN POINTS AND MOVE UP</p>
                <p className='yellowColor'>AIRDROP SEASON 2 LIVE</p>
                <p>AIRDROP S2 IS LIVE EARN POINTS AND MOVE UP</p>
                <p className='yellowColor'>AIRDROP SEASON 2 LIVE</p>
                <p>AIRDROP S2 IS LIVE EARN POINTS AND MOVE UP</p>

                <p className='yellowColor'>First {totalUsersString} USERS SIGNED UP!</p>
                <p>AIRDROP S2 IS LIVE EARN POINTS AND MOVE UP</p>
                <p className='yellowColor'>SEED SALE FIRST {raisedAmountString} RAISED</p>
                <p>AIRDROP S2 IS LIVE EARN POINTS AND MOVE UP</p>
                <p className='yellowColor'>AIRDROP SEASON 2 LIVE</p>
                <p>AIRDROP S2 IS LIVE EARN POINTS AND MOVE UP</p>
                <p className='yellowColor'>AIRDROP SEASON 2 LIVE</p>
                <p>AIRDROP S2 IS LIVE EARN POINTS AND MOVE UP</p>
            </div>

        </div>
    );
};

export default Marquee;