import React, { useState } from "react";
import PropTypes from "prop-types";

const roomMeasures = {
  width: "",
  height: "",
  length: "",
  airChanges: "",
};

const CadrForm = ({ change }) => {
  const [state, setState] = useState(roomMeasures);

  const handleChange = (e) => {
    let { value, name } = e.target;
    if (value > 999) {
      value = 999;
    }
    const date = new Date().toLocaleString().split(",")[0];
    setState({
      ...state,
      [name]: value,
      date,
    });
  };

  const handleSubmit = () => {
    change(state);
    setState(roomMeasures);
  };

  return (
    <>
      <div className="row">
        <div className="col m4 s12">
          <label htmlFor="weight">Profundidad (en mts)</label>
          <input
            id="width"
            name="width"
            type="number"
            min="1"
            max="999"
            placeholder="3"
            value={state.width}
            onChange={handleChange}
          />
        </div>

        <div className="col m4 s12">
          <label htmlFor="height">Altura (en mts)</label>
          <input
            id="height"
            name="height"
            type="number"
            min="1"
            max="999"
            placeholder="176"
            value={state.height}
            onChange={handleChange}
          />
        </div>

        <div className="col m4 s12">
          <label htmlFor="height">Largo (en mts)</label>
          <input
            id="length"
            name="length"
            type="number"
            min="1"
            max="999"
            placeholder="176"
            value={state.length}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="center">
        <button
          id="calc-btn"
          className="calculate-btn"
          type="button"
          disabled={
            state.height === "" || state.width === "" || state.length === ""
          }
          onClick={handleSubmit}
        >
          Calcular
        </button>
      </div>
    </>
  );
};
CadrForm.propTypes = {
  change: PropTypes.func.isRequired,
};
export default CadrForm;
