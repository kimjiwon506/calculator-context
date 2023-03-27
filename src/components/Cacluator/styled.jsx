import styled from "@emotion/styled";

export const _Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111111;
`;

export const _Wrap = styled.div`
  max-width: 290px;
  background: #111111;
  box-sizing: border-box;
  padding: 20px 0;
`;

export const _ButtonWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 10px 10px;
`
