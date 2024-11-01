import React, { useEffect, useState } from "react";
import potentialLi from "../../assets/images/RoadMapicon.png";
import upgradeImg from "../../assets/images/phoneApp2.png";
import honey from "../../assets/images/blueMen.png";
import Coin from "../../assets/images/RoadMapicon.png";
import Progress from "../../assets/images/progress.png";
import project5 from "../../assets/images/project5.svg";
import project6 from "../../assets/images/project6.svg";
import winWithUsImg from "../../assets/images/winWithUsImg.png";

const Styledh = ({ children }) => {
  return (
    <h2
      style={{
        fontFamily: "Dela Gothic One",
        fontSize: 45,
        fontWeight: 400,
        lineHeight: "50px",
        textAlign: "left",
        color: "#000000",
      }}
    >
      {children}
    </h2>
  );
};

export default function OurTopProject({ raisedAmount }) {
  const goal = 1500000; // Total Goal
  const progressPercentage = (raisedAmount / goal) * 100;
  return (
    <>
      <div className="leftSide">
        <div className="d-sm-block d-none">
          <div className="d-sm-block d-none">
            <div className="row m-0">
              <div className="col-6 p-0 mt-5">
                <div className="mainTitle pt-4">
                  <h6 className="text-start">COMBINING TWO HUGE MARKETS</h6>
                  <h5 className="text-start">IN APP SALES</h5>
                </div>
                <div className="thePatentialContent mt-xxl-5 mt-4">
                  <div className="hugeContent">
                    <img src={potentialLi} alt="" className="papoLogo" />
                    <div>
                      <Styledh>UPGRADABLE ACCOUNT THROUGH IN APP SALES</Styledh>
                      <p>
                        Unlock exclusive features and benefits by upgrading your
                        account through in-app purchases. Enjoy enhanced
                        capabilities and perks with each tier upgrade.
                      </p>
                    </div>
                  </div>
                  <div className="hugeContent mt-4">
                    <img src={potentialLi} alt="" className="papoLogo" />
                    <div>
                      <Styledh>BOOST LEVELS THROUGH PURCHASES</Styledh>
                      <p>
                        Quickly level up your avatar with in-app purchases. Gain
                        advanced skills and abilities to stay ahead in the game.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0 mt-5">
                <div className="upgradeSec">
                  <img
                    src={upgradeImg}
                    style={{
                      transform: "scale(0.7)",
                    }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="joinTheSpeedSec" id="joinSeedSale">
            <div className="mainTitle joinTheSpeedSTtile pt-0">
              <h6 className="text-center">BECOME AN EARLY SUPPORTER</h6>
              <h5 className="text-center">JOIN THE Presale SALE</h5>
            </div>
            <div className="row m-0">
              <div className="col-6 p-0">
                <div className="thePatentialContent braveContent mt-xxl-5 mt-4">
                  <div className="hugeContent">
                    <img src={Coin} alt="" className="coinLogo" />
                    <div>
                      <Styledh>BECOME A BRAVE NINJA</Styledh>
                      <p>
                        We already raised{" "}
                        {Math.round(raisedAmount).toLocaleString("de-CH")} USD!
                      </p>
                      <p>
                        Join the Presale and be a part of the winning Degen Town
                        team.
                      </p>
                    </div>
                  </div>
                  <div className="hugeContent mt-4">
                    <img src={Coin} alt="" className="coinLogo" />
                    <div>
                      <Styledh>Presale Facts</Styledh>
                      <p>Up to 50 % Discount on TGE</p>
                      <p>Total Raise Amount: 1,500,000 USD</p>
                      <p>
                        Sale Price: Check in our Telegram app for more
                        information.
                      </p>
                    </div>
                  </div>
                  <div className="hugeContent mt-4">
                    <img src={Coin} alt="" className="coinLogo" />
                    <div>
                      <Styledh>Vesting Schedule</Styledh>
                      <p>
                        Linear Vesting: Tokens will be gradually released over a
                        3-month period.
                      </p>
                      <p>
                        Weekly Unlocks: Starting 7 days after trading begins,
                        tokens will be unlocked weekly.
                      </p>
                      <p>
                        Full Release: All tokens will be fully unlocked by the
                        end of the 3-month period.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="upgradeSec honeyImg braveContent">
                  <img src={honey} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="joinTheSpeedSec">
            <div className="joinTheSpeedSTtile mt-xxl-5 mt-4">
              <div className="boostDesc boostDesc2">
                <h6 className="text-start">WE ARE RAISING</h6>
                <h1>USD 3M</h1> {/* Total goal */}
              </div>
              <div className="mainTitle d-flex flex-column align-items-center mt-xxl-5 mt-4 pt-xxl-4 mt-0">
                <p>
                  WE HAVE RAISED SO FAR IN <br className="d-lg-none d-block" />{" "}
                  THE Presale SALE
                </p>
                {/* Dynamic Bar */}
                <div
                  style={{
                    width: "100%",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "25px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${progressPercentage}%`,
                      height: "30px",
                      backgroundColor: "#3498db",
                      borderRadius: "25px",
                    }}
                  ></div>
                </div>
                <p>USD {Math.round(raisedAmount).toLocaleString("de-CH")}</p>{" "}
                {/* Raised Amount */}
              </div>
            </div>
            <div className="row m-0">
              <div className="col-6 p-0">
                <div className="thePatentialContent progressContent mt-xxl-5 mt-4">
                  <div className="hugeContent">
                    <img src={Coin} alt="" className="coinLogo" />
                    <div>
                      <Styledh>5 % OF TOKEN SUPPLY</Styledh>
                      <p>The 5 % of the supply is fully tradable.</p>
                    </div>
                  </div>
                  <div className="hugeContent mt-5 pb-5">
                    <img src={Coin} alt="" className="coinLogo" />
                    <div>
                      <Styledh>10 % OF PROFITS GO INTO A PRESALE POT</Styledh>
                      <p>
                        Contributors in the Presale stage will receive a DEGEN
                        TOWN NFT which can be staked and permit them access to
                        the PRESALE POT. 10% of all profits generated from the
                        game, including earnings from in-app sales, sales of
                        physical products, selling of traffic and revenue from
                        YouTube clicks will be kicked back to the Degen Town
                        community through our token.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="upgradeSec supplyCont progressContent">
                  <h3>5 % TOKEN SUPPLY</h3>
                  <h3>+ 10 % PRESALE POT </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-sm-none d-block">
        <div className="row m-0">
          <div className="col-12 p-0 mt-4">
            <div className="mainTitle pt-4">
              <h6 className="text-start">COMBINING TWO HUGE MARKETS</h6>
              <h5 className="text-start">IN APP SALES</h5>
            </div>
          </div>
        </div>
        <div className="mobileSec mt-4">
          <div className="row m-0">
            <div className="col-12 p-0 mt-0">
              <div className="upgradeSec">
                <img src={upgradeImg} alt="" />
              </div>
            </div>
            <div className="thePatentialContent mt-xxl-5 mt-4">
              <div className="hugeContent">
                <img src={potentialLi} alt="" className="papoLogo" />
                <div>
                  <Styledh
                    style={{
                      fontFamily: "Dela Gothic One",
                    }}
                  >
                    UPGRADABLE ACCOUNT THROUGH IN APP SALES
                  </Styledh>
                  <p>
                    Unlock exclusive features and benefits by upgrading your
                    account through in-app purchases. Enjoy enhanced
                    capabilities and perks with each tier upgrade.
                  </p>
                </div>
              </div>
              <div className="hugeContent mt-4">
                <img src={potentialLi} alt="" className="papoLogo" />
                <div>
                  <Styledh style={{ fontFamily: "Dela Gothic One" }}>
                    BOOST LEVELS THROUGH PURCHASES
                  </Styledh>
                  <p>
                    Quickly level up your avatar with in-app purchases. Gain
                    advanced skills and abilities to stay ahead in the game.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 p-0 mt-4">
              <div className="mainTitle pt-4">
                <h6 className="text-start">COMBINING TWO HUGE MARKETS</h6>
                <h5 className="text-start">IN APP SALES</h5>
              </div>
            </div>
          </div>
          <div className="honeyImg honeyImg02">
            <img src={honey} alt="" />
          </div>
          <div className="row m-0">
            <div className="col-12">
              <div className="thePatentialContent thePatentialContent03">
                <div className="hugeContent">
                  <img src={Coin} alt="" className="coinLogo" />
                  <div>
                    <Styledh>BECOME A BRAVE NINJA</Styledh>
                    <p>
                      We already raised{" "}
                      {Math.round(raisedAmount).toLocaleString("de-CH")} USD!
                    </p>
                    <p>
                      Join the Presale and be a part of the winning Degen Town
                      team.
                    </p>
                  </div>
                </div>
                <div className="hugeContent mt-4">
                  <img src={Coin} alt="" className="coinLogo" />
                  <div>
                    <Styledh>Presale Facts</Styledh>
                    <p>Market Capitalization: 30 million USD</p>
                    <p>Raise: 1,500,000 USD</p>
                    <p>
                      Vesting: Linear Vesting, over a period of 3 months all the
                      tokens get release. One release every week.
                    </p>
                    <p>First unlock 7 days after trading start.</p>
                  </div>
                </div>
                <div className="hugeContent mt-4">
                  <img src={Coin} alt="" className="coinLogo" />
                  <div>
                    <Styledh>Vesting Schedule</Styledh>
                    <p>
                      Linear Vesting: Tokens will be gradually released over a
                      3-month period.
                    </p>
                    <p>
                      Weekly Unlocks: Starting 7 days after trading begins,
                      tokens will be unlocked weekly.
                    </p>
                    <p>
                      Full Release: All tokens will be fully unlocked by the end
                      of the 3-month period.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="joinTheSpeedSec">
            <div className="mainTitle d-flex flex-column align-items-center mt-xxl-5 mt-4 pt-xxl-4 mt-0">
              <p>
                WE HAVE RAISED SO FAR IN <br className="d-lg-none d-block" />{" "}
                THE Presale SALE
              </p>
              {/* Dynamic Bar */}
              <div
                style={{
                  width: "90%",
                  backgroundColor: "#e0e0e0",
                  borderRadius: "25px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${progressPercentage}%`,
                    height: "30px",
                    backgroundColor: "#3498db",
                    borderRadius: "25px",
                  }}
                ></div>
              </div>
              <p>USD {Math.round(raisedAmount).toLocaleString("de-CH")}</p>{" "}
              {/* Raised Amount */}
            </div>

            <div className="row m-0 flex-sm-row flex-column-reverse">
              <div className="col-12">
                <div className="thePatentialContent mt-4">
                  <div className="hugeContent">
                    <img src={Coin} alt="" className="coinLogo" />
                    <div>
                      <Styledh>5 % OF TOKEN SUPPLY</Styledh>
                      <p>The 5 % of the supply is fully tradable.</p>
                    </div>
                  </div>
                  <div className="hugeContent mt-4 pb-5">
                    <img src={Coin} alt="" className="coinLogo" />
                    <div>
                      <Styledh>10 % OF PROFITS GO INTO A PRESALE POT</Styledh>
                      <p>
                        Contributors in the Presale stage will receive a DEGEN
                        TOWN NFT which can be staked and permit them access to
                        the PRESALE POT. 10% of all profits generated from the
                        game, including earnings from in-app sales, sales of
                        physical products, selling of traffic and revenue from
                        YouTube clicks will be kicked back to the Degen Town
                        community through our token.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="supplyCont progressContent">
                  <h3>5 % TOKEN SUPPLY</h3>
                  <h3>+ 10 % PRESALE POT </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
