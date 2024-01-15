import styled from "styled-components";
import { Font } from "../../Components/Variaveis";

export const Main = styled.main`
  min-width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.corPrimeira};
  @media (max-width: 525px) {
    width: 375px;
    height: 777px;
  }
`;

export const Container = styled.div`
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
      font-weight: bold;
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
        :hover {
          color: ${(props) => (props.tema === "light" ? "#222731" : "#90A4D4")};
        }
        span {
          text-transform: uppercase;
          font-weight: bold;
          font-size: 13px;
          letter-spacing: 2.5px;
          color: ${(props) => props.theme.colors.corTexto};
        }
        img {
          color: ${(props) => props.theme.colors.corTexto};
        }
      }
    }
  }
  @media (max-width: 768px) {
    width: 573px;
  }
  @media (max-width: 525px) {
    padding-top: 31px;
    width: 327px;
    height: 38px;
  }
`;
