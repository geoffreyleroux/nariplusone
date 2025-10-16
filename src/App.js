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
      <div>CREDITS</div>
      <div>CREDITS</div>
      <div>CREDITS</div>
      <div>CREDITS</div>
      <div>CREDITS</div>
    </div>
  );
}
