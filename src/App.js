import React from "react";

const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;700&family=Roboto:wght@100;200;300;400;500;600;700&display=swap');

    * {
      background-color: black;
      font-family: "Jost";
    }
    
    .video {
      margin-bottom: 40px;
      width: 900px;
      height: 600px;
      maxWidth: 100%;
      maxHeight: 100%;
    }
    .text-container {
      display: flex;
      flex-direction: row;
      text-align: center;
    }
    .main-container {
      display: flex;
      flex: 0 1 auto;
      align-content: center;
      alignitems: center;
      flex-direction: row;
      max-width: 100%;
      max-height: 100%;
    }

    @media only screen and (max-width: 600px) {
      .video {
        width: 100%;
        height: auto;
        max-width: 100%;
        max-height: 100%;
      }
      * {
        font-size: 9px
      }
      .text-container {
      
      }

      .main-container {
      
      }
    }
`;

export default function App() {
  return (
    <div className="exhibition">
      <style>{styles}</style>
      <div
        className="main-container"
        style={{
          display: "flex",
          flex: "1 1 auto",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <video className="video" controls autoplay loop>
          <source src="TOUTANOU2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-container">
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
              <p>
                doorikwak.fr@gmail.com <b>@d0ori</b>
              </p>
              <p>
                ryeorinkim@gmail.com <b>@libbyseaweed</b>
              </p>
              <p>
                newsymind@gmail.com <b>@notoldsoyoung</b>
              </p>
              <p>
                nari.gn@gmail.com <b>@memeno</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
