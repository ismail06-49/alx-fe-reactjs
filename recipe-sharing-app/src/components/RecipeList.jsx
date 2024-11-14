import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const RecipeList = ({ setter }) => {
    
    const navigate = useNavigate()
    const recipes = useRecipeStore(state => state.recipes);
    const getId = (id) => (
        setter(id),
        navigate('/recipedetails')
    )
    
    return (
        <div>
            {recipes.map(recipe => (
            <div key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <button  onClick={()=>getId(recipe.id)}>Edit</button>
            </div>
            ))}
        </div>
    );
};

export default RecipeList;