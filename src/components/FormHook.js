import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const FormHook = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    e.target.reset();
  };

  return (
    <Fragment>
      <h1>Formulario con FormHook</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="ancho"
          className="form-control my-2"
          ref={register({
            required: { value: true, message: "Ancho obligatorio" },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors?.ancho?.message}
        </span>
        <input
          name="largo"
          className="form-control my-2"
          ref={register({
            required: { value: true, message: "Largo obligatorio" },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors?.largo?.message}
        </span>
        <input
          name="alto"
          className="form-control my-2"
          ref={register({
            required: { value: true, message: "Alto obligatorio" },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors?.alto?.message}
        </span>
        <input
          name="cambiosAire"
          className="form-control my-2"
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
        <button className="btn btn-primary">Calcular</button>
      </form>
    </Fragment>
  );
};

export default FormHook;
