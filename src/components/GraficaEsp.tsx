import React, { useEffect } from "react";

const GraficaEsp = () => {
  useEffect(() => {
    const params = {
      appName: "classic",
      width: 800,
      height: 500,
      //   showToolBar: false,
      //   showMenuBar: false,
      //   showAlgebraInput: false,
      //   showResetIcon: false,
      //   enableShiftDragZoom: false,
      //   showToolBarHelp: false,
      //   showZoomButtons: true,
      //   showSpreadsheetView: true,
      //   useBrowserForJS: false,
      showAlgebraView: false,
      scaleContainerClass: "ggb-container",
    };

    const ggbApp = new (window as any).GGBApplet(params, true);
    ggbApp.inject("ggb-element");

    setTimeout(() => {
      const ggb = (window as any).ggbApplet;

      // Ocultar ejes y etiquetas
      ggb.setAxesVisible(false, false);
      ggb.setLabelVisible(false);
      ggb.setCoordSystem(-7, 10, -10, 10);
      // Definir puntos exactos como en tu imagen
      ggb.evalCommand("A = (0, 0)");
      ggb.evalCommand("D = (0, 5)");
      ggb.evalCommand("F = (8.09, 0)");
      ggb.evalCommand("P = (8.09, 5)");

      const poligono = ggb.evalCommand("Polygon(A, F, P, D)");

      ggb.evalCommand("pol2 = Polygon(F, P, 4)");
      ggb.evalCommand("pol3 = Polygon(B, D, 4)");
      ggb.evalCommand("pol4 = Polygon(E, A, 4)");
      ggb.evalCommand("pol5 = Polygon(H, C, 4)");
      ggb.evalCommand("pol6 = Polygon(J, G, 4)");
      ggb.evalCommand("pol7 = Polygon(L, I, 4)");


      //para los arcos
      //ggb.evalCommand("c = Circle(O, L)");
      //ggb.setVisible("c", false);


      ggb.evalCommand("arc1 = Arc(Circle(O,L), L, N)");
    }, 1500);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div id="ggb-element" style={{ width: "800px", height: "500px" }}></div>
    </div>
  );
};

export default GraficaEsp;
