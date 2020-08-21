import React from "react";
import "./style.css";
import myImg from "./imageInSrc.jpeg";

function App() {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>

        <br />

        <img src={myImg} alt="imageInSrc.jpeg" height="220" width="320" />
        <br />
        <img src="/imageInPublic.jpg" alt="imageInPublic.jpeg" height="220" />
      </div>

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
