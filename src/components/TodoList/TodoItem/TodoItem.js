import React from "react";
import './TodoItem.scss';

const TodoItem = (props) => {
    const {id, text, done, deleteTodo, toggleDoneStatus} = props;
    const classes = ['todo-item'];
    if (done) {
        classes.push('todo-item_done')
    }
    return (
        <li className={classes.join(' ')}>
            <input className={'todo-item__checkbox'} type="checkbox" id={`done-input${id}`} checked={done} onChange={() => toggleDoneStatus(id)}/>
            <span className={'todo-item__number'}>
                {id}.
            </span>
            <label className={'todo-item__subject'} htmlFor={`done-input${id}`}>
                {text}
            </label>
            <button className={'todo-item__button todo-item__button_delete'} type='button' onClick={() => deleteTodo(id)}>
                Удалить
            </button>
        </li>
    )
};

export default TodoItem;
