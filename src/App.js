import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { useStore } from './store';
import { actions } from './state';
import Todos from './todoVocabulary/Todos';
import style from './App.css';

const cx = classNames.bind(style);
function App() {
    const [state, dispatch] = useStore();
    const [todoInput, setTodoInput] = useState('');
    const inputRef = useRef();
    const { theme } = state;
    const prevTodoInput = useRef(todoInput);

    //handle change todo input
    const handleChangeInput = (e) => {
        const value = e.target.value;
        setTodoInput(value);
    };

    //handle add the input vocabulary (when click btn submit first time)
    const handleAddVocabulary = () => {
        if (!todoInput || prevTodoInput.current) return false;
        // setWrapper('form');
        prevTodoInput.current = todoInput;
        setTodoInput('');
        inputRef.current.focus();
    };

    //handle submit todo input (when click btn submit second time)
    const handleSubmit = (e) => {
        e.preventDefault();
        inputRef.current.focus();
        if (!todoInput) return false;
        dispatch(
            actions.setAddAction({
                vocabulary: prevTodoInput.current,
                meaning: todoInput,
            })
        );
        dispatch(
            actions.setInputAction({
                vocabulary: '',
                meaning: '',
            })
        );
        prevTodoInput.current = '';
        setTodoInput('');
    };

    // handle change theme
    const handleChangeTheme = (e) => {
        e.target.style = 'animation: rotate 0.5s ease-in-out;';
        setTimeout(() => {
            e.target.style = '';
        }, 600);
        const toggleTheme = theme === 'light' ? 'dark' : 'light';
        dispatch(actions.setChangeThemeAction(toggleTheme));
    };
    return (
        <div className={cx(`App`, `theme-${theme}`)}>
            <form
                className={cx(`input-todo`, `theme-${theme}`)}
                onSubmit={handleSubmit}
            >
                <input
                    ref={inputRef}
                    value={todoInput}
                    onChange={handleChangeInput}
                    placeholder={`Enter ${
                        !prevTodoInput.current
                            ? 'vocabulary...'
                            : `meaning for ${prevTodoInput.current}`
                    }`}
                ></input>
                <button
                    onClick={handleAddVocabulary}
                    type={prevTodoInput.current && 'submit'}
                    className={cx(`btn`, `btn-submit`, `theme-${theme}`)}
                >
                    Submit
                </button>
            </form>
            <Todos></Todos>
            <button
                className={cx(`btn`, `btn-toggle-theme`, `is-${theme}`)}
                onClick={handleChangeTheme}
            >
                {theme === 'light' ? (
                    <ion-icon name="sunny-outline"></ion-icon>
                ) : (
                    <ion-icon name="moon-outline"></ion-icon>
                )}
            </button>
        </div>
    );
}

export default App;
