import React from "react";

const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;700&family=Roboto:wght@100;200;300;400;500;600;700&display=swap');

    * {
      background-color: black;
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
        <video
          style={{
            marginTop: "20px",
            marginBottom: "40px",
            display: "flex",
            flex: "0 1 auto",
            alignContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
          width="900"
          height="600"
          controls
          autoplay
          loop
        >
          <source src="TOUTANOU2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "block",
                textAlign: "right",
              }}
            >
              <p>Vidéo & Musique : Doori Kwak 곽두리 </p>
              <p>Poème : Ryeorin Kim 김려린 </p>
              <p>Dessin & Animation : Soyoung Park 박소영 </p>
              <p>Affiche & Calligraphie : Nari Choi 최나리 </p>
            </div>
            <div
              style={{
                display: "block",
                marginLeft: "20px",
                textAlign: "left",
              }}
            >
              <p>doorikwak.fr@gmail.com</p>
              <p>ryeorinkim@gmail.com</p>
              <p>xxx@xxx.com</p>
              <p>nari.gn@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
