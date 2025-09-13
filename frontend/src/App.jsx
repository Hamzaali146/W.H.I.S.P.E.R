import { useState, useEffect } from "react";
import "./App.css";
import Beams from "./bg/Beams";
import ModelViewer from "./components/ModelViewer";

function App() {
  const [modelYOffset, setModelYOffset] = useState(-0.07);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setModelYOffset(0);
      } else {
        setModelYOffset(-0.07);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-[#B01E28] text-white">
        <div className="md:w-[58%] mt-10 md:mt-0">
          <div className="font-boldonse text-5xl md:text-8xl text-center mb-3">W.H.I.S.P.E.R</div>
          <div className="font-sans text-4xl text-center md:px-16">Waveform Heart Intelligence Signal Processing & Early Recognition</div>
        </div>
        <div className="model-viewer-container w-full md:w-[42%]">
          <ModelViewer
            url="https://raw.githubusercontent.com/Hamzaali146/Heart_3D_model/main/source/realistic_human_heart.glb"
            width={"100%"}
            height={"100vh"}
            defaultZoom={1.5}
            showScreenshotButton={true}
            enableManualZoom={false}
            fillLightIntensity={1}
            autoRotateSpeed={0.2}
            rimLightIntensity={2}
            fadeIn={true}
            autoRotate={true}
            modelXOffset={-0.1}
            modelYOffset={modelYOffset} 
          />
        </div>
      </div>
    </>
  );
}

export default App;