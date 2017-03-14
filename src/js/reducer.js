import {ADD_TODO, TOGGLE_TODO} from './actions';

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.payload);
        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo;
                }
                return Object.assign({}, todo, {
                    completed: !todo.completed
                });
            });
        default:
            return state;
    }
};

export default reducer;
