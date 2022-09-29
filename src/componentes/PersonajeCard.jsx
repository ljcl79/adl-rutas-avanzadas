import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function PersonajeCard({personaje}) {
    return (
        <Card className="col-lg-3 col-md-6 col-sm-12" >
            <Card.Img variant="top" src={personaje.image} />
            <Card.Body>
                <Card.Title>{personaje.name}</Card.Title>
                <Card.Text>
                    Especie: {personaje.species}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}
