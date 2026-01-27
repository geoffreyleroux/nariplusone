/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Hotels from "./Hotels.js";
import Menu from "./Menu.js";
import Timeline from "./Timeline.js";
import { translate } from "./utils.js";
import LangContext from "./LangContext.js";
import RSVP from "./RSVP.js";

export default function App() {
  const [lang, setLang] = React.useState("fr");

  React.useEffect(() => {
    const hasFrench = navigator.languages.includes("fr");
    setLang(hasFrench ? "fr" : "en");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigator.languages]);

  function preloadImage(url) {
    var img = new Image();
    img.src = url;
  }
  React.useEffect(() => {
    preloadImage("1.png");
    preloadImage("2.png");
    preloadImage("3.png");
    preloadImage("4.png");
    preloadImage("5.png");
    preloadImage("6.png");
  }, []);

  return (
    <LangContext.Provider value={lang}>
      <div className="nariplusone">
        <div className="header">
          <div className="venueInfos">
            <p className="date">
              {translate(lang, "12/07/2026 SUNDAY", "DIMANCHE 12/07/2026")}
            </p>
            <p className="name">
              <a
                href="https://maps.app.goo.gl/bzk23U696qmYJgia8"
                target="_blank"
                rel="noreferrer"
              >
                CHÂTEAU DE CHAMPLÂTREUX
              </a>
            </p>
            <p className="address">
              <a
                href="https://maps.app.goo.gl/bzk23U696qmYJgia8"
                target="_blank"
                rel="noreferrer"
              >
                <span>ÉPINAY-CHAMPLÂTREUX</span>
                <span>&nbsp;95270</span>
              </a>
            </p>
          </div>
          <Menu />
        </div>

        <Timeline />

        <div id="Hotels">
          <Hotels />
        </div>

        <div id="RSVP">
          <RSVP />
        </div>
      </div>
    </LangContext.Provider>
  );
}
