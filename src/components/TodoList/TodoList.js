import React from "react";
import './TodoList.scss';
import TodoItem from "./TodoItem/TodoItem";

const TodoList = ({todos}) => {
    return (
        <ul className={'todo-list'}>
            {!todos.length ? <p>Добавьте что-нибудь в список дел!</p>
                : todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </ul>
    )
};

export  default  TodoList;
