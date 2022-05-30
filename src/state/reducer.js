import {
    TODO_INPUT_ACTION,
    ADD_ACTION,
    REMOVE_ACTION,
    CHANGE_THEME_ACTION,
    TODOS_KEY,
    THEME_KEY,
} from './constants';

const initTodos = window.localStorage.getItem(TODOS_KEY);
const initTheme = window.localStorage.getItem(THEME_KEY);
const initState = {
    todos: JSON.parse(initTodos) || [],
    vocabularyInput: {
        vocabulary: '',
        meaning: '',
    },
    theme: JSON.parse(initTheme) || 'light',
};

function setConfig(key, value) {
    const localStorageData = JSON.stringify(value);
    window.localStorage.setItem(key, localStorageData);
}

function reducer(state, action) {
    const newTodos = [...state.todos];
    let newTodoList;
    switch (action.type) {
        case TODO_INPUT_ACTION:
            return {
                ...state,
                vocabularyInput: action.payload,
            };
        case ADD_ACTION:
            newTodoList = [...state.todos, action.payload];
            setConfig(TODOS_KEY, newTodoList);
            return {
                ...state,
                todos: newTodoList,
            };
        case REMOVE_ACTION:
            newTodos.splice(action.payload, 1);
            setConfig(TODOS_KEY, newTodos);
            return {
                ...state,
                todos: newTodos,
            };
        case CHANGE_THEME_ACTION:
            const currentTheme = action.payload;
            setConfig(THEME_KEY, currentTheme);
            return {
                ...state,
                theme: action.payload,
            };
        default:
            throw new Error('Error');
    }
}

export { initState };
export default reducer;
