import styled from 'styled-components';

export const AppContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 40px;
`;
export const StyledH1 = styled.h1`
  font-size: 60px;
`;
export const StyledButton = styled.button`
  padding: 8px 8px;
  width: 180px;
  border: 1px solid black;
  outline: none;
  color: white;
  background: black;
  font-size: 14px;
`;

export const StyledInput = styled.input`
  padding: 8px 8px;
  background: white;
  width: 164px;
  outline: none;
  border: 1px solid black;
  color: black;
  font-size: 14px;
`;

export const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  grid-gap: 20px;
`;
