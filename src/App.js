import React, {useEffect, useState} from 'react';
import './App.scss';
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import {Context} from "./components/context";

const App = (props) => {
    const [todos, setTodos] = useState([]);
    const [todoTitle, setTodoTitle] = useState('');

    useEffect(() => {
        const raw = localStorage.getItem('todos') || [];
        setTodos(JSON.parse(raw));
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const deleteTodo = (id) => {
        setTodos([
            ...todos.filter(todo => todo.id !== id)
        ])
    };

    const toggleDoneStatus = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.done = !todo.done;
            }
            return todo;
        }))
    };

    const addTodo = (e) => {
        if (e.key === 'Enter') {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    text: todoTitle,
                    done: false
                }
            ]);
            setTodoTitle('');
        }
    };

  return (
    <Context.Provider value={{
        deleteTodo,
        toggleDoneStatus,
        addTodo,
        setTodoTitle
    }}>
        <div className={'app container'}>
            <h1 className={'app__title'}>Ультимейт тудулист на хуках</h1>
            <AddTodo todoTitle={todoTitle} />
            <TodoList todos={todos} />
        </div>
    </Context.Provider>
  )
}

export default App;
