import styled from "styled-components";
import { Font } from "../../Components/Variaveis";

export const Main = styled.main`
  min-width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.corPrimeira};
`;

export const Container = styled.section`
  width: 730px;
  height: 586px;
  box-sizing: border-box;
  margin: 0 auto;
  padding-top: 144px;

  > header {
    display: flex;
    justify-content: space-between;
    width: 100;
    align-items: center;
    h1 {
      font-size: 26px;
      letter-spacing: 0px;
      font-family: ${Font};
      color: ${(props) => props.theme.colors.corTexto};
    }
    > div {
      button {
        display: flex;
        align-items: center;
        gap: 16px;
        border: none;
        background-color: ${(props) => props.theme.colors.corPrimeira};
        cursor: pointer;
        span {
          text-transform: uppercase;
          font-weight: bold;
          font-size: 13px;
          letter-spacing: 2.5px;
          color: ${(props) => props.theme.colors.corTexto};
        }
        img {
        }
      }
    }
  }
  @media (max-width: 768px) {
    width: 573px;
  }
`;
