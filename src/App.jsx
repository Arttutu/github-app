import { ThemeProvider } from "styled-components";
import Home from "./Paginas/Home";
import {
  Cor3,
  Cor4,
  Cor5,
  Cor6,
  Cor7,
  Cor8,
  Cor9,
} from "./Components/Variaveis";
import { useState } from "react";

function App() {
  const [tema, setTema] = useState("Dark");
  const temas = {
    Light: {
      colors: {
        corPrimeira: Cor5,
        corTexto: Cor4,
        corTextoDois: Cor3,
        corContainer: Cor6,
      },
    },
    Dark: {
      colors: {
        corPrimeira: Cor8,
        corTexto: Cor7,
        corTextoDois: Cor7,
        corContainer: Cor9,
      },
    },
  };
  return (
    <ThemeProvider theme={temas[tema]}>
      <Home tema={tema} setTema={setTema} />
    </ThemeProvider>
  );
}

export default App;
