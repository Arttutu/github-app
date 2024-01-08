import styled from "styled-components";
import { Cor1, Cor7, Font } from "../Variaveis";

export const ContainerInput = styled.section`
  align-items: center;
  background-color: ${(props) => props.theme.colors.corContainer};
  border-radius: 15px;
  display: flex;
  margin-top: 36px;
  justify-content: space-around;
  height: 66px;
  width: 730px;
  > input {
    box-sizing: border-box;
    width: 80%;
    height: 100%;
    border: none;
    background-color: ${(props) => props.theme.colors.corContainer};
    color: ${(props) => props.theme.colors.corTexto};
    font-size: 18px;
    font-family: ${Font};
    line-height: 25px;
  }
  > button {
    height: 50px;
    border-radius: 15px;
    border: none;
    background-color: ${Cor1};
    cursor: pointer;
    color: ${Cor7};
    margin-right: 10px;
    width: 106px;
    transition: 0.5s;
  }
  > button:hover {
    background-color: #60abff;
  }
  > img {
    margin: 0px 32px;
  }
  @media (max-width: 768px) {
    width: 573px;
    height: 69px;
  }
`;
