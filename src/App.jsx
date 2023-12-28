import { ThemeProvider } from "styled-components";
import Home from "./Paginas/Home";

function App() {
  return (
    <>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
