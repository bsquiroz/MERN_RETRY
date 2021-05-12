import React, { useContext, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
    //obtenemos los proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    //obtener proyectos cuando carga
    useEffect(() => {
        obtenerProyectos();
        //eslint-disable-next-line
    }, []);

    //revisamos si el state tiene contenido
    if (proyectos.length === 0)
        return <p>No hay proyectos, comienza creando uno</p>;

    return (
        <ul className="listado-proyectos">
            {proyectos.map((proyecto) => (
                <Proyecto proyecto={proyecto} key={proyecto.id} />
            ))}
        </ul>
    );
};

export default ListadoProyectos;
