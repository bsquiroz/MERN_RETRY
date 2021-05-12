import React, { useContext } from "react";
import tareaContext from "../../context/tareas/tareaContext";

const Tarea = ({ tarea }) => {
    //extraer el state de tareas context
    const tareasContext = useContext(tareaContext);
    const {
        eliminartarea,
        obtenerTareas,
        CambiarEstadoTarea,
        GuardarTareaActual,
    } = tareasContext;

    //funcion para cuando eliminamos una tarea
    const handleEliminar = (id, idProyecto) => {
        eliminartarea(id);
        obtenerTareas(idProyecto);
    };

    //funcion que modifica el estado de la tarea
    const handleCambioEstado = (tarea) => {
        tarea.estado = !tarea.estado;
        CambiarEstadoTarea(tarea);
    };

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado ? (
                    <button
                        type="button"
                        className="completo"
                        onClick={() => handleCambioEstado(tarea)}
                    >
                        Completo
                    </button>
                ) : (
                    <button
                        type="button"
                        className="incompleto"
                        onClick={() => handleCambioEstado(tarea)}
                    >
                        Incompleto
                    </button>
                )}
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => GuardarTareaActual(tarea)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => handleEliminar(tarea.id, tarea.proyectoId)}
                >
                    Eliminar
                </button>
            </div>
        </li>
    );
};

export default Tarea;
