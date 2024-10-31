import React from "react";
import tonKeeper from "../../assets/images/tonKeeperWallet.png";
import buyTon from "../../assets/images/buyTon.png";
const HowToDegen = () => {
  return (
    <>
      <div
        className="manageWidth marginSet"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="mainTitle pt-3 ">
          <h5 className="text-center potentialText ">
            HOW TO GET THE DEGEN TOWN TOKEN?
          </h5>
        </div>

        <div
          className="mainTitle pt-3"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h5 className="text-center potentialText ">
              GET A TONKEEPER WALLET
            </h5>
            <div style={{ display:'flex' , justifyContent:'center'}}>
              <img
                src={tonKeeper}
                style={{
                  contain: "content",
                  width: "70%",
                  height: "70%",
                objectFit: "contain",
                }}
              ></img>
            </div>
          </div>

          <div
            style={{
              width: "50%",
              height : '100%',
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h5 className="text-center potentialText ">
              BUY <br/>TON
            </h5>
            <div style={{ display:'flex' , justifyContent:'center'}}>
              <img
                src={buyTon}
                style={{
                  contain: "content",
                  width: "70%",
                  height: "70%",
                objectFit: "contain",
                }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToDegen;
