import React from "react";
import { Container, Main } from "./styled";
import lua from "./icon-moon.svg";
import sol from "./icon-sun.svg";
import InputBusca from "../../Components/InputBusca";

export default function Home({ tema, setTema }) {
  const TemaLayouts = (tema) => (tema === "Light" ? "Dark" : "Light");

  const MudarTema = () => {
    setTema(TemaLayouts);
  };

  return (
    <Main>
      <Container>
        <header>
          <h1 title="devfinder">devfinder</h1>
          <div>
            <button onClick={() => MudarTema()}>
              <span>{tema === "Light" ? "Light" : "Dark"}</span>
              <img
                src={tema === "Light" ? lua : sol}
                alt="icone de Lua ou de um Sol"
              />
            </button>
          </div>
        </header>
        <InputBusca />
      </Container>
    </Main>
  );
}
