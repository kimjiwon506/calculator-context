import React from "react";
import * as Styled from './styled';

function Input({calc}) {
    return (
        <div>
            <Styled._Input type='number' value={calc.inputValue || ""} readOnly />  
        </div>
    );
}

export default Input;