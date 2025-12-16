/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import LangContext from "./LangContext";
import { translate } from "./utils";

export default function Hotels() {
  const lang = React.useContext(LangContext);

  const data = [
    {
      name: "NOVOTEL MAFFLIERS **** ",
      link: "https://all.accor.com/ssr/app/accor/rates/0383/index.en.shtml?dateIn=2026-07-12&nights=1&compositions=2&stayplus=false&snu=false&accessibleRooms=false&hideWDR=false&productCode=null&hideHotelDetails=true",
      tel: "+33134083535",
      desc: ` 10km`,
    },
    {
      name: "DOLCE CHANTILLY **** ",
      link: "https://all.accor.com/ssr/app/accor/rates/B4C3/index.fr.shtml?dateIn=2026-07-12&nights=1&compositions=2&stayplus=false&snu=false&accessibleRooms=false&hideWDR=false&productCode=null&hideHotelDetails=true",
      tel: "+33344584777",
      desc: ` 18km`,
    },
    {
      name: "CHÂTEAU DE LA TOUR *** ",
      link: "https://reservations.hotelspreference.com/?adult=2&arrive=2026-07-12&chain=5460&child=0&currency=EUR&depart=2026-07-13&hotel=75790&level=hotel&locale=fr-FR&productcurrency=EUR&rooms=1",
      tel: "+33344623838",
      desc: ` 14km`,
    },
    {
      name: "LE DOMAINE DES VANNEAUX **** ",
      link: "https://all.accor.com/ssr/app/accor/rates/B4D0/index.fr.shtml?dateIn=2026-07-12&nights=1&compositions=2&stayplus=false&snu=false&accessibleRooms=false&hideWDR=false&productCode=null&hideHotelDetails=true",
      tel: "+33124084060",
      desc: ` 19km`,
    },
  ];

  return (
    <div
      style={{
        marginTop: "10em",
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
          "RESERVEZ UN HÔTEL POUR PROFITER DE LA SOIRÉE",
        )}
      </p>
      <p style={{ marginBottom: "30px", lineHeight: "20px" }}>
        {translate(
          lang,
          "CLICK BELOW FOR DIRECT PAGE",
          "CLIQUEZ CI-DESSOUS POUR RÉSERVER L'HÔTEL ",
        )}
      </p>
      <div>
        {data.map((hotel) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "20px",
              }}
            >
              <p
                style={{
                  display: "flex",
                  width: "100%",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                <a
                  style={{ textAlign: "left", fontSize: "1.6em" }}
                  href={hotel.link}
                  target="_blank"
                >
                  {hotel.name}
                </a>
              </p>
              <p style={{ textAlign: "left" }}>
                {hotel.desc}
                {" | "}
                <a inputMode="tel" target="_blank" href={`tel:${hotel.tel}`}>
                  {hotel.tel}
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
