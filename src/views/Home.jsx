import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

export default function Home() {
    const [id, setId] = useState("");
    const navigate = useNavigate();
    const especie = 'Human';
    const irAPersonajes = () => {
        if (id !== '')
            navigate(`/personajes/${especie}/${id}`);
    };
    return (
        <div className="mt-5">
            <h3>Consulta de personajes de la serie Rick and Morty por ID</h3>
            <input
                type="number"
                value={id}
                onChange={({ target }) => setId(target.value)}
            />
            <Button variant="warning" onClick={irAPersonajes}>Consultar</Button>
            
        </div>
    );
}