import './styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './componentes/NavBar';
import Home from './views/Home';
import Personajes from './views/Personajes';
import NotFound from './views/NotFound';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personajes/:especie/:id" element={<Personajes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}