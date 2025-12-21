/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import LangContext from "./LangContext";

export default function RSVP() {
  const lang = React.useContext(LangContext);

  return (
    <div
      className="rsvp"
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      {lang === "fr" ? (
        <p>
          MERCI DE RÉPONDRE À CE{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScWlLrrtQrPUsCDkzkaAGL2WrYFMp_t5ldL_W8q1xeqVFriag/viewform?usp=dialog"
            target="_blank"
            style={{
              textDecoration: "underline",
            }}
          >
            FORMULAIRE
          </a>{" "}
          AU PLUS TARD LE 28 FEVRIER
        </p>
      ) : (
        <p>
          PLEASE FILL IN THIS{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScWlLrrtQrPUsCDkzkaAGL2WrYFMp_t5ldL_W8q1xeqVFriag/viewform?usp=dialog"
            target="_blank"
            style={{
              textDecoration: "underline",
            }}
          >
            FORM
          </a>{" "}
          BEFORE FEBRUARY 28TH
        </p>
      )}
    </div>
  );
}
