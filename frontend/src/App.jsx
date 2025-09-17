import { useState, useEffect } from "react";
import "./App.css";
import Beams from "./bg/Beams";
import ModelViewer from "./components/ModelViewer";
import { LifeLine } from "react-loading-indicators";

function App() {
  const [modelYOffset, setModelYOffset] = useState(-0.07);
  const [loading, setLoading] = useState(true);

  // Set Y Offset based on screen size
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

  // Simulate loading state (you can replace with onLoad from ModelViewer)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Show loader for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen bg-[#B01E28]">
          <LifeLine color="#ffffff" size="large" text="W.H.I.S.P.E.R" textColor="#ffffff" />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-[#B01E28] text-white">
          <div className="md:w-[58%] mt-10 md:mt-0">
            <div className="font-boldonse text-5xl md:text-8xl text-center mb-3">
              W.H.I.S.P.E.R
            </div>
            <div className="font-sans text-4xl text-center md:px-16">
              Waveform Heart Intelligence Signal Processing & Early Recognition
            </div>
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
      )}
    </>
  );
}

export default App;