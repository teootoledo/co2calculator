import React from "react";
import Contador from "./components/Calculadora";
import "./App.css";
import Calculadora from "./components/Calculadora";
import Formulario from "./components/Formulario";
import FormHook from "./components/FormHook";
import RoomVolume from "./components/RoomVolume";

function App() {
  return (
    <div className="App">
      <section className="background App-content">
        {/* <FormHook /> */}
        <RoomVolume />
      </section>
    </div>
  );
}

export default App;
