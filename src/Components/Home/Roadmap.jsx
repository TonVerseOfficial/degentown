import React from "react";
import coin from "../../assets/images/RoadMapicon.png";

export default function Roadmap() {
  return (
    <>
      <div className="marginSet">
        <div className="mainTitle mt-sm-5 mt-0">
          <h6>BECOME AN EARLY SUPPORTER</h6>
          <h5>THE ROADMAP</h5>
        </div>
        <div className="roadMapSection">
          <div className="roadmapCard">
            <img src={coin} alt="" />
            <div>
              <h2>
                AIRDROP S1 & <br /> Presale
              </h2>
              <p>
                Launching Season one of the Degen Town airdrop and Presale Sale
                to kickstart the Degen Town journey.
              </p>
            </div>
          </div>
          <div className="roadmapCard roadmapCar2">
            <img src={coin} alt="" />
            <div>
              <h2>FIRST 1 MILLION USERS</h2>
              <p>
                Reaching 1 million users as our community begins to grow
                rapidly.
              </p>
            </div>
          </div>
          <div className="roadmapCard roadmapCar3">
            <img src={coin} alt="" />
            <div>
              <h2>
                LAUNCH GAME, <br /> AIRDROP S1
              </h2>
              <p>
                Official game launch and airdrop season one to boost player
                engagement.
              </p>
            </div>
          </div>
          <div className="roadmapCard roadmapCar4">
            <img src={coin} alt="" />
            <div>
              <h2>10 MILLION USERS</h2>
              <p>10 million users, signaling widespread adoption.</p>
            </div>
          </div>
          <div className="roadmapCard roadmapCar5">
            <img src={coin} alt="" />
            <div>
              <h2>
                LAUNCH Presale SALE <br /> SALE, AIRDROP S3
              </h2>
              <p>
                Launching the private sale and airdrop season three, attracting
                more investors.
              </p>
            </div>
          </div>
          <div className="roadmapCard roadmapCar6">
            <img src={coin} alt="" />
            <div>
              <h2>50 MILLION USERS</h2>
              <p>
              Achieving 50 million users, making Degen Town a
              global phenomenon.
              </p>
            </div>
          </div>
          <div className="roadmapCard roadmapCar7">
            <img src={coin} alt="" />
            <div>
              <h2>TGE & LISTING</h2>
              <p>
              Degen Town Tokens go live on exchanges during
              the Token Generation Event.
              </p>
            </div>
          </div>
          <div className="roadmapCard roadmapCar8">
            <img src={coin} alt="" />
            <div>
              <h2>LAUNCH OF THE DEGEN TOWN
              VERSE</h2>
              <p>
              Expanding into the Degen Town Verse, offering a
              whole new universe to explore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
