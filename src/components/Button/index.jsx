import React, { useContext } from 'react';
import { CalculatorContext } from '../../context/calculator';
import * as Styled from './styled';

export default function Button() {
    const { calc, setCalc, shouldSetNumberRef, prevNumberRef } = useContext(CalculatorContext)
    const onClick = (item) => {
      if(item.type === "number") {
        setCalc((prev) => { 
          // prev.inputValue
          // const inputValue = prev.inputValue.replace(/(^0+)/, "") + item.text
          const inputValue = shouldSetNumberRef.current ? calc.inputValue :  prev.inputValue.replace(/(^0+)/, "") + item.text
          return {
            ...calc,
            inputValue
          }
        })
      }
      if(item.type === "operator") {
        const prevNumber = prevNumberRef.current;
        switch(item.text){
          case "+" : 
          return prevNumber + calc.inputValue
        }
        shouldSetNumberRef.current = true;
      }
    }
    return (
      <>
        {calc.buttonArray.map((item, index) => 
          <Styled._Button
          value={item.text}
          key={index}
          type="button"
          background={item.background}
          color={item.color}
          onClick={() => onClick(item)}
          >
            <div>{item.text}</div>
          </Styled._Button>
        )}
      </>
    );
}