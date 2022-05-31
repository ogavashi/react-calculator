import { useReducer } from "react";

import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";
import * as actionTypes from "./constants/actionTypes";
import { reducer } from "./reducers/reducer";
import { formatOperand } from "./utilities/formatter";

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {});

  return (
    <div className="calculator-container">
      <div className="output">
        <div className="previous-operand">
          {formatOperand(previousOperand)} {operation}
        </div>
        <div className="current-operand">{formatOperand(currentOperand)}</div>
      </div>
      <OperationButton
        className="topButton"
        operation={"AC"}
        dispatch={dispatch}
        action={{ type: actionTypes.CLEAR }}
      />
      <OperationButton
        className="topButton"
        operation={"DEL"}
        dispatch={dispatch}
        action={{ type: actionTypes.DELETE_DIGIT }}
      />
      <OperationButton
        className="topButton"
        operation={"+/-"}
        dispatch={dispatch}
        action={{ type: actionTypes.INVERT_DIGIT }}
      />
      <OperationButton className="operationButton" operation={"÷"} dispatch={dispatch} />
      <DigitButton value={"7"} dispatch={dispatch} />
      <DigitButton value={"8"} dispatch={dispatch} />
      <DigitButton value={"9"} dispatch={dispatch} />
      <OperationButton className="operationButton" operation={"×"} dispatch={dispatch} />
      <DigitButton value={"4"} dispatch={dispatch} />
      <DigitButton value={"5"} dispatch={dispatch} />
      <DigitButton value={"6"} dispatch={dispatch} />
      <OperationButton className="operationButton" operation={"-"} dispatch={dispatch} />
      <DigitButton value={"1"} dispatch={dispatch} />
      <DigitButton value={"2"} dispatch={dispatch} />
      <DigitButton value={"3"} dispatch={dispatch} />
      <OperationButton className="operationButton" operation={"+"} dispatch={dispatch} />
      <DigitButton className="span-two" value={"0"} dispatch={dispatch} />
      <DigitButton value={"."} dispatch={dispatch} />
      <OperationButton
        className="operationButton"
        operation={"="}
        dispatch={dispatch}
        action={{ type: actionTypes.EVALUATE }}
      />
    </div>
  );
}

export default App;
