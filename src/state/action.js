import {
    ADD_ACTION,
    REMOVE_ACTION,
    CHANGE_THEME_ACTION,
    TODO_INPUT_ACTION,
} from './constants';

export const setInputAction = (action) => {
    return {
        type: TODO_INPUT_ACTION,
        payload: action,
    };
};
export const setAddAction = (action) => {
    return {
        type: ADD_ACTION,
        payload: action,
    };
};
export const setRemoveAction = (action) => {
    return {
        type: REMOVE_ACTION,
        payload: action,
    };
};
export const setChangeThemeAction = (action) => {
    return {
        type: CHANGE_THEME_ACTION,
        payload: action,
    };
};
