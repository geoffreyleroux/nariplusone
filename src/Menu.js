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
          <img className="ribbon-castle" src="castle.png" />
          <img className="ribbon" src="ribbon.png" />
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
                      textAlign: "right",
                      fontSize: "1em",
                    }
                  : {
                      textAlign: "right",
                    }
              }
            >
              {translate(lang, "Wedding", "Programme")}
            </div>

            <div
              style={
                lang === "fr"
                  ? {
                      textAlign: "right",
                      fontSize: "1em",
                    }
                  : {
                      textAlign: "right",
                    }
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
              {translate(lang, "Hotels", "Hôtels")}
            </div>
            <div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScWlLrrtQrPUsCDkzkaAGL2WrYFMp_t5ldL_W8q1xeqVFriag/viewform?usp=dialog"
                target="_blank"
                rel="noreferrer"
              >
                {translate(lang, "RSVP", "RSVP")}
              </a>
            </div>
          </div>
        </div>

        <p className="moreInfo">
              {translate(lang, "CLICK FOR MORE INFO", "CLIQUEZ POUR PLUS D'INFORMATIONS")}
          </p>

        <div className="arrow-container">
          <img className="arrow" src="arrow.png" />
        </div>
      </div>
    </>
  );
}
