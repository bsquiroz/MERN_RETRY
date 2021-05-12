import React, { useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const ListadoTarea = () => {
    //extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    //extraer el state de tareas context
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;

    //sino hay proyecto seleccionado
    if (!proyecto) return <h2>Seleccione un proyecto</h2>;

    //destructurar proyecto ya que viene en forma de arreglo
    const [proyectoActual] = proyecto;

    return (
        <>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasproyecto.length === 0 ? (
                    <li className="tarea">
                        <p>No hay tareas</p>
                    </li>
                ) : (
                    tareasproyecto.map((tarea) => (
                        <Tarea tarea={tarea} key={tarea.id} />
                    ))
                )}
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={() => eliminarProyecto(proyectoActual.id)}
            >
                Eliminar proyecto &times;
            </button>
        </>
    );
};

export default ListadoTarea;
