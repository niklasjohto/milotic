import "./css/style.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import E404 from "./components/E404";
import Pokemon from "./components/Pokemon";
import Error from "./components/Error";
import PokeDex from "./components/PokeDex";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="/pokedex" element={<PokeDex />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
