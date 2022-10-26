import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lista from "../pages/Lista/lista";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" caseSensitive={false} element={<Lista />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
