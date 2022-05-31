import * as actionTypes from "../constants/actionTypes";
import { evaluate } from "../utilities/evaluate";

export const reducer = (state, { type, payload }) => {
  console.log(payload, state.currentOperand, state.previousOperand);
  switch (type) {
    case actionTypes.ADD_DIGIT:
      console.log("1");
      if (state.overwrite)
        return {
          ...state,
          currentOperand: payload.value,
          overwrite: false,
        };

      if (payload.value === "0" && state.currentOperand === "0") {
        return state;
      }
      if (payload.value === "." && state.currentOperand == null) {
        return state;
      }

      if (payload.value === "." && state.currentOperand.includes(".")) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || " "}${payload.value}`,
      };
    case actionTypes.CHOOSE_OPERATION:
      console.log("2");
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };

    case actionTypes.DELETE_DIGIT:
      if (state.overwrite)
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };

      if (state.currentOperand == null) {
        return state;
      }
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: "0" };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case actionTypes.EVALUATE:
      if (
        state.currentOperand == null ||
        state.previousOperand == null ||
        state.operation == null
      ) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        currentOperand: evaluate(state),
        operation: null,
      };

    case actionTypes.INVERT_DIGIT: {
      return { ...state, currentOperand: state.currentOperand * -1 };
    }
    case actionTypes.CLEAR:
      return {
        ...state,
        currentOperand: "0",
        previousOperand: null,
        operation: null,
      };
    default:
      return state;
  }
};
