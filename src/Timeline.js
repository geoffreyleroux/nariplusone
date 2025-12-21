/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { VerticalTimeline } from "./VerticalTimeline.js";
import { VerticalTimelineElement } from "./VerticalTimelineElement.js";
import { translate } from "./utils.js";
import LangContext from "./LangContext.js";
import RSVP from "./RSVP.js";

export default function Timeline() {
  const lang = React.useContext(LangContext);

  const contentStyle = {
    background: "rgb(0,0,0, 0)",
    color: "black",
    border: "0px",
    boxShadow: "0 0px 0 transparent",
  };
  const iconStyle = { background: "black", color: "black" };

  return (
    <>
      <RSVP />
      <div id="Program">
        <VerticalTimeline layout="2-columns" lineColor="black" animate={false}>
          {/* <VerticalTimelineElement
            position="left"
            contentStyle={contentStyle}
            date="14:00"
            iconStyle={iconStyle}
            image="bus.png"
            imageClassName="bus"
          >
            <h3 className="vertical-timeline-element-title">
              {translate(lang, "Departure from Opéra", "Départ d'Opéra")}
            </h3>
          </VerticalTimelineElement> */}
          <VerticalTimelineElement
            position="right"
            contentStyle={contentStyle}
            date="15:00"
            className="clickable"
            iconStyle={iconStyle}
            image={"hotelbookhere2.png"}
            onTimelineElementClick={() => {
              document
                .getElementById("Hotels")
                .scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            <h3 className="vertical-timeline-element-title">
              <span>{translate(lang, "Check in\n", "Checkin ")}</span>
              <span>{translate(lang, "at the hotels", "à l'hôtel")}</span>
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="16:00"
            position="left"
            contentStyle={contentStyle}
            iconStyle={iconStyle}
            image={"welcome.png"}
            imageClassName="welcome"
          >
            <h3 className="vertical-timeline-element-title">
              {translate(lang, "Arrival at the castle", "Arrivé au château")}
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="17:00"
            position="right"
            iconStyle={iconStyle}
            image="us.png"
            imageClassName="us"
            contentStyle={contentStyle}
          >
            <h3 className="vertical-timeline-element-title">
              {translate(lang, "Ceremony", "Cérémonie")}
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="18:00"
            position="left"
            iconStyle={iconStyle}
            contentStyle={contentStyle}
            image={"cocktail.png"}
          >
            <h3 className="vertical-timeline-element-title">
              {translate(lang, "Cocktail", "Vin d'honneur")}
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="19:30"
            position="right"
            iconStyle={iconStyle}
            contentStyle={contentStyle}
            imageClassName="dinner"
            image={"dinner.png"}
          >
            <h3 className="vertical-timeline-element-title">
              {translate(lang, "Dinner reception", "Dîner")}
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="21:30"
            position="left"
            iconStyle={iconStyle}
            contentStyle={contentStyle}
            image={"afterparty.png"}
          >
            <h3 className="vertical-timeline-element-title">
              {translate(lang, "AFTER PARTY", "Soirée")}
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="00:00 - 03:00"
            position="right"
            iconStyle={iconStyle}
            contentStyle={contentStyle}
            imageClassName="van"
            image={"van2.png"}
          >
            <h3 className="vertical-timeline-element-title">
              <span>
                {translate(lang, "shuttles start\n", "Navettes disponibles")}
              </span>
              <span>
                {translate(lang, "going to hotels", "pour les hôtels")}
              </span>
            </h3>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            date="01:00"
            position="left"
            iconStyle={iconStyle}
            imageClassName="bus"
            contentStyle={contentStyle}
            image={"bus.png"}
          >
            <h3 className="vertical-timeline-element-title">
              {translate(
                lang,
                "shuttle going back to paris",
                "Depart du bus pour Paris"
              )}
            </h3>
          </VerticalTimelineElement> */}
          <VerticalTimelineElement
            date="03:00"
            position="left"
            iconStyle={iconStyle}
            iconClassName="lastIcon"
            contentStyle={contentStyle}
          >
            <h3 className="vertical-timeline-element-title">
              {translate(lang, "afterpary finishing", "fin de la soirée")}
            </h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}
