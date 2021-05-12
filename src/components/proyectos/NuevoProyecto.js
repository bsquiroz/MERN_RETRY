import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const initialState = {
    nombre: "",
};

const NuevoProyecto = () => {
    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {
        formulario,
        errorformulario,
        mostrarFormulario,
        agregarProyecto,
        mostrarError,
    } = proyectosContext;

    //State para proyecto
    const [proyecto, setProyecto] = useState(initialState);

    //destructuro el state (proyecto) para pasarlo al value del input
    const { nombre } = proyecto;

    //funcion encargada de recuperar lo escrito en el input
    const onChangeProyecto = (e) => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value,
        });
    };

    //funcion encargada de ejecutarse cuando el formulario haga submit
    const onSubmitProyecto = (e) => {
        //no haga la accion por default de un formulario
        e.preventDefault();

        //Validar el proyecto
        if (nombre.trim() === "") {
            mostrarError();
            return;
        }

        //Agregar el state
        proyecto.id = Date.now();
        agregarProyecto(proyecto);

        //Reiniciar el form
        setProyecto(initialState);
    };

    return (
        <>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => mostrarFormulario()}
            >
                {formulario ? "Cancelar" : "Nuevo proyecto "}
            </button>
            {formulario && (
                <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitProyecto}
                >
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        name="nombre"
                        onChange={onChangeProyecto}
                        value={nombre}
                    />
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar proyecto"
                    />
                </form>
            )}
            {errorformulario && (
                <p className="mensaje error">El nombre es obligatorio</p>
            )}
        </>
    );
};

export default NuevoProyecto;
