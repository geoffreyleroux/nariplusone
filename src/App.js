/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Hotels from "./Hotels.js";
import Menu from "./Menu.js";
import Timeline from "./Timeline.js";
import { translate } from "./utils.js";
import LangContext from "./LangContext.js";

export default function App() {
  const [lang, setLang] = React.useState("en");
  React.useEffect(() => {
    setLang(navigator.language === "fr" ? "fr" : "en");
  }, []);
  return (
    <LangContext.Provider value={lang}>
      <div className="nariplusone">
        <div className="header">
          <div className="venueInfos">
            <div className="date">
              {translate(lang, "12072026 SUNDAY", "DIMANCHE 12/07/2026")}
            </div>
            <div className="address">D316 95270 ÉPINAY-CHAMPLÂTREUX</div>
            <div className="name">CHÂTEAU DE CHAMPLÂTREUX</div>
          </div>
          <Menu />
        </div>

        <Timeline />

        <div id="Hotels">
          <Hotels></Hotels>
        </div>
      </div>
    </LangContext.Provider>
  );
}
