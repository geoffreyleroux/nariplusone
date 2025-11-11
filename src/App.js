/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Hotels from "./Hotels.js";
const styles = `
    @font-face {
      font-family: Montage; /* set name */
      src: url(fonts/Montage.woff); /* url of the font */
    }

    body {
      overflow: hidden;
      background-color: #b49e72;
    }

    * {
      // background-color: #d9bd60;
      font-family: "Montage";
      color: #5d5804;
      font-size: 18px;
    }

    .flag {
      display: flex;
      width: 60px;
      height: auto;
    }
    .text-container {
      display: flex;
      flex-direction: row;
      text-align: center;
    }

    .main-container {
      display: flex;
      flex: 0 1 auto;
      align-content: center;
      alignitems: center;
      flex-direction: row;
      max-width: 100%;
      max-height: 100%;
    }

    .content{
      width: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
    }

    @media only screen and (max-width: 600px) {
      .content{
        width: 100%;
        margin-bottom: 40px;
      }
      * {
        font-size: 12px;
      }
    }

    .us {
      width: 400px;
      height: auto;
      position: fixed;
      bottom: -180px;
      right: -130px;
    }

    .langage_selector {
      position: absolute;
      top: 10px;
      right: 10px;
    }
`;

export default function App() {
  const [lang, setLang] = React.useState(navigator.language || "en");
  const [openList, setOpenList] = React.useState(false);

  return (
    <div className="nariplusone gradient-background">
      <style>{styles}</style>
      <div
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
      </div>
      <div
        className="main-container "
        style={{
          display: "flex",
          flex: "1 1 auto",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          height: "100vh",
        }}
      >
        {lang === "fr" && (
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
        )}
        {lang === "en" && (
          <div className="content">
            <p>ENGLISH</p>
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

            <Hotels></Hotels>

            <h3>SHUTTLES</h3>
          </div>
        )}

        {lang === "kr" && (
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
        )}
      </div>
      {/*  eslint-disable-next-line jsx-a11y/alt-text */}
      <img style={{pointerEvents:"none"}} className="us" src="us.png" />{" "}
    </div>
  );
}
