import React from "react";
import { Container, Main } from "./styled";
import lua from "./icon-moon.svg";
import sol from "./icon-sun.svg";

export default function Home({ tema, setTema }) {
  const TemaLayouts = (tema) => (tema === "Light" ? "Dark" : "Light");

  const MudarTema = () => {
    setTema(TemaLayouts);
  };

  return (
    <Main>
      <Container>
        <div>
          <h1>devfinder</h1>
          <div>
            <button onClick={() => MudarTema()}>
              <span>{tema === "Light" ? "Light" : "Dark"}</span>
              <img src={tema === "Light" ? lua : sol} alt="Lua" />
            </button>
          </div>
        </div>
      </Container>
    </Main>
  );
}
