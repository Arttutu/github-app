import styled from "styled-components";
import { Cor1, Font } from "../Variaveis";

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.corContainer};
  border-radius: 15px;
  margin-top: 24px;
  height: 444px;
  width: 730px;
  > div {
    display: flex;
    align-items: top;

    img {
      width: 117px;
      height: 117px;
      border-radius: 50%;
    }
    > div {
      display: flex;
      flex-direction: column;
      gap: 20px;

      h2 {
        font-family: ${Font};
        font-weight: bold;
        font-size: 26px;
        color: ${(props) => props.theme.colors.corTexto};
      }
      span {
        font-family: ${Font};
        font-size: 16px;
        color: ${Cor1};
      }
      p {
        font-family: ${Font};
        font-size: 15px;
        color: ${(props) => props.theme.colors.corTextoDois};
      }
      > div {
        display: flex;
        align-items: center;
        justify-content: start;
        padding-left: 32px;
        gap: 100px;
        border-radius: 10px;
        background-color: ${(props) => props.theme.colors.corPrimeira};
        width: 480px;
        height: 85px;
        > div {
          display: flex;
          flex-direction: column;
          gap: 0.5em;
          h3 {
            font-family: ${Font};
            font-size: 13px;
            color: ${(props) => props.theme.colors.corTextoDois};
          }
          p {
            font-weight: bold;
            font-size: 22px;
          }
        }
      }
    }
  }
`;
