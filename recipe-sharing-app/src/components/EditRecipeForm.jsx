import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = (resipe) => {

    const updateRecipe = useRecipeStore(state => state.updateRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        updateRecipe({ id: resipe.id, title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={resipe.title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            />
            <textarea
            value={resipe.description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            />
            <button type="submit">Edite</button>
        </form>
    )
}

export default EditRecipeForm;