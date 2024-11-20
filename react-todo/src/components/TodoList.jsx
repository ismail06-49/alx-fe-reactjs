import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

export default function TodoList() {

    const { todos, toggleTodo, deleteTodo } = useContext(TodoContext)


    return (
        <div>
            {
                todos.map(
                    (todo, index) => (
                        <div
                            className={`todo ${todo.completed ? 'completed' : ''}`}
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