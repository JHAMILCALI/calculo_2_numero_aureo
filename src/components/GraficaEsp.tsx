import { useEffect, useState } from "react";

const GraficaEsp = () => {
  const [ggbReady, setGgbReady] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  // Comandos paso a paso y nombre del objeto creado (para eliminar si se retrocede)
  const steps = [
    { command: 'A = (0, 0)', name: 'A' },
    { command: 'D = (0, 5)', name: 'D' },
    { command: 'F = (8.09, 0)', name: 'F' },
    { command: 'P = (8.09, 5)', name: 'P' },
    { command: 'Polygon(A, F, P, D)', name: 'poly1' },

    { command: 'pol2 = Polygon(F, P, 4)', name: 'pol2' },
    { command: 'pol3 = Polygon(B, D, 4)', name: 'pol3' },
    { command: 'pol4 = Polygon(E, A, 4)', name: 'pol4' },
    { command: 'pol5 = Polygon(H, C, 4)', name: 'pol5' },
    { command: 'pol6 = Polygon(J, G, 4)', name: 'pol6' },
    { command: 'pol7 = Polygon(L, I, 4)', name: 'pol7' },

    { command: 'arc1 = Arc(Circle(O,L), L, N)', name: 'arc1' },
    { command: 'arc2 = Arc(Circle(M,J), J, L)', name: 'arc2' },
    { command: 'arc3 = Arc(Circle(K, H), H, J)', name: 'arc3' },
    { command: 'arc4 = Arc(Circle(I, E), E, H)', name: 'arc4' },
    { command: 'arc5 = Arc(Circle(G, B), B, E)', name: 'arc5' },
    { command: 'arc6 = Arc(Circle(C, F), F, B)', name: 'arc6' },
  ];

  useEffect(() => {
    const params = {
      appName: "classic",
      width: 800,
      height: 500,
      showAlgebraView: false,
      scaleContainerClass: "ggb-container",
      showZoomButtons: true,           // ✅ Botones de lupa (zoom in/out)
  enableShiftDragZoom: true, 
    };

    const ggbApp = new (window as any).GGBApplet(params, true);
    ggbApp.inject("ggb-element");

    setTimeout(() => {
      const ggb = (window as any).ggbApplet;
      ggb.setAxesVisible(false, false);
      ggb.setCoordSystem(70, 0, -50, 20);





      // Ocultar etiquetas de todos los posibles puntos
      const points = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"];
      points.forEach((p) => ggb.setLabelVisible(p, false));

      setGgbReady(true);
    }, 1500);
  }, []);

  const evalCurrent = (index: number) => {
    const ggb = (window as any).ggbApplet;
    if (ggbReady && index >= 0 && index < steps.length) {
      ggb.evalCommand(steps[index].command);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      evalCurrent(currentStep);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    const ggb = (window as any).ggbApplet;
    if (ggbReady && currentStep > 0) {
      const prevObj = steps[currentStep - 1].name;
      ggb.evalCommand(`Delete(${prevObj})`);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    const ggb = (window as any).ggbApplet;
    if (ggbReady) {
      // Eliminar todos los objetos creados
      for (let i = 0; i < currentStep; i++) {
        ggb.evalCommand(`Delete(${steps[i].name})`);
      }
      setCurrentStep(0);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <div id="ggb-element" style={{ width: "800px", height: "500px" }}></div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={handleReset}
          style={buttonStyle}
        >
          ⏮️ Reiniciar
        </button>
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          style={buttonStyle}
        >
          ⬅️ Paso anterior
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep >= steps.length}
          style={buttonStyle}
        >
          ➡️ Siguiente paso
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#3a86ff",
  color: "#fff",
  cursor: "pointer",
};

export default GraficaEsp;
