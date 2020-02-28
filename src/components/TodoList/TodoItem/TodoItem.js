import React, {useContext} from "react";
import './TodoItem.scss';
import {Context} from "../../context";

const TodoItem = (props) => {
    const {id, text, done} = props;
    const {dispatch} = useContext(Context);

    const classes = ['todo-item'];
    if (done) {
        classes.push('todo-item_done')
    }
    return (
        <li className={classes.join(' ')}>
            <input className={'todo-item__checkbox'} type="checkbox" id={`done-input${id}`} checked={done}
                   onChange={() => dispatch({type: 'toggle-done-status', payload: id})}/>
            <span className={'todo-item__number'}>
                {id}.
            </span>
            <label className={'todo-item__subject'} htmlFor={`done-input${id}`}>
                {text}
            </label>
            <button className={'todo-item__button todo-item__button_delete'} type='button'
                    onClick={() => dispatch({type: 'delete-todo', payload: id})}>
                Удалить
            </button>
        </li>
    )
};

export default TodoItem;
