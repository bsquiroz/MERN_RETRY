import React, { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO,
} from "../../types";

const ProyectoState = (props) => {
    const proyectos = [
        { nombre: "tienda virtual", id: 1 },
        { nombre: "Intranet", id: 2 },
        { nombre: "Diseño de sitio web", id: 3 },
        { nombre: "Diseño de base de datos", id: 4 },
    ];

    const initialState = {
        proyectos: [],
        formulario: false,
        errorformulario: false,
        proyecto: null,
    };

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //serie de funciones para el CRUD

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO,
        });
    };

    //obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos,
        });
    };

    //agregar un proyecto
    const agregarProyecto = (proyecto) => {
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto,
        });
    };

    //Mostrar error
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO,
        });
    };

    //selecciona el proyecto que el usuario dio click
    const proyectoActual = (proyectoId) => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId,
        });
    };

    //Elimina un proyecto
    const eliminarProyecto = (proyectoId) => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId,
        });
    };

    return (
        <proyectoContext.Provider
            value={{
                formulario: state.formulario,
                proyectos: state.proyectos,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto,
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    );
};

export default ProyectoState;
