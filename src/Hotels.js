/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import LangContext from "./LangContext";
import { translate } from "./utils";
import classNames from "classnames";

export default function Hotels() {
  const lang = React.useContext(LangContext);

  const data = [
    {
      name: "HÔTEL MERCURE CHANTILLY **** ",
      link: "https://all.accor.com/hotel/B4C3/index.fr.shtml",
      tel: "+33 3 44 58 47 77",
      desc: ` 18km | 30min`,
      img: "mercure.png",
      extraEN:
        "For Korean and International guests, please contact us for booking",
      extraKR:
        "한국 및 해외에서 오시는 분들을 위한 호텔입니다\n 예약 전 저희에게 문의주세요",
    },
    {
      name: "NOVOTEL MAFFLIERS **** ",
      link: "https://all.accor.com/hotel/0383/index.fr.shtml",
      tel: "+33 1 34 08 35 35",
      desc: ` 10km | 17min`,
      img: "novotel.png",
    },
    {
      name: "LE DOMAINE DES VANNEAUX **** ",
      link: "https://all.accor.com/hotel/B4D0/index.fr.shtml",
      tel: "+33 1 34 08 40 60",
      desc: ` 19km | 20min`,
      img: "vanneaux.png",
    },
    {
      name: "CHÂTEAU DE LA TOUR *** ",
      link: "https://reservations.hotelspreference.com/?adult=2&arrive=2026-07-12&chain=5460&child=0&currency=EUR&depart=2026-07-13&hotel=75790&level=hotel&locale=fr-FR&productcurrency=EUR&rooms=1",
      tel: "+33 3 44 62 38 38",
      desc: ` 14km | 23min `,
      img: "latour.png",
    },
    {
      name: "KYRIAD CHANTILLY SUD *** ",
      link: "https://chantilly-sud-luzarches.kyriad.com/",
      tel: "+33 1 34 09 90 90",
      desc: ` 5km | 7min`,
      img: "kyriad.png",
      displayClass: "kyriad",
    },
  ];

  return (
    <div
      style={{
        marginTop: "5em",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <img src="hotel.png" />
      <h2
        style={{
          margin: 0,
          lineHeight: "60px",
          fontWeight: 100,
          fontSize: "3em",
        }}
      >
        {translate(lang, "HOTEL RESERVATION", "RÉSERVATION D'HÔTEL")}
      </h2>
      <p style={{ lineHeight: "30px", margin: 0 }}>
        {translate(
          lang,
          "RECOMMEND BOOKING TO ENJOY THE PARTY",
          "RÉSERVEZ UN HÔTEL POUR PROFITER DE LA SOIRÉE",
        )}
      </p>
      <p
        style={{
          margin: "0 10px",
          marginBottom: "30px",
          lineHeight: "20px",
          textAlign: "center",
        }}
      >
        {translate(
          lang,
          "CLICK BELOW FOR DIRECT PAGE",
          "CLIQUEZ CI-DESSOUS POUR RÉSERVER VOTRE HÔTEL. (NE TARDEZ PAS!) ",
        )}
      </p>
      {lang === "fr" ? (
        <p style={{ padding: "0 1em", textAlign: "center", lineHeight: 1 }}>
          DES NAVETTES ASSURANT LA LIAISON ENTRE LE CHÂTEAU ET{" "}
          <u>UNIQUEMENT CES HÔTELS</u> CIRCULERONT DE MINUIT À 3H00.
        </p>
      ) : (
        <p style={{ padding: "0 1em", textAlign: "center", lineHeight: 1 }}>
          RETURN SHUTTLES FROM THE CHATEAU TO <u>THESE HOTELS ONLY</u> WILL
          OPERATE FROM MIDNIGHT TO 3:00.
        </p>
      )}
      <div className="hotelList">
        {data.map((hotel) => {
          return (
            <>
              <div className="hotelContainer">
                <div
                  className={classNames(
                    "hotelImgContainer",
                    hotel.displayClass,
                  )}
                >
                  <a href={hotel.link} target="_blank">
                    <img className="hotelImg" src={hotel.img} />
                  </a>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p className="hotelDesc">
                    <a
                      className="clickable"
                      style={{ textAlign: "left", fontSize: "1.6em" }}
                      href={hotel.link}
                      target="_blank"
                    >
                      {hotel.name}
                    </a>
                  </p>
                  <p
                    className="hotelDesc"
                    style={{
                      textAlign: "left",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {hotel.desc}
                    {" |"}
                    <a
                      className="clickable"
                      inputMode="tel"
                      target="_blank"
                      href={`tel:${hotel.tel}`}
                    >
                      &nbsp;{hotel.tel}
                    </a>
                  </p>
                  {hotel.extraEN && (
                    <p
                      className="hotelDesc"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        color: "red",
                        marginBottom: "4px",
                        lineHeight: 1,
                      }}
                    >
                      <i> {hotel.extraEN}</i>
                    </p>
                  )}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
