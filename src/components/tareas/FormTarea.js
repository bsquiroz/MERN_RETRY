import React, { useContext, useEffect, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const initialState = {
    nombre: "",
};

const FormTarea = () => {
    //extarer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //extarer stado de tarea context
    const tareasContext = useContext(tareaContext);
    const {
        agregarTarea,
        errortarea,
        validarTarea,
        obtenerTareas,
        tareaseleccionada,
        ActualizarTarea,
    } = tareasContext;

    //state del formulario
    const [tarea, setTarea] = useState(initialState);
    const { nombre } = tarea;

    useEffect(() => {
        if (tareaseleccionada) {
            setTarea(tareaseleccionada);
        }
    }, [tareaseleccionada]);

    //Sino hay proyectos relacionados
    if (!proyecto) return null;

    //leer los valores del formulario
    const handleChange = (e) => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value,
        });
    };

    //destructurar el arreglo para ingresar al proyecto actual
    const [proyectoActual] = proyecto;

    const onSubmitForm = (e) => {
        e.preventDefault();

        //validar
        if (nombre.trim() === "") {
            validarTarea();
            return;
        }

        //si es ediccion o una tarea
        if (tareaseleccionada) {
            //actualiza la tarea existente
            ActualizarTarea(tarea);
        } else {
            //agregar la nueva tarea
            tarea.proyectoId = proyectoActual.id;
            tarea.id = Date.now();
            tarea.estado = false;
            agregarTarea(tarea);
        }

        //Obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);
        //reiniciar el form
        setTarea(initialState);
    };

    return (
        <div className="formulario">
            <form onSubmit={onSubmitForm}>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre de la tarea"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        value={
                            tareaseleccionada ? "Editar tarea" : "Agregar tarea"
                        }
                        className="btn btn-primario btn-submit btn-block"
                    />
                </div>
            </form>
            {errortarea && (
                <p className="mensaje error">
                    El nombre de la tarea es obligatorio
                </p>
            )}
        </div>
    );
};

export default FormTarea;
