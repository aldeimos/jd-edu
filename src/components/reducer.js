export const reducer = (state, action) =>  {
    switch (action.type) {
        case 'delete-todo':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case 'add-todo':
            if (action.payload === 'Enter') {
                return {
                    ...state,
                    todos: [...state.todos, {
                            id: Date.now(),
                            text: state.todoTitle,
                            done: false
                    }],
                    todoTitle: ''
                }
            };
        case 'toggle-done-status':
            return {
                ...state,
                todos: state.todos.map( todo => {
                    if (todo.id === action.payload) {
                        todo.done = !todo.done;
                    }
                    return todo;
                })
            };
        case 'set-todo-title':
            return {
                ...state,
                todoTitle: action.payload
            }
        default:
            return state;
    }
};
