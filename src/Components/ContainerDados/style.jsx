import styled from "styled-components";
import { Cor1, Font } from "../Variaveis";

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.corContainer};
  border-radius: 15px;
  margin-top: 24px;
  height: 444px;
  width: 730px;
  padding-top: 48px;
  @media (max-width: 768px) {
    width: 573px;
    height: 481px;
  }
`;
export const Bio = styled.div`
  margin-left: 202px;
  margin-top: 24px;
  > p {
    font-family: ${Font};
    font-size: 15px;
    color: ${(props) => props.theme.colors.corTexto};
  }
  @media (max-width: 768px) {
    margin-left: 32px;
  }
`;
export const ContainerNome = styled.div`
  display: flex;
  align-items: center;
  > div {
    img {
      margin-left: 48px;
      width: 117px;
      height: 117px;
      border-radius: 50%;
    }
  }
  div {
    &.usuario_info {
      display: flex;
      align-items: center;
      justify-content: start;
      min-width: 480px;
      margin-left: 37px;
      gap: 138px;
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
    }
  }

  @media (max-width: 768px) {
    width: auto;
    justify-content: start;
    gap: 37px;
    > div {
      img {
        margin-left: 40px;
      }
    }
    > div {
      &.usuario_info {
        min-width: 200px;
        flex-direction: column;
        align-items: normal;
        > div {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        gap: 15px;
      }
    }
  }
`;
export const ContainerUser = styled.div`
  margin-top: 32px;
  margin-left: 202px;
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
      font-family: ${Font};
      font-size: 22px;
      color: ${(props) => props.theme.colors.corTextoDois};
    }
  }
  @media (max-width: 768px) {
    width: 493px;
    margin: 32px auto 0 auto;
  }
`;
export const ContainerInfo = styled.div`
  margin-top: 37px;
  margin-left: 202px;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 480px;
    > div {
      display: flex;
      align-items: center;
      gap: 10px;
      h4 {
        font-family: ${Font};
        font-size: 15px;
        color: ${(props) => props.theme.colors.corTexto};
      }
      img {
        margin: 0px;
        width: 20px;
        height: 20px;
      }
    }
  }
  @media (max-width: 768px) {
    width: 493px;
    margin-left: 32px;
  }
`;
