import { memo, useState } from 'react';
import classNames from 'classnames/bind';
import { useStore } from '../store';
import { actions } from '../state';
import style from './Todo.module.css';

const cx = classNames.bind(style);
// import style from './Todo.module.css';
function TodoContent({ index, todo }) {
    const [state, dispatch] = useStore();
    const { theme } = state;
    const [subContent, setSubContent] = useState();

    const handleDblClick = (index) => {
        setSubContent(!subContent);
    };
    const handleRemove = (index, todo) => {
        dispatch(actions.setRemoveAction(index));
    };

    return (
        <li className={cx('todo-wrapper', `theme-${theme}`)}>
            <div
                className={cx('todo', `theme-${theme}`)}
                onDoubleClick={() => {
                    handleDblClick(index);
                }}
            >
                <div className={cx('todo-content', 'f-bold')}>
                    {todo.vocabulary}
                </div>
                <button
                    className={cx('btn', 'btn-remove')}
                    onClick={() => {
                        handleRemove(index);
                    }}
                >
                    <ion-icon name="trash-sharp"></ion-icon>
                </button>
            </div>
            {subContent && (
                <div className={cx('todo-sub-content')}>
                    <div>
                        <span className={cx('f-bold')}>
                            {todo.vocabulary}:{' '}
                        </span>
                        {todo.meaning}
                    </div>
                </div>
            )}
        </li>
    );
}

export default memo(TodoContent);
