/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */

import React from "react";

export default function Menu() {
  const [displayed, setDisplayed] = React.useState(1);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (displayed === 6) setDisplayed(1);
      else setDisplayed(displayed + 1);
    }, 1300);
    return () => clearInterval(interval);
  });
  return (
    <>
      <div className="title">
        <h2>
          <p>Nari and </p>
          <p>Geoffrey</p>
        </h2>
        <img className="castle" src="castle.png" />
      </div>
      <div className="gif">
        <img src={`${displayed}.png`} />
      </div>
      <div className="menu-container">
        <div>
          <img src="ribbon.png" />
        </div>
        <div>
          <div className="weddingProgram">
            <div
              onClick={() => {
                document
                  .getElementById("Program")
                  .scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              Wedding
            </div>

            <div
              onClick={() => {
                document
                  .getElementById("Program")
                  .scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              Program
            </div>
          </div>

          <div className="hotelShuttle">
            <div
              onClick={() => {
                document
                  .getElementById("Hotels")
                  .scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              Hotels
            </div>
            <div
              onClick={() => {
                document
                  .getElementById("Shuttle")
                  .scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              Shuttle
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
