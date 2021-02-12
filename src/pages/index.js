import React, { useState, useEffect } from "react";
import Calculadora from "../components/calculadora/Calculadora";

const MainPage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="card">
              <Calculadora />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="card">
              <Calculadora />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
