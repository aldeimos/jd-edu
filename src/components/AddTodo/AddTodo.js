import React, {useContext} from "react";

import {Context} from "../context";

import './AddTodo.scss';
const AddTodo = ({todoTitle}) => {
    const {dispatch} = useContext(Context);
    return (
        <div className={'add-todo'}>
            <input className={'add-todo__input'} value={todoTitle} type="text" placeholder="Введите заголовок "
            onChange={(e) => dispatch({type: 'set-todo-title', payload: e.target.value})}
                   onKeyDown={(e) => dispatch({type: 'add-todo', payload: e.key})}/>
        </div>
    )
};

export  default AddTodo;
