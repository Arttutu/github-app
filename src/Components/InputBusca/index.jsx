import React, { useState } from "react";
import axios from "axios";
import { ContainerInput } from "./Style";
import iconeBusca from "./icon-search.svg";
import ContainerDados from "../ContainerDados";

export default function InputBusca() {
  const [usuarioEncontrado, setUsuarioEncontrado] = useState(false);
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
  const erroUsuario = !usuarioEncontrado ? "sem resultado" : "";

  return (
    <>
      <ContainerInput>
        <img
          src={iconeBusca}
          alt="Icone de Lupa para buscar um usuário do GitHub"
        ></img>
        <input
          placeholder="Buscar GitHub por id..."
          value={termoBusca}
          onChange={handleInputChange}
        ></input>
        <p>{erroUsuario}</p>
        <button onClick={pesquisar}>Buscar</button>
      </ContainerInput>
      <ContainerDados usuario={usuarioEncontrado} />
    </>
  );
}
