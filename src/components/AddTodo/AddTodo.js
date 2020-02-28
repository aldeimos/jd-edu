import React from "react";

import './AddTodo.scss';
const AddTodo = ({todoTitle, setTodoTitle, addTodo}) => {
    return (
        <div className={'add-todo'}>
            <input className={'add-todo__input'} value={todoTitle} type="text" placeholder="Введите заголовок "
            onChange={(e) => setTodoTitle(e.target.value)}
                   onKeyDown={(e) => addTodo(e)}/>
        </div>
    )
};

export  default AddTodo;
