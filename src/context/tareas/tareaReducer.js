import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
} from "../../types";
const Aux = (state, action) => {
    switch (action.type) {
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasproyecto: state.tareas.filter(
                    (tarea) => tarea.proyectoId === action.payload
                ),
            };

        case AGREGAR_TAREA:
            return {
                ...state,
                tareas: [...state.tareas, action.payload],
                errortarea: false,
            };

        case VALIDAR_TAREA:
            return {
                ...state,
                errortarea: true,
            };

        case ELIMINAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.filter(
                    (tarea) => tarea.id !== action.payload
                ),
            };

        case ESTADO_TAREA:
            return {
                ...state,
                tareas: state.tareas.map((tarea) =>
                    tarea.id === action.payload.id ? action.payload : tarea
                ),
            };

        case TAREA_ACTUAL:
            return {
                ...state,
                tareaseleccionada: action.payload,
            };

        case ACTUALIZAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.map((tarea) =>
                    tarea.id === action.payload.id ? action.payload : tarea
                ),
                tareaseleccionada: null,
            };
        default:
            return state;
    }
};

export default Aux;
