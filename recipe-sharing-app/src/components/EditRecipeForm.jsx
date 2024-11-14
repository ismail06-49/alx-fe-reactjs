import { useState } from "react";
import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

const EditRecipeForm = ({id, newRecipe}) => {
    
    const navigate = useNavigate()
    const updateRecipe = useRecipeStore(state => state.updateRecipe);
    const [title, setTitle] = useState(newRecipe[0].title);
    const [description, setDescription] = useState(newRecipe[0].description);

    const handleSubmit = (event) => {
        event.preventDefault();
        const editRecipe = { id: id, title, description };
        updateRecipe(id, editRecipe);
        setTitle('');
        setDescription('');
        navigate('/')
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            />
            <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            />
            <button type="submit">Edite</button>
        </form>
    )
}

export default EditRecipeForm;