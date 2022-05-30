import { useReducer } from 'react';
import Context from './Context';
import { reducer, initState } from '../state';
function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState);
    const value = [state, dispatch];
    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
