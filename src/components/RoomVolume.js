import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const RoomVolume = () => {
  const { register, errors, handleSubmit } = useForm();

  const [Altura, setAltura] = useState();
  const [Ancho, setAncho] = useState();
  const [Largo, setLargo] = useState();
  const [Volumen, setVolumen] = useState();
  const [CambiosAire, setCambiosAire] = useState();
  // const [Ventilacion, setVentilacion] = useState();
  const [Cadr, setCadr] = useState();

  const onSubmit = (e) => {
    setVolumen(Ancho * Largo * Altura);
    const resultado = Volumen * (CambiosAire - 4);
    setCadr(resultado);
    console.log(Cadr);
  };

  return (
    <Fragment>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="ancho"
          onChange={(e) => {
            const opcion = e.target.value;
            setAncho(opcion);
          }}
          className="form-control my-2"
          type="number"
          ref={register({
            required: { value: true, message: "Ancho obligatorio" },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors?.ancho?.message}
        </span>
        <input
          name="largo"
          onChange={(e) => {
            const opcion = e.target.value;
            setLargo(opcion);
          }}
          className="form-control my-2"
          type="number"
          ref={register({
            required: { value: true, message: "Largo obligatorio" },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors?.largo?.message}
        </span>
        <input
          name="alto"
          onChange={(e) => {
            const opcion = e.target.value;
            setAltura(opcion);
          }}
          className="form-control my-2"
          type="number"
          ref={register({
            required: { value: true, message: "Alto obligatorio" },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors?.alto?.message}
        </span>
        <input
          name="cambiosAire"
          onChange={(e) => {
            const opcion = e.target.value;
            setCambiosAire(opcion);
          }}
          className="form-control my-2"
          type="number"
          ref={register({
            required: {
              value: true,
              message: "Cantidad de cambios de aire obligatoria",
            },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors?.cambiosAire?.message}
        </span>

        {/*         <select
          name="ventilacion"
          class="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            const opcion = e.target.value;
            setVentilacion(opcion);
          }}
        >
          <option selected>Ventilación del recinto</option>
          <option value="0.5">Mala ventilación</option>
          <option value="1">Ventilación baja</option>
          <option value="1.5">Normal de colegio</option>
          <option value="3">Buena ventilación</option>
          <option value="4">Ventilación mejorada con sistema</option>
        </select> */}
        <button type="submit" className="btn btn-primary my-3">
          Calcular
        </button>
      </form>
      <p>CADR: {Ancho * Altura * Largo * (CambiosAire - 4)}m3/h</p>
    </Fragment>
  );
};

export default RoomVolume;
