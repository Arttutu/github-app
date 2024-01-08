import styled from "styled-components";
import { Cor1, Font } from "../Variaveis";

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.corContainer};
  border-radius: 15px;
  margin-top: 24px;
  height: 444px;
  width: 730px;
  padding-top: 48px;
  display: flex;
  align-items: top;
  > div {
    width: 200px;
    img {
      width: 117px;
      height: 117px;
      margin-left: 20px;
      border-radius: 50%;
    }
  }
`;
export const ContainerNome = styled.div`
  display: flex;
  align-items: top;
  display: flex;
  gap: 20px;
  > div {
    img {
      width: 117px;
      height: 117px;
      border-radius: 50%;
      margin: 0px 32px;
    }
  }

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
`;
export const ContainerUser = styled.div`
  width: 480px;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 32px;
  gap: 100px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.corPrimeira};
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
`;
export const ContainerInfo = styled.div`
  margin-top: 10px;
  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
    > div {
      display: flex;
      align-items: center;
      gap: 8px;
      h4 {
        font-family: ${Font};
        font-size: 15px;
        color: ${(props) => props.theme.colors.corTexto};
      }
      img {
        margin: 0px;
        width: 30px;
        height: 30px;
        fill: ${(props) => props.theme.colors.corTexto};
      }
    }
  }
`;
