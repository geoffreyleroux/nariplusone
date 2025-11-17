/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
// import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import React from "react";
import classNames from "classnames";

export default function Menu() {
  const [displayed, setDisplayed] = React.useState(1);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (displayed === 6) setDisplayed(1);
      else setDisplayed(displayed + 1);
    }, 1300);
    return () => clearInterval(interval);
  });
  return (
    <>
      <h2>
        <p>Nari and </p>
        <p>Geoffrey</p>
      </h2>
      <div className="gif">
        <img src={`${displayed}.png`} />
      </div>
      <div className="menu-container">
        <div className="weddingProgram">
          <div
            onClick={() => {
              document
                .getElementById("Wedding")
                .scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Wedding
          </div>

          <div
            onClick={() => {
              document
                .getElementById("Wedding")
                .scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Program
          </div>
        </div>

        <div className="hotelShuttle">
          <div
            onClick={() => {
              document
                .getElementById("Hotels")
                .scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Hotels
          </div>
          <div
            onClick={() => {
              document
                .getElementById("Shuttle")
                .scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Shuttle
          </div>
        </div>
      </div>
      {/* <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={1}
        centerMode={false}
        className=""
        containerClass="carouselContainer"
        customTransition="all 10s linear"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl={false}
        pauseOnHover={false}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3020,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 0,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 0,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 0,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        transitionDuration={1000}
      >
        <img className="pic" src="1.png" />
        <img className="pic" src="2.png" />
        <img className="pic" src="3.png" />
        <img className="pic" src="4.png" />
        <img className="pic" src="5.png" />
        <img className="pic" src="6.png" />
      </Carousel> */}
    </>
  );
}
