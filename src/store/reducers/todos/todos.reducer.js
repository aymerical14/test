import todosActionTypes from "./todos.types";

const initialState = {
    todos: [],
};

const todosReducer = (state =  initialState, action) => {
    switch (action.type) {
        case todosActionTypes.GET_TODOS:
            return {
                ...state,
                todos: action.payload
            };

        default:
            return state; 
    }
}

export default todosReducer;