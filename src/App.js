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
    // setLang(navigator.language === "fr" ? "fr" : "en");
  }, []);
  return (
    <LangContext.Provider value={lang}>
      <div className="nariplusone">
        <div className="header">
          <div className="venueInfos">
            <p className="date">
              {translate(lang, "12072026 SUNDAY", "DIMANCHE 12/07/2026")}
            </p>
            <p className="address">
              <span>D316 95270</span>
              <span>&nbsp;ÉPINAY-CHAMPLÂTREUX</span>
            </p>
            <p className="name">CHÂTEAU DE CHAMPLÂTREUX</p>
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
