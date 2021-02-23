import React, { useState, useEffect } from "react";
import CalculadoraCADR from "../components/Calculadora/CalculadoraCADR";
import CalculadoraCO2 from "../components/Calculadora/CalculadoraCO2";
import Post from "../components/Post/Post";
import { Image, Box, Container } from "@chakra-ui/react";

const MainPage = () => {
  const [room, setRoom] = useState({
    alto: null,
    ancho: null,
    largo: null,
    cadr: null,
    cambiosAire: null,
    cambiosFiltro: null,
    ventilacion: null,
    volumen: null,
  });

  return (
    <>
      <div className="container">
        <Post />
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="card">
              <CalculadoraCADR room={room} setRoom={setRoom} />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="card">
              <CalculadoraCO2 room={room} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
