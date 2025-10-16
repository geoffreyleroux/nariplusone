import React from "react";

const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;700&family=Roboto:wght@100;200;300;400;500;600;700&display=swap');

    :root {
        --font-color: #ffffff;
        --backgroond-color: #000000;
        --p: 10%;
        --color-primary: #D3A449; /* Desert Gold */
        --color-secondary: #000000; /* Pitch Black */
        --color-text: #E0E0E0; /* Light Sand */
        --color-background: #1A1A1A; /* Dark Sand/Rock */
        --color-accent: #8B4513; /* Terracotta/Spice */
    }
    * {
    font-family: "Jost";
    }
`;

export default function App() {
  return (
    <div className="exhibition">
      <style>{styles}</style>
      <div
        style={{
          display: "flex",
          flex: "1 1 auto",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <iframe
          style={{
            display: "flex",
            flex: "0 1 auto",
            alignContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
          width="1280"
          height="712"
          src="https://www.youtube.com/embed/Cy5MiOqarYs?autoplay=1&controls=0&info=0&loop=1&fs=0&cc_load_policy=0&iv_load_policy=0&rel=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay; showcontrols;"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen="0"
        ></iframe>
        <div
          style={{
            display: "flex",
            flex: "0 1 auto",
            alignContent: "center",
            alignItems: "center",
            marginTop: "40px",
            flexDirection: "row",
          }}
        >
          CREDITS
        </div>
      </div>
    </div>
  );
}
