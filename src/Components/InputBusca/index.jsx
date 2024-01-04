import React from "react";
import { ContainerInput } from "./Style";
import iconeBusca from "./icon-search.svg";

export default function InputBusca() {
  return (
    <ContainerInput>
      <img
        src={iconeBusca}
        alt="Icone de Lupa para buscar um usuario do github"
      ></img>
      <input placeholder="Buscar usuário Github"></input>
      <button>Buscar</button>
    </ContainerInput>
  );
}
