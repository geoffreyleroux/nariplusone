/* eslint-disable jsx-a11y/alt-text */

import Hotels from "./Hotels.js";
import Menu from "./Menu.js";
import Timeline from "./Timeline.js";
export default function App() {
  // const [lang, setLang] = React.useState(navigator.language || "en");
  // const [openList, setOpenList] = React.useState(false);

  return (
    <div className="nariplusone">
      {/* <div
        className="langage_selector"
        onClick={() => {
          setOpenList(!openList);
        }}
      >
        <div value="fr">
          <img className="flag" src={`${lang}.png`} />
        </div>
        {openList && (
          <div>
            <div value="fr" onClick={() => setLang("fr")}>
              <img className="flag" src="fr.png" />
            </div>
            <div value="en" onClick={() => setLang("en")}>
              <img className="flag" src="en.png" />
            </div>
            <div value="kr" onClick={() => setLang("kr")}>
              <img className="flag" src="kr.png" />
            </div>
          </div>
        )}
      </div> */}
      {/* <img style={{ width: "100%" }} src="Castle.png" /> */}
      <div className="header ">
        <Menu></Menu>
      </div>
      <div className="main-container ">
        {/* {lang === "fr" && (
          <div className="content">
            <p>
              LIEU:&nbsp;
              <a
                href="https://maps.app.goo.gl/yi4EkstYsQ3qEycXA"
                target="_blank"
                rel="noreferrer"
              >
                CHÂTEAU DE CHAMPLÂTREUX
              </a>
            </p>
            <p>Le 12 juillet 2026</p>

            <Hotels></Hotels>

            <p>NAVETTE</p>
          </div>
        )} */}
        {/* {lang === "en" && ( */}
        <div className="content" id="Wedding">
          <p>
            VENUE:&nbsp;
            <a
              href="https://maps.app.goo.gl/yi4EkstYsQ3qEycXA"
              target="_blank"
              rel="noreferrer"
            >
              CHÂTEAU DE CHAMPLÂTREUX
            </a>
          </p>
          <p>July 12th 2026</p>
        </div>

        <div id="Hotels">
          <Hotels></Hotels>
        </div>
        <div id="Shuttle">
          <h3>SHUTTLES</h3>
        </div>
        <div id="Program">
          <h3>Program</h3>
        </div>
        {/*  )} */}

        {/* {lang === "kr" && (
          <div className="content">
            <p>
              VENUE:&nbsp;
              <a
                href="https://maps.app.goo.gl/yi4EkstYsQ3qEycXA"
                target="_blank"
                rel="noreferrer"
              >
                CHÂTEAU DE CHAMPLÂTREUX
              </a>
            </p>

            <Hotels></Hotels>

            <p>July 12th 2026</p>

            <h3>SHUTTLES</h3>
          </div>
        )} */}
      </div>
      {/*  eslint-disable-next-line jsx-a11y/alt-text */}
      {/* <img style={{ pointerEvents: "none" }} className="us" src="us.png" />{" "} */}
      <Timeline />
    </div>
  );
}
