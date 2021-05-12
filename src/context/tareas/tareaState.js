import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
} from "../../types";

const TareaState = (props) => {
    const initialState = {
        tareas: [
            {
                nombre: "Movimiento naranja",
                estado: false,
                id: 1,
                proyectoId: 1,
            },
            {
                nombre: "El futuro está en tus manos",
                estado: false,
                id: 2,
                proyectoId: 1,
            },
            {
                nombre: "Movimiento naranja",
                estado: false,
                id: 3,
                proyectoId: 1,
            },
            {
                nombre: "Movimiento ciudadano",
                estado: false,
                id: 4,
                proyectoId: 1,
            },
            {
                nombre: "De esquina a esquina",
                estado: true,
                id: 5,
                proyectoId: 2,
            },
            {
                nombre: "Y ahí nos vamos",
                estado: true,
                id: 6,
                proyectoId: 2,
            },
            {
                nombre: "El mundo es grande pero lo tengo en mi mano",
                estado: true,
                id: 7,
                proyectoId: 2,
            },
            {
                nombre: "Estoy muy duro, sí",
                estado: true,
                id: 8,
                proyectoId: 2,
            },
            {
                nombre: "Okay, ahí vamo'",
                estado: true,
                id: 9,
                proyectoId: 3,
            },
            {
                nombre: "Y con el tiempo nos seguimos elevando",
                estado: true,
                id: 10,
                proyectoId: 3,
            },
            {
                nombre: "Que seguimos rompiendo aquí",
                estado: false,
                id: 11,
                proyectoId: 3,
            },
            {
                nombre: "Esta fiesta no tiene fin",
                estado: false,
                id: 12,
                proyectoId: 3,
            },
            {
                nombre: "Botellas para arriba sí",
                estado: false,
                id: 13,
                proyectoId: 4,
            },
            {
                nombre: "Los tengo bailando rompiendo y yo sigo aquí",
                estado: false,
                id: 14,
                proyectoId: 4,
            },
            {
                nombre: "Estamos rompiendo la discoteca",
                estado: true,
                id: 15,
                proyectoId: 4,
            },
            {
                nombre: "La fiesta no para, apenas comienza",
                estado: true,
                id: 16,
                proyectoId: 4,
            },
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null,
    };

    //crear ek dispatch y el state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    //crear las funciones

    //obtener las tareas de un proyecto
    const obtenerTareas = (proyectoId) => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId,
        });
    };

    //Agregar una tareas al proyecto seleccionado
    const agregarTarea = (tarea) => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea,
        });
    };

    //valida y muestra un error
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA,
        });
    };

    //Eliminar tareas por id
    const eliminartarea = (tareaId) => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: tareaId,
        });
    };

    //Cambia el estado de cada tarea
    const CambiarEstadoTarea = (tarea) => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea,
        });
    };

    //Extrae una tarea para edicción
    const GuardarTareaActual = (tarea) => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea,
        });
    };

    //edita la tarea
    const ActualizarTarea = (tarea) => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea,
        });
    };
    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminartarea,
                CambiarEstadoTarea,
                GuardarTareaActual,
                ActualizarTarea,
            }}
        >
            {props.children}
        </TareaContext.Provider>
    );
};

export default TareaState;
