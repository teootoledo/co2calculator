import React, { useState, useEffect } from "react";
import CalculadoraCADR from "../components/calculadora/CalculadoraCADR";
import CalculadoraCO2 from "../components/calculadora/CalculadoraCO2";
import { Image, Box, Container } from "@chakra-ui/react";

const MainPage = () => {
  return (
    <>
      <div className="container">
        {/* <Box boxSize="sm">
          <Image
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
            className="center-block"
          />
        </Box> */}
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="card">
              <CalculadoraCADR />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="card">
              <CalculadoraCO2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
