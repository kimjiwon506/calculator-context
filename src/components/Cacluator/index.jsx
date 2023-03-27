import React from 'react';
import * as Styled from './styled';

import Button from './../Button/index';
import Input from './../Input/index';

function Calculator() {
    return (
        <Styled._Container> 
            <Styled._Wrap>  
                <Input />
                <Styled._ButtonWrap>
                    <Button />
                </Styled._ButtonWrap>
            </Styled._Wrap>
        </Styled._Container>
    );
}

export default Calculator;