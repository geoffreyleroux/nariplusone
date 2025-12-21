/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import LangContext from "./LangContext";
import { translate } from "./utils";

export default function Hotels() {
  const lang = React.useContext(LangContext);
  const data = [
    {
      time: "2PM - 2:15PM",
      info: [
        {
          title: "SHUTTLE #1",
          desc: "DEPARTING FROM OPERA",
        },
        {
          title: "MEETING POINT",
          desc: "OPERA PALAIS GARNIER",
        },
        {
          title: "SEARCH",
          desc: "AMORINO GELATO - PARIS OPÉRA",
          address: "1 RUE AUBER. 75009 PARIS",
        },
        {
          title: "ARRIVAL",
          desc: "HOTELS TO CHECK IN",
        },
      ],
    },
    {
      time: "3:20PM - 3:40PM",
      info: [
        {
          title: "SHUTILE #1",
          desc: "DEPARTING FROM OPERA",
        },
        {
          title: "MEETING POINT",
          desc: "OPÉRA PALAIS GARNIER (RED BOX)",
        },
        {
          title: "SEARCH",
          desc: "AMORINO GELATO - PARIS OPÉRA",
          address: "I RUE AUBER, 75009 PARIS",
        },
        {
          title: "ARRIVAL",
          desc: "CHÂTEAU CHAMPLÂTREUX",
        },
      ],
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
      <div
        className="shuttle-images"
      >
        <img src="bus.png" />
        <img src="van2.png" />
      </div>

      <h2
        style={{
          margin: 0,
          lineHeight: "60px",
          fontWeight: 100,
          fontSize: "3em",
        }}
      >
        {translate(lang, "SHUTTLE SERVICE", "Bus % NAVETTES")}
      </h2>

      <p style={{ lineHeight: "30px", margin: 0 }}>
        {translate(
          lang,
          "FOR THOSE WHO ARE STAYING AT THE HOTEL",
          "POUR CEUX QUI DORMENT À L'HÔTEL",
        )}
      </p>

      <div>
        {data.map((d) => {
          return (
            <div>
              <p
                style={{
                  marginTop: "20px",
                  fontWeight: "bold",
                }}
              >
                {d.time}
              </p>
              {d.info.map((i) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "8px",
                    }}
                  >
                    <p
                      style={{
                        minWidth: "200px",
                        display: "flex",
                        margin: 0,
                        textAlign: "left",
                        fontWeight: "bold",
                        lineHeight: 1,
                      }}
                    >
                      {i.title}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: 0,
                        textAlign: "left",
                        lineHeight: 1,
                        color: "rgba(0, 0, 0, 0.9)",
                      }}
                    >
                      <p>{i.desc}</p>
                      {i.address && <p>{i.address}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
