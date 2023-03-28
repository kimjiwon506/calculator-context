import React from 'react';
import Calculator from '../components/Cacluator/index';

import { useContext } from 'react';
import { CalculatorContext } from '../context/calculator';

export default function CalculatorContainer() {
    const { calc, setCalc, shouldSetNumberRef, prevNumberRef } = useContext(CalculatorContext);

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
              setCalc({ ...calc, inputValue: prevNumberRef.current });
          }
        }
      };
    
    return (
        <Calculator calc={calc} onClick={onClick} />
    );
}