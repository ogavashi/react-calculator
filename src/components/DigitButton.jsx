import React from "react";
import * as actionTypes from "../constants/actionTypes";

const DigitButton = ({ className, value, dispatch }) => {
  return (
    <button
      onClick={() => dispatch({ type: actionTypes.ADD_DIGIT, payload: { value } })}
      className={className}
    >
      {value}
    </button>
  );
};

export default DigitButton;
