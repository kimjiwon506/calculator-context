import React, { useContext } from 'react';
import { CalculatorContext } from '../../context/calculator';
import * as Styled from './styled';

export default function Button() {
    const { calc, setCalc, shouldSetNumberRef, prevNumberRef } = useContext(CalculatorContext)
    
    const onClick = (item) => {
      if(item.type === "number") {
        setCalc((prev) => { 
          const inputValue = shouldSetNumberRef.current ? item.text :  prev.inputValue.replace(/(^0+)/, "") + item.text;
          shouldSetNumberRef.current = false;
          return {
            ...calc,
            inputValue
          }
        })
      }

      if(item.type === "operator") {
        switch(item.text){
          case "+" : 
          prevNumberRef.current = Number(prevNumberRef.current) + Number(calc.inputValue);
          shouldSetNumberRef.current = true;
          setCalc({...calc, inputValue: prevNumberRef.current});
        }
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