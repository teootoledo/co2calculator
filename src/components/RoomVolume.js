import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const RoomVolume = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Fragment>
      <h1>Formulario</h1>
      <form>
        <input
          name="ancho"
          placeholder="Ancho"
          type="number"
          className="form-control my-2"
          ref={register({
            required: { value: true, message: "Ancho obligatorio" },
            minLength: { value: 1, message: "Mínimo un dígito" },
          })}
        />
        <input
          name="largo"
          placeholder="Largo"
          type="number"
          className="form-control my-2"
          ref={register({
            required: { value: true, message: "Largo obligatorio" },
            minLength: { value: 1, message: "Mínimo un dígito" },
          })}
        />
        <input
          name="alto"
          placeholder="Alto"
          type="number"
          className="form-control my-2"
          ref={register({
            required: { value: true, message: "Alto obligatorio" },
            minLength: { value: 1, message: "Mínimo un dígito" },
          })}
        />
        <input
          name="cambiosAire"
          placeholder="Cambios de aire"
          type="number"
          className="form-control my-2"
          ref={register({
            required: { value: true, message: "Ancho obligatorio" },
            minLength: { value: 1, message: "Mínimo un dígito" },
          })}
        />
      </form>
    </Fragment>
  );
};

export default RoomVolume;
