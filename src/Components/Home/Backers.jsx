import React from "react";
import backers1 from "../../assets/images/backers1.svg";
import backers2 from "../../assets/images/backers2.svg";
import backers3 from "../../assets/images/backers3.svg";
import backers4 from "../../assets/images/backers4.svg";
import backers5 from "../../assets/images/backers5.svg";
import backers6 from "../../assets/images/backers6.svg";
import backers7 from "../../assets/images/backers7.svg";
import backers8 from "../../assets/images/backers8.svg";
import backers9 from "../../assets/images/backers9.svg";
import backers10 from "../../assets/images/backers10.svg";

export default function Backers() {
  return (
    <>
      <div className="backersSec" id="earnPoints">
        <div className="mainTitle pb-sm-5 mb-4">
          <h5 className="text-center potentialText">THE BACKERS</h5>
        </div>
        <div className="backersLogo">
          <img src={backers1} alt="Backer 1" className="backer-image" />
          {/* <img src={backers2} alt="Backer 2" className='backer-image' /> */}
          <img src={backers3} alt="Backer 3" className="backer-image" />
          <img src={backers4} alt="Backer 4" className="backer-image" />
          <img src={backers5} alt="Backer 5" className="backer-image" />
        </div>
        <div className="backersLogo">
          <img src={backers6} alt="Backer 6" className="backer-image" />
          <img src={backers7} alt="Backer 7" className="backer-image" />
          <img src={backers8} alt="Backer 8" className="backer-image" />
          <img src={backers9} alt="Backer 9" className="backer-image" />
          <img src={backers10} alt="Backer 10" className="backer-image" />
        </div>
        <div className="d-sm-none d-block">
          <div className="row m-0">
            <div className="col-6 mt-3">
              <img src={backers1} alt="Backer 1" className="backer-image" />
            </div>
            {/* <div className="col-6 mt-3">
                        <img src={backers2} alt="Backer 1" className='backer-image' />
                    </div> */}
            <div className="col-6 mt-3">
              <img src={backers3} alt="Backer 1" className="backer-image" />
            </div>
            <div className="col-6 mt-3">
              <img src={backers4} alt="Backer 1" className="backer-image" />
            </div>
            <div className="col-6 mt-3">
              <img src={backers5} alt="Backer 1" className="backer-image" />
            </div>
            <div className="col-6 mt-3">
              <img src={backers6} alt="Backer 1" className="backer-image" />
            </div>
            <div className="col-6 mt-3">
              <img src={backers7} alt="Backer 1" className="backer-image" />
            </div>
            <div className="col-6 mt-3">
              <img src={backers8} alt="Backer 1" className="backer-image" />
            </div>
            <div className="col-6 mt-3">
              <img src={backers9} alt="Backer 1" className="backer-image" />
            </div>
            <div className="col-6 mt-3">
              <img src={backers10} alt="Backer 1" className="backer-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
