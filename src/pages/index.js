import React, { useState, useEffect } from "react";
import CalculadoraCADR from "../components/calculadora/CalculadoraCADR";
// import CalculadoraCO2 from "../components/calculadora/CalculadoraCO2";
import { Image } from "@chakra-ui/react";

const MainPage = () => {
  return (
    <>
      <div className="container">
        <Image src="../static/imgs/isologo-adox.png" className="card-img-top" />
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="card">
              <CalculadoraCADR />
            </div>
          </div>
          {/*<div className="col-md-6 col-12">
            <div className="card">
              <CalculadoraCADR />
              {/* <CalculadoraCO2 />
            </div>
          </div>*/}
        </div>
      </div>
    </>
  );
};

export default MainPage;
