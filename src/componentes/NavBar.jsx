import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Rutas Avanzadas</Navbar.Brand>
          <Nav className="me-auto">
          <NavLink end className={setActiveClass} to="/">
                Home
            </NavLink>
            {" - "}
            <NavLink className={setActiveClass} to="/personajes">
                Personajes
            </NavLink>
            {" - "}
            <NavLink className={setActiveClass} to="/otras_opciones">
                Otras opciones
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
        
    );
}