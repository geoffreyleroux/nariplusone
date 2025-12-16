/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import LangContext from "./LangContext.js";
import { translate } from "./utils.js";
export default function Menu() {
  const lang = React.useContext(LangContext);
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
          <p>Nari {translate(lang, "and", "et")} </p>
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
          <div className="weddingProgram clickable">
            <div
              onClick={() => {
                document
                  .getElementById("Program")
                  .scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              style={
                lang === "fr"
                  ? {
                      fontSize: "1em",
                    }
                  : {}
              }
            >
              {translate(lang, "Wedding", "Programme")}
            </div>

            <div
              style={
                lang === "fr"
                  ? {
                      fontSize: "1em",
                    }
                  : {}
              }
              onClick={() => {
                document
                  .getElementById("Program")
                  .scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              {translate(lang, "Program", "de mariage")}
            </div>
          </div>

          <div className="hotelShuttle clickable">
            <div
              onClick={() => {
                document
                  .getElementById("Hotels")
                  .scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              {translate(lang, "Book Hotels", "Hôtels")}
            </div>
            <div
              onClick={() => {
                document
                  .getElementById("Shuttles")
                  .scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              {translate(lang, "Shuttle Service", "Navettes")}
            </div>
          </div>
        </div>
        <div className="arrow-container">
          <img className="arrow" src="arrow.png" />
        </div>
      </div>
    </>
  );
}
