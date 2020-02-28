import React, {useEffect, useState, useReducer} from 'react';
import './App.scss';
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import {Context} from "./components/context";
import {reducer} from './components/reducer';

const App = (props) => {
    const [state, dispatch] = useReducer(reducer, {
        todos: JSON.parse(localStorage.getItem('todos')),
        todoTitle: '',
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state.todos));
    }, [state.todos]);

    const addTodo = (e) => {
        dispatch({
            type: 'add-todo',
            payload: e.key
        })
    };

  return (
    <Context.Provider value={{
        dispatch
    }}>
        <div className={'app container'}>
            <h1 className={'app__title'}>Ультимейт тудулист на хуках</h1>
            <AddTodo todoTitle={state.todoTitle} />
            <TodoList todos={state.todos} />
        </div>
    </Context.Provider>
  )
}

export default App;
