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
  @media (max-width: 525px) {
    width: 327px;
    height: 517px;
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
  > div {
    &.data {
      font-family: ${Font};
      font-size: 15px;
      color: ${(props) => props.theme.colors.corTexto};
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
  @media (max-width: 525px) {
    > div {
      img {
        width: 70px;
        height: 70px;
      }
    }
    div {
      &.usuario_info {
        h2 {
          font-size: 16px;
        }
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
  @media (max-width: 525px) {
    width: 279px;
    gap: 1px;
    justify-content: space-around;
    text-align: center;
    padding-left: 0px;
    margin-bottom: 24px;
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
        fill: ${(props) => props.theme.colors.corTexto};
        margin: 0px;
        width: 20px;
        height: 20px;
      }
      &.location_icon {
        object-fit: cover;
        width: 20px;
        height: 20px;
        fill: ${(props) => props.theme.colors.corTexto};
      }
    }
  }
  @media (max-width: 768px) {
    width: 493px;
    margin-left: 32px;
  }
  @media (max-width: 525px) {
    margin-top: 0px;
    margin-left: 24px;
    > div {
      align-items: normal;
      flex-direction: column;
      > div {
        margin: 16px 0px;
      }
    }
  }
`;
