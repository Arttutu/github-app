import { createContext, useContext, useState } from "react";
import { Cor5, Cor8 } from "../Variaveis";
export const TemaContext = createContext();
TemaContext.displayName = "tema";

export const TemaProvider = ({ children }) => {
  const TemaLayouts = (tema) => (tema === "Light" ? "Dark" : "Light");
  const [tema, setTema] = useState("Light");
  const temas = {
    Light: {
      colors: {
        corPrimeira: Cor5,
      },
    },
    Dark: {
      colors: {
        corPrimeira: Cor8,
      },
    },
  };
  return (
    <TemaContext.Provider value={{ temas, tema, setTema, TemaLayouts }}>
      {children}
    </TemaContext.Provider>
  );
};

export const useTemaContex = () => {
  const { temas, tema, setTema, TemaLayouts } = useContext(TemaContext);

  function mudarTema() {
    return setTema(TemaLayouts);
  }
  return { temas, tema, setTema, mudarTema };
};
