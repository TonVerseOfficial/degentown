import React, { useEffect } from "react";
import TextImg from "../../assets/images/title.svg";


import frogMen from "../../assets/images/degenFrog.svg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "@dotlottie/player-component";
export default function HomeHero() {
  // useEffect(() => {
  //   const modalElement = document.getElementById("airdropModal");
  //   const hasSeenModal = localStorage.getItem("hasSeenModal");

  //   if (!hasSeenModal) {
  //     // Show the modal if it hasn't been shown before
  //     const modalInstance = new window.bootstrap.Modal(modalElement);
  //     modalInstance.show();

  //     // Set localStorage flag
  //     localStorage.setItem("hasSeenModal", "true");
  //   }

  //   // Cleanup function for modal
  //   const handleModalHidden = () => {
  //     // Ensure any remaining backdrops are removed
  //     const backdrop = document.querySelector(".modal-backdrop");
  //     if (backdrop) {
  //       backdrop.remove();
  //     }

  //     // Reset body styles to default
  //     document.body.classList.remove("modal-open");
  //     document.body.style.overflow = "";
  //     document.body.style.paddingRight = "";
  //   };

  //   // Add event listener to handle modal cleanup
  //   modalElement.addEventListener("hidden.bs.modal", handleModalHidden);

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     modalElement.removeEventListener("hidden.bs.modal", handleModalHidden);
  //   };
  // }, []);

  return (
    <div className="homeHeroSection">
      <div className="text-center">
        <img src={TextImg} alt="" className="homeHeroImg1" />
        <h1 style={
          {
            fontFamily: 'SuperMario',
            color: 'white',
            fontSize: '4rem',
            zIndex: 2,
          }
        }>
            THE FIRST Match-3 GAME 
            <br />
            ON TON
        </h1>
      </div>
      <div
        style={{
          position: "absolute",
          left:0,
          top: '25%',
          backgroundColor: "transparent",
          zIndex: 1,
        }}
      >
        <div className="homeHeroImg2">
          <img className="homeHeroImg2" src={frogMen} alt="" />
        </div>

      </div>
      <div className="text-center">
        <Link to="https://t.me/degentown_bot">
          <Button variant="contained" className="claimBtn">
            PLAY NOW
          </Button>
        </Link>
      </div>
      <div style={{height:200}}></div>

      {/* Modal */}
      {/* <div
        className="modal"
        id="airdropModal"
        tabIndex="-1"
        aria-labelledby="airdropModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modalDialog">
          <div className="modal-content modalContent">
            <div className="modalContSec">
              <div className="modal-header">
                <div className="modalLogo">
                  <img src={modalLogo} alt="" />
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="text-center">
                  <img src={modalTitle} alt="" className="img001" />
                </div>
                <h1>
                  SECURE YOUR EARLY ADOPTER <br /> AIRDROP SEASON ONE
                </h1>
                <p>
                  You are one of the first brave Ninjas. Thanks for your
                  support, fren! Join now the early adopter airdrop S1!
                </p>
                <div className="s1ImgSec">
                  <img src={modalImg1} alt="" className="s1Img" />
                </div>
                <div className="text-center">
                  <Link to="https://t.me/papo_official_bot">
                    <Button variant="contained" className="modalBtn">
                      CLAIM AIRDROP
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
