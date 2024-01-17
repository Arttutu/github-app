import styled from "styled-components";
import { Cor1, Cor4, Font } from "../Variaveis";

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
    min-height: 600px;
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
    > p {
      max-width: 279px;
      font-size: 13px;
    }
  }
`;

export const ContainerNome = styled.div`
  display: flex;
  justify-content: space-between;
  width: 480px;
  > div {
    display: flex;
    align-items: top;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    h2 {
      font-family: ${Font};
      font-weight: bold;
      font-size: 26px;
      max-width: 176px;
      color: ${(props) => props.theme.colors.corTexto};
    }
    p {
      font-family: ${Font};
      font-size: 16px;
      color: ${Cor1};
    }
  }
  > div {
    span {
      font-family: ${Font};
      font-size: 16px;
      width: 166px;
      color: ${(props) => props.theme.colors.corSpan};
    }
  }

  @media (max-width: 768px) {
    width: 200px;
    justify-content: start;
    gap: 37px;

    div {
      min-width: 200px;
      flex-direction: column;
      align-items: normal;
      > div {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
    }
  }
  @media (max-width: 525px) {
    flex-direction: column;
    width: 100px;

    > div {
      max-width: 100px;
      h2 {
        font-size: 16px;
      }
      p {
        font-size: 13px;
      }
    }
    > div {
      span {
        width: 150px;
        font-size: 13px;
      }
    }
  }
`;
export const ContainerImagem = styled.div`
  display: flex;

  img {
    margin-left: 48px;
    margin-right: 37px;
    width: 117px;
    height: 117px;
    border-radius: 50%;
  }
  @media (max-width: 525px) {
    img {
      margin-left: 24px;
      margin-right: 19px;
    }
  }
`;
export const ContainerUser = styled.div`
  margin-top: 32px;
  margin-left: 202px;
  max-width: 480px;
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
  width: 480px;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 480px;
    > div {
      display: flex;
      align-items: center;
      gap: 10px;
      a {
        cursor: pointer;
        text-decoration: none;
        &:hover {
          text-decoration: dashed;
        }
      }
      h4 {
        font-family: ${Font};
        font-size: 15px;
        color: ${(props) => props.theme.colors.corTexto};
        word-wrap: break-word;
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
    margin-left: 32px;
  }
  @media (max-width: 525px) {
    margin-top: 0px;
    margin-left: 24px;
    width: 0px;
    > div {
      align-items: normal;
      flex-direction: column;
      width: 150px;
      > div {
        margin: 16px 0px;
        h4 {
          max-width: 185px;
          font-size: 13px;
          word-wrap: break-word;
        }
      }
    }
  }
`;
