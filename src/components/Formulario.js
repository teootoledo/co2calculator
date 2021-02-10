import React, { Fragment, useState } from "react";

const Formulario = () => {
  const [room, setRoom] = useState({
    ancho: "",
    largo: "",
    alto: "",
    cambiosAire: "",
  });

  const handleInputChange = (event) => {
    setRoom({
      ...room,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(room.ancho);
  };

  return (
    <Fragment>
      <h1>Formulario</h1>
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3">
          <label>Ancho:</label>
          <input
            className="form-control"
            type="number"
            name="ancho"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <label>Largo:</label>
          <input
            className="form-control"
            type="number"
            name="largo"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <label>Alto:</label>
          <input
            className="form-control"
            type="number"
            name="alto"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <label>Cambios del aire:</label>
          <input
            className="form-control"
            type="number"
            name="cambiosAire"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" type="submit">
            Calcular
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Formulario;
