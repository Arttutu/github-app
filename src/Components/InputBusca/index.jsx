import React, { useState } from "react";
import axios from "axios";
import { ContainerInput } from "./Style";
import iconeBusca from "./icon-search.svg";
import ContainerDados from "../ContainerDados";

export default function InputBusca() {
  const [usuarioEncontrado, setUsuarioEncontrado] = useState(null);
  const [termoBusca, setTermoBusca] = useState("");

  const buscarUsuario = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${termoBusca}`
      );
      setUsuarioEncontrado(response.data);
    } catch (error) {
      console.error("Erro ao buscar usuário do GitHub: ", error);
      setUsuarioEncontrado(null);
    }
  };

  const handleInputChange = (event) => {
    setTermoBusca(event.target.value);
  };

  const pesquisar = () => {
    buscarUsuario();
  };

  return (
    <>
      <ContainerInput>
        <img
          src={iconeBusca}
          alt="Icone de Lupa para buscar um usuário do GitHub"
        ></img>
        <input
          placeholder="Buscar usuário do GitHub por nome"
          value={termoBusca}
          onChange={handleInputChange}
        ></input>
        <button onClick={pesquisar}>Buscar</button>
      </ContainerInput>
      <ContainerDados usuario={usuarioEncontrado} />
    </>
  );
}
