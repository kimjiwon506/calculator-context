import React from "react";
import * as Styled from "./styled";

import Button from "./../Button/index";
import Input from "./../Input/index";

function Calculator({ calc, onClick }) {
  const handleClick = (item) => {
    onClick(item);
  };

  return (
    <Styled._Container>
      <Styled._Wrap>
        <Input calc={calc} />
        <Styled._ButtonWrap>
          {calc.buttonArray.map((item, index) => (
            <Button
              item={item}
              index={index}
              onClick={() => handleClick(item)}
            />
          ))}
        </Styled._ButtonWrap>
      </Styled._Wrap>
    </Styled._Container>
  );
}

export default Calculator;
