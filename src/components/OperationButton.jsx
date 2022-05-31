import React from "react";
import * as actionTypes from "../constants/actionTypes";

const OperationButton = ({ className, operation, dispatch, action }) => {
  return (
    <button
      onClick={() => {
        dispatch(action ? action : { type: actionTypes.CHOOSE_OPERATION, payload: { operation } });
      }}
      className={className}
    >
      {operation}
    </button>
  );
};

export default OperationButton;
