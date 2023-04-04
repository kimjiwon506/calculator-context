import React from "react";
import Calculator from "../components/Cacluator/index";

import { useContext } from "react";
import { CalculatorContext } from "../context/calculator";

export default function CalculatorContainer() {
  const { calc, setCalc, shouldSetNumberRef, prevNumberRef } =
    useContext(CalculatorContext);

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
    if (item.type === "operator") {
      switch (item.text) {
        case "+":
          prevNumberRef.current =
            Number(prevNumberRef.current) + Number(calc.inputValue);
          shouldSetNumberRef.current = true;
          setCalc({ ...calc, inputValue: prevNumberRef.current === 0 ? '0' : prevNumberRef.current });
          break;
        case "-":
          prevNumberRef.current = 
          prevNumberRef.current === 0 ? calc.inputValue : Number(prevNumberRef.current) - Number(calc.inputValue);
          shouldSetNumberRef.current = true;
          setCalc({ ...calc, inputValue: prevNumberRef.current === 0 ? '0' : prevNumberRef.current });
          break;
        case "x":
          prevNumberRef.current = 
          prevNumberRef.current === 0 ? calc.inputValue : Number(prevNumberRef.current) * Number(calc.inputValue);
          shouldSetNumberRef.current = true;
          setCalc({ ...calc, inputValue: prevNumberRef.current === 0 ? '0' : prevNumberRef.current });
          break;
        case "÷":
            prevNumberRef.current = 
            prevNumberRef.current === 0 ? calc.inputValue : Number(prevNumberRef.current) / Number(calc.inputValue);
            shouldSetNumberRef.current = true;
            setCalc({ ...calc, inputValue: prevNumberRef.current === 0 ? '0' : prevNumberRef.current });
            break;
      }
    }
    if (item.text === "C") {
      prevNumberRef.current = 0; 
      calc.inputValue = 0;
      setCalc({...calc, inputValue: '0'});
      shouldSetNumberRef.current = false;
    }
  };

  console.log(calc.inputValue,prevNumberRef.current, 'type:calc.inputValue', typeof(calc.inputValue), 'type:prevNumberRef.current', typeof(prevNumberRef.current));

  return <Calculator calc={calc} onClick={onClick} />;
}
