import React, {useState} from 'react';
import './App.scss';
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";

const App = (props) => {
    const [todos, setTodos] = useState([
        {id: 1, text: 'Почитать про useState', done: false},
        {id: 2, text: 'Почитать про useEffect', done: false},
        {id: 3, text: 'Почитать про useCallback', done: false},
    ]);

    const [todoTitle, setTodoTitle] = useState('');

    const deleteTodo = (id) => {
        setTodos([
            ...todos.filter(todo => todo.id !== id)
        ])
    };

    const toggleDoneStatus = (id) => {
        setTodos([
            ...todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })
        ])
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
    <div className={'app container'}>
      <h1 className={'app__title'}>Ультимейт тудулист на хуках</h1>
        <AddTodo todoTitle={todoTitle} setTodoTitle={setTodoTitle} addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleDoneStatus={toggleDoneStatus}/>
    </div>
  )
}

export default App;
