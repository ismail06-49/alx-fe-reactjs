import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";


export default function AddTodoForm() {
    
    const {todos, setTodos} = useContext(TodoContext)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, { title, description }]);
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter atitle" />
            <input type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter a description" />
            <button type="submit">Add Todo</button>
        </form>
    )
}