/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import { VerticalTimeline } from "./VerticalTimeline.js";
import { VerticalTimelineElement } from "./VerticalTimelineElement.js";
// import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  const contentStyle = {
    background: "rgb(0,0,0, 0)",
    color: "black",
    border: "0px",
    boxShadow: "0 0px 0 transparent",
  };
  const iconStyle = { background: "black", color: "black" };
  const contentArrowStyle = { borderColor: "transparent" };
  return (
    <div style={{ marginTop: "50px" }} id="Program">
      <VerticalTimeline layout="2-columns" lineColor="black" animate={false}>
        <VerticalTimelineElement
          position="left"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="14:00"
          iconStyle={iconStyle}
          image="bus.png"
          imageClassName="bus"
        >
          <h3 className="vertical-timeline-element-title">
            Departure from Opéra
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position="right"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="15:00"
          iconStyle={iconStyle}
          image={"hotel.png"}
        >
          <h3 className="vertical-timeline-element-title">
            Checkin at the hotels
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="16:00"
          position="left"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          iconStyle={iconStyle}
          image={"welcome.png"}
          imageClassName="welcome"
        >
          <h3 className="vertical-timeline-element-title">
            Arrival at the Castle
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">REFRESHMENTS</h4>
          <h5>CHÂTEAU DE CHAMPLÂTREUX D316, 95270 ÉPINAY-CHAMPLÂTREUX</h5> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="17:00 - 17:45"
          position="right"
          iconStyle={iconStyle}
          contentArrowStyle={contentArrowStyle}
          image="us.png"
          imageClassName="us"
          contentStyle={contentStyle}
        >
          <h3 className="vertical-timeline-element-title">Ceremony</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="17:45 - 19:00"
          position="left"
          iconStyle={iconStyle}
          contentArrowStyle={contentArrowStyle}
          contentStyle={contentStyle}
          image={"cocktail.png"}
        >
          <h3 className="vertical-timeline-element-title">Cocktail</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="19:30 - 21:00"
          position="right"
          iconStyle={iconStyle}
          contentArrowStyle={contentArrowStyle}
          contentStyle={contentStyle}
          image={"dinner.png"}
        >
          <h3 className="vertical-timeline-element-title">Dinner</h3>
        </VerticalTimelineElement>{" "}
        <VerticalTimelineElement
          date="21:00 - 3:00"
          position="left"
          iconStyle={iconStyle}
          contentArrowStyle={contentArrowStyle}
          contentStyle={contentStyle}
          image={"afterparty.png"}
        >
          <h3 className="vertical-timeline-element-title">AFTER PARTY !!</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
