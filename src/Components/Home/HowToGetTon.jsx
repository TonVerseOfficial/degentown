import React from 'react';
import papoTon1 from '../../assets/images/ton2-new.webp';
import tonBig from '../../assets/images/tonlogo.png';
import { Link } from 'react-router-dom';

export default function HowToGetTon() {
    return (
        <>
            <div className='leftSide'>
                <div className='mainTitle mainTitle2 pt-5'>
                    <h6 className='text-start'>THE BLOCKCHAIN</h6>
                    <h5 className='text-start'>HOW TO GET TON?</h5>
                </div>
                <div className="row m-0 flex-md-row flex-column-reverse">
                    <div className="col-lg-6 col-md-6 col-sm-11">
                        <div className="getTonWallet">
                            <img src={papoTon1} alt="" className='' />
                            <div>
                                <h6>GET A TON WALLET</h6>
                                <p>
                                Get a TON wallet. Here on the official <Link to="https://ton.org/en/wallets?locale=en&pagination[limit]=-1">Ton.org</Link>  website you can find out more about the Telegram wallets. We recommend <Link to="https://wallet.tonkeeper.com/">Tonkeeper</Link>.
                                </p>
                            </div>
                        </div>
                        <div className="getTonWallet">
                            <img src={papoTon1} alt="" className='' />
                            <div>
                                <h6>Buy TON from an exchange and send it to your TON wallet. </h6>
                                <p>
                                Ton is listed on all mayor exchanges. Such as Binance, OKX, KuCoin, Bybit.  Check here on <Link to="https://coinmarketcap.com/currencies/toncoin/">Coinmarketcap</Link>. Where you can buy it. After you purchased it we recommend highly to store your Ton on a decentralized wallet. Remember, not your keys, not your coins.
                                </p>
                            </div>
                        </div>
                        <div className="getTonWallet">
                            <img src={papoTon1} alt="" className='' />
                            <div>
                                <h6>Looking to <br /> participate in our <br /> Seed Sale? </h6>
                                <p>
                                Congrats, your Ton are now in your decentralized wallet. Make sure to participate only in our seedsale if you send the funds from a decentralized wallet, like <Link to="https://wallet.tonkeeper.com/">Tonkeeper</Link> or any other supported wallet. Sending funds from an exchange can lead to total loss as the token might not be supported from the exchange! 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 tonBigImgCol">
                        <img src={tonBig} alt="" className='tonBigImg'/>
                    </div>
                </div>
            </div>
        </>
    );
}
