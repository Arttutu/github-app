import { ThemeProvider } from "styled-components";
import Home from "./Paginas/Home";
import { Cor4, Cor5, Cor7, Cor8 } from "./Components/Variaveis";
import { useState } from "react";

function App() {
  const [tema, setTema] = useState("Dark");
  const temas = {
    Light: {
      colors: {
        corPrimeira: Cor5,
        corTexto: Cor4,
      },
    },
    Dark: {
      colors: {
        corPrimeira: Cor8,
        corTexto: Cor7,
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
