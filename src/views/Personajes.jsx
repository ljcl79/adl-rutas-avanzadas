import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PersonajeCard from "../componentes/PersonajeCard";

export default function Personajes() {

    const [personaje,setPersonaje] = useState({});
    const baseUrl = 'https://rickandmortyapi.com/api/character';
    const { especie, id } = useParams();

    const getDatosPersonaje = async(id) => {
        console.log(`${baseUrl}/${id}`);
        const res = await fetch(`${baseUrl}/${id}`);
        const data = await res.json();

        console.log(data);
        //Asignaci�n de los datos al estado personaje
        setPersonaje(data);
    }

    useEffect(() => {
        /* CallBack */
        getDatosPersonaje(id);
        /* Descarga del componente 
        return () => {
            cleanup
        };
        */
    }, /*Dependencias*/[id]);

    return (
        <div className="mt-5 text-center">
            <h1>{especie}</h1>
            <div className="d-flex justify-content-center">
            <PersonajeCard personaje={personaje}/>
            </div>
        </div>
    );
}