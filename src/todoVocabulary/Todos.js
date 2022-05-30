import { memo } from 'react';
import classNames from 'classnames/bind';
import { useStore } from '../store';
import TodoContent from './TodoContent';
import style from './Todo.module.css';

const cx = classNames.bind(style);
const Todos = () => {
    const [state] = useStore();
    const { todos, theme } = state;

    return (
        <ul className={cx(`todos`, `theme-${theme}`)}>
            {todos.map((todo, index) => (
                <TodoContent
                    key={index}
                    index={index}
                    todo={todo}
                ></TodoContent>
            ))}
        </ul>
    );
};

export default memo(Todos);
