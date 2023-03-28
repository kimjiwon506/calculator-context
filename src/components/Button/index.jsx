import React from 'react';
import * as Styled from './styled';

export default function Button({item, index, onClick}) {
    return (
      <>
        <Styled._Button
        value={item.text}
        key={index}
        type="button"
        background={item.background}
        color={item.color}
        onClick={onClick}
        >
          <div>{item.text}</div>
        </Styled._Button>
      </>
    );
}