import { useState } from "react";
import "./App.css";
import Beams from "./bg/Beams";
import ProfileCard from "./components/ProfileCard";
import ModelViewer from "./components/ModelViewer";

function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-[#B01E28] text-white">
        <div className="md:w-[58%] mt-10">
          <div className="font-boldonse text-5xl md:text-8xl text-center mb-3">W.H.I.S.P.E.R</div>
          <div className="font-sans text-4xl text-center md:px-16">Waveform Heart Intelligence Signal Processing & Early Recognition</div>
        </div>
        <div className="model-viewer-container w-full md:w-[42%]">
          <ModelViewer
            url="https://raw.githubusercontent.com/Hamzaali146/Heart_3D_model/main/source/realistic_human_heart.glb"
            width={"100%"}
            height={"100vh"}
            defaultZoom={1.5}
            showScreenshotButton={false}
          />

        </div>
      </div>
    </>
  );
}

export default App;
