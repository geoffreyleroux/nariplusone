import React from "react";

const styles = `
    @font-face {
      font-family: Montage; /* set name */
      src: url(fonts/Montage.woff); /* url of the font */
    }

    @keyframes gradient-animation {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    body {
      overflow: hidden;
    }

    * {
      // background-color: #d9bd60;
      font-family: "Montage";
      color: #5d5804;
      font-size: 18px;
    }

    .gradient-background {
      background: linear-gradient(0deg,white,#b49e72);
      background-size: 120% 120%;
      animation: gradient-animation 8s ease infinite;
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
      width: 33%;
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    @media only screen and (max-width: 600px) {
      .content{
        width: 100%;
        margin-bottom: 40px;
      }
      .main-container {
        flex-wrap: wrap;
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
`;

export default function App() {
  return (
    <div className="nariplusone gradient-background">
      <style>{styles}</style>
      {/*  eslint-disable-next-line jsx-a11y/alt-text */}
      <img className="us" src="us.png" />
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
        <div className="content">
          <p>FRANCAIS</p>
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
          <p>DATE</p>
          <p>HOTELS</p>
          <p>NAVETTE</p>
        </div>
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
          <p>DATE</p>
          <p>HOTELS</p>
          <p>SHUTTLES</p>
        </div>

        <div className="content">
          <p>한국인</p>
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
          <p>HOTELS</p>
          <p>DATE</p>
          <p>SHUTTLES</p>
        </div>
      </div>
    </div>
  );
}
