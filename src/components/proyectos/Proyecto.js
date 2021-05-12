import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
    //obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    //obtener el state de tareas
    const tareasContext = useContext(tareaContext);
    const { obtenerTareas } = tareasContext;

    // funcion para aguegar el proyecto actual y las tareas de ese proyecto
    const seleccionarProyecto = (id) => {
        proyectoActual(id); //fijar un  proyecto actual
        obtenerTareas(id); //fijar las tareas de ese proyecto
    };

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => seleccionarProyecto(proyecto.id)}
            >
                {proyecto.nombre}
            </button>
        </li>
    );
};

export default Proyecto;
