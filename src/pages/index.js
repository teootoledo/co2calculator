import React, { useState, useEffect } from "react";
import CalculadoraCADR from "../components/calculadora/CalculadoraCADR";
import CalculadoraCO2 from "../components/calculadora/CalculadoraCO2";
import Post from "../components/Post/Post";
import { PostsList } from "../components/Post/PostsList";
import { Button } from "@chakra-ui/react";
import { Link } from "react-scroll";

const MainPage = () => {
  const [room, setRoom] = useState({
    alto: null,
    ancho: null,
    largo: null,
    cadr: null,
    cambiosAire: 5,
    cambiosFiltro: null,
    ventilacion: null,
    volumen: null,
  });

  const encabezado = PostsList[0];
  const infoPosterior = PostsList[1];
  const infoResaltada = PostsList[2];
  const infoPosterior2 = PostsList[3];
  const infoPosterior3 = PostsList[4];
  const infoPosterior4 = PostsList[6];
  const imagenGrafico = PostsList[5];
  const imagenAula = PostsList[7];
  const fichaTecnica = PostsList[8];

  return (
    <>
      <section id="inicio">
        <div className="container">
          <section id="calculadora">
            <Post post={encabezado} />
            <div className="row">
              <div className="col-md-6 col-12" id="calculadora">
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
          </section>
          <section id="informacion">
            <Post post={infoPosterior} id="informacion" />
            <Post post={infoResaltada} />
            <Post post={infoPosterior2} />
            <Post post={imagenGrafico} />
            <Post post={infoPosterior3} />
            <Post post={imagenAula} />
            <Post post={infoPosterior4} />
            <Post post={fichaTecnica} />
            <Button className="neuBtn2 neuBackground mb-5">
              <Link to="inicio" smooth={true} duration={500} offset={-110}>
                Volver al inicio
              </Link>
            </Button>
          </section>
        </div>
      </section>
    </>
  );
};

export default MainPage;
