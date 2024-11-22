import { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext"

export default function TodoList() {

    const { todos, toggleTodo, deleteTodo } = useContext(TodoContext)
    const [dark, setDark] = useState(false)


    return (
        <div>
            <button onClick={setDark(!dark)}>toggle</button>
            {
                todos.map(
                    (todo, index) => (
                        <div
                            className={`todo ${dark ? 'dark' : ''} ${todo.completed ? 'completed' : ''}`}
                            key={index}
                            onClick={() => toggleTodo(index)}
                        >
                            <h2>{todo.title}: </h2>
                            <p>{todo.description}</p>
                            <button onClick={(e) => {
                            e.stopPropagation(); 
                            deleteTodo(index);
                        }}>
                            Delete
                        </button>
                        </div>
                    )
                )
            }
        </div>
    )
}