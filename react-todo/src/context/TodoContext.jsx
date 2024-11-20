import { createContext, useState } from "react";

export const TodoContext = createContext();

export default function TodoProvider({ children }) {
    
    const [todos, setTodos] = useState([{
            title: 'first todo',
            description: 'first todo description',
        },
        {
            title: 'second todo',
            description: 'second todo description',
        }
    ]);
    
    const toggleTodo = (index) => {
        setTodos(todos.map((todo, i) => 
            i === index ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (index) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    }

    return (
        <TodoContext.Provider value={{todos, setTodos, toggleTodo, deleteTodo}} >
            {children}
        </TodoContext.Provider>
    )

}