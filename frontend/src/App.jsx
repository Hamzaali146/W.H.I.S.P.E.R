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
          <div className="absolute top-0 left-0 z-[1] ">dsd</div>
          <ModelViewer
            url="https://raw.githubusercontent.com/Hamzaali146/Heart_3D_model/main/source/realistic_human_heart.glb"
            width={"100%"}
            height={"100vh"}
            defaultZoom={1.5}
            showScreenshotButton={true}
            // maxZoomDistance={3}
            enableManualZoom={false}
            fillLightIntensity={1}
            autoRotateSpeed={0.2}
            // ambientIntensity={1}
            rimLightIntensity={2}
            // environmentPreset={"Park"}
            fadeIn={true}
            autoRotate={true}
            modelXOffset={-0.1}
            modelYOffset={-0.01}
          />

        </div>
      </div>
    </>
  );
}

export default App;
