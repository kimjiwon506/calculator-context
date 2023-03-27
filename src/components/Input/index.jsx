import React from "react";
import { useContext } from "react";
import { CalculatorContext } from "../../context/calculator";
import * as Styled from './styled';

function Input() {
    const { calc } = useContext(CalculatorContext)
    return (
        <div>
            <Styled._Input type="text" value={calc.inputValue || ""} readOnly />  
        </div>
    );
}

export default Input;