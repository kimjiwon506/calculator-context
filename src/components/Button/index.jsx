import React from 'react';
import * as Styled from './styled';

export default function Button({item, onClick}) {
    return (
      <>
        <Styled._Button
        value={item.text}
        key={item.index}
        type="button"
        background={item.background}
        color={item.color}
        onClick={onClick}
        className={item.text === '0' ? 'zero' : ''}
        >
          <div>{item.text}</div>
        </Styled._Button>
      </>
    );
}