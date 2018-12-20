import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  background: #0F111A;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;

export const AppContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
`;
export const StyledH1 = styled.h1`
  font-size: 64px;
`;
export const StyledButton = styled.button`
  padding: 12px 12px;
  width: 216px;
  border: 1px solid #89DDFF
  outline: none;
  color: white;
  background: #0F111A;
  font-size: 14px;
  cursor: pointer;
  border-radius: 20px;
  & + & {
    border: 1px solid #F07178;
  }
`;

export const StyledInput = styled.input`
  padding: 12px 12px;
  background: #464b5d;
  width: 194px;
  outline: none;
  border: 1px solid #0f111a;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  &::-webkit-input-placeholder {
    color: white;
  }
`;

export const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  grid-gap: 20px;
`;
