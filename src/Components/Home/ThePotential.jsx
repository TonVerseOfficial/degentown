import React from "react";
import potentialLi from "../../assets/images/userLi.png";
import home2 from "../../assets/images/home1.png";
export default function ThePotential() {
  return (
    <>
      <div className="thePatentialSec leftSide" id="potential">
        <div className="mainTitle pt-3 d-sm-none d-block">
          <h6 className="text-start">THE POTENTIAL</h6>
          <h5
            className="text-start potentialText "
            style={{
              textShadow: "none",
              color: "#ACD5F4",
            }}
          >
            COMBINING TWO HUGE MARKETS
          </h5>
        </div>


        <div className="mainTitle pt-3 d-sm-block d-none">
          <h6 className="text-start">THE POTENTIAL</h6>
          <h5
            className="text-start potentialText"
            style={{
              textShadow: "none",
              color: "#ACD5F4",
            }}
          >
            COMBINING TWO HUGE MARKETS
          </h5>
        </div>
        <div className="thePatentialContent">
          <div className="hugeContent hugeContentSec">
            <div className="liIcon">
              <img src={potentialLi} alt="" />
            </div>
            <div>
              <h2>LEVERAGING VIRAL MEME CULTURE FOR BROAD REACH</h2>
              <p>
                We harness the viral potential of meme culture to achieve
                extensive reach.
              </p>
              <p>
                Inspired by successful projects like PEPE, BRETT, and POKE.
                Drawing inspiration from successful meme projects such as PEPE,
                BRETT, and POKE.
              </p>
            </div>
          </div>
          <div className="hugeContent hugeContentSec mt-md-5 mt-4">
            <div className="liIcon">
              <img src={potentialLi} alt="" />
            </div>
            <div>
              <h2>
                THE FIRST MEME MATCH-3 <br /> GAME ON TELEGRAM
              </h2>
              <p>
                Our game features engaging mechanics that reward users, keep
                them continuously engaged through earning and upgrading, and use
                a unique algorithm to make content go viral.
              </p>
            </div>
          </div>
        </div>
        {/* <div className='d-lg-none d-md-block d-sm-none'>
                    <div className="row px-0">
                        <div className="col-6">
                            <div className='mainTitle pt-3'>
                                <h6 className='text-start'>THE POTENTIAL</h6>
                                <h5 className='text-start potentialText'>COMBINING TWO HUGE MARKETS</h5>
                            </div>
                            <div className="thePatentialContent">
                                <div className='hugeContent hugeContentSec'>
                                    <div className='liIcon'>
                                        <img src={potentialLi} alt="" />
                                    </div>
                                    <div>
                                        <h2>Leveraging viral meme culture for broad reach</h2>
                                        <p>
                                            We harness the viral potential of meme culture to achieve extensive reach.
                                        </p>
                                        <p>
                                            Inspired by successful projects like PEPE, BRETT, and POKE. Drawing inspiration from successful meme projects such as PEPE, BRETT, and POKE.
                                        </p>
                                    </div>
                                </div>
                                <div className='hugeContent hugeContentSec mt-md-5 mt-4'>
                                    <div className='liIcon'>
                                        <img src={potentialLi} alt="" />
                                    </div>
                                    <div>
                                        <h2>THE FIRST NINJA <br /> GAME ON TELEGRAM</h2>
                                        <p>
                                            Our game features engaging mechanics that reward users, keep them continuously engaged through earning and upgrading, and use a unique algorithm to make content go viral.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <img src={home1} alt="" className='w-100' />
                        </div>
                    </div>
                </div> */}
      </div>
    </>
  );
}
