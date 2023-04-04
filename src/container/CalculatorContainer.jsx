import React from "react";
import Calculator from "../components/Cacluator/index";

import { useContext } from "react";
import { CalculatorContext } from "../context/calculator";

export default function CalculatorContainer() {
  const {
    calc,
    setCalc,
    shouldSetNumberRef,
    prevNumberRef,
    currentOperatorRef,
  } = useContext(CalculatorContext);

  const onClick = (item) => {
    if (item.type === "number") {
      setCalc((prev) => {
        const inputValue = shouldSetNumberRef.current
          ? item.text
          : prev.inputValue.replace(/(^0+)/, "") + item.text;
        shouldSetNumberRef.current = false;
        return {
          ...calc,
          inputValue,
        };
      });
    }

    const calculatorOperate = (prev, cur, oper) => {
      const prevNumber = Number(prev);
      const currentNumber = Number(cur);
      if (oper === "+") {
        return prevNumber + currentNumber;
      }
      if (oper === "-") {
        return prevNumber - currentNumber;
      }
      if (oper === "x") {
        return prevNumber * currentNumber;
      }
      if (oper === "÷") {
        return prevNumber / currentNumber;
      }
    };

    if (item.type === "operator") {
      switch (item.text) {
        case "+":
          prevNumberRef.current = calculatorOperate(
            Number(prevNumberRef.current),
            Number(calc.inputValue),
            "+"
          );
          break;
        case "-":
          prevNumberRef.current =
            prevNumberRef.current === 0
              ? calc.inputValue
              : calculatorOperate(
                  Number(prevNumberRef.current),
                  Number(calc.inputValue),
                  "-"
                );
          break;
        case "x":
          prevNumberRef.current =
            prevNumberRef.current === 0
              ? calc.inputValue
              : calculatorOperate(
                  Number(prevNumberRef.current),
                  Number(calc.inputValue),
                  "x"
                );
          break;
        case "÷":
          prevNumberRef.current =
            prevNumberRef.current === 0
              ? calc.inputValue
              : calculatorOperate(
                  Number(prevNumberRef.current),
                  Number(calc.inputValue),
                  "÷"
                );
          break;
        case "=":
          let operate = currentOperatorRef.current;
          prevNumberRef.current =
            prevNumberRef.current === 0
              ? calc.inputValue
              : calculatorOperate(
                  Number(prevNumberRef.current),
                  Number(calc.inputValue),
                  operate
                );
          break;
        default:
          return;
      }
      currentOperatorRef.current = item.text;
      shouldSetNumberRef.current = true;
      setCalc({
        ...calc,
        inputValue: prevNumberRef.current === 0 ? "0" : prevNumberRef.current,
      });
    }
    if (item.text === "C") {
      prevNumberRef.current = 0;
      calc.inputValue = 0;
      setCalc({ ...calc, inputValue: "0" });
      shouldSetNumberRef.current = false;
    }
  };

  console.log(
    calc.inputValue,
    prevNumberRef.current,
    "type:calc.inputValue",
    typeof calc.inputValue,
    "type:prevNumberRef.current",
    typeof prevNumberRef.current
  );

  return <Calculator calc={calc} onClick={onClick} />;
}
