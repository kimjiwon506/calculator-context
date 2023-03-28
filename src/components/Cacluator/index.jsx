import React from 'react';
import * as Styled from './styled';

import { useContext } from 'react';
import { CalculatorContext } from '../../context/calculator';

import Button from './../Button/index';
import Input from './../Input/index';

function Calculator() {

    const { calc, setCalc, shouldSetNumberRef, prevNumberRef } = useContext(CalculatorContext);

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
        <Styled._Container> 
            <Styled._Wrap>  
                <Input calc={calc} />
                <Styled._ButtonWrap>
                    {calc.buttonArray.map((item, index) => <Button item={item} index={index} onClick={()=>onClick(item)} />)}
                </Styled._ButtonWrap>
            </Styled._Wrap>
        </Styled._Container>
    );
}

export default Calculator;