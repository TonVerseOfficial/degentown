import React from "react";
import potentialLi from "../../assets/images/Coin.svg";
import Honey2 from "../../assets/images/honeystone.png";

const Styledh = ({ children }) => {
  return (
    <div className="hugeContent">
    <h2
    className="text-start"
      style={{
        fontFamily: "Dela Gothic One",
      }}
    >
      {children}
    </h2>
    </div>
  );
};

export default function Listing() {
  return (
    <>
      <div className="manageWidth manageSection listingSec">
        <div className="mainTitle pt-3">
          <h6 className="text-center">GOING LIVE</h6>
          <h5 className="text-center">THE LISTING</h5>
        </div>
        <div className="row m-0">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-sm-5 mt-4">
            <div className="hugeContent">
              <img src={potentialLi} alt="" className="coinLogo" />
              <div>
                <Styledh>TOP TIER EXCHANGE LISTINGS</Styledh>
                <p>
                  Degen Town Tokens will be listed on major exchanges, making it
                  easy to buy, sell, and trade globally.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-sm-5 mt-4">
            <div className="hugeContent hugeContent03">
              <div>
                <Styledh>PARTNERSHIPS WITH CRYPTO INFLUENCERS</Styledh>
                <p>
                  We’re teaming up with leading crypto influencers to spread the
                  word about Degen Town and drive engagement.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-sm-5 mt-4">
            <div className="hugeContent">
              <img src={potentialLi} alt="" className="coinLogo" />
              <div>
                <Styledh>CRYPTO TRENDINGS</Styledh>
                <p>
                  We’ll push to get Degen Town trending across top crypto
                  platforms, ensuring visibility and buzz.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-sm-5 mt-4">
            <div className="hugeContent hugeContent03">
              <div>
                <Styledh>MAINSTREAM INFLUENCER PUSH</Styledh>
                <p>
                  We’ll work with mainstream influencers to introduce Degen Town
                  to a broader audience, expanding our reach beyond the crypto
                  space.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-sm-5 mt-4">
            <div className="hugeContent">
              <img src={potentialLi} alt="" className="coinLogo" />
              <div>
                <Styledh>FACTS ABOUT THE LISTING</Styledh>
                <p>
                  Degen Town Tokens will debut with a market cap of 50 million
                  USD and a listing price of 0.05 USD, launching on multiple
                  exchanges.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 honey2ImgCol">
            <img src={Honey2} alt="" className="honey2Img" />
          </div>
        </div>
      </div>
    </>
  );
}
