import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
    const detailRecipe = useRecipeStore(state => state.detailRecipe)
    console.log(detailRecipe[0]);
    
    
    return (
        <div>
            {recipes.map(recipe => (
            <div key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
                <Link to={'/recipedetails'} onClick={() => recipe(detailRecipe.id)}>View</Link>
            </div>
            ))}
        </div>
    );
};

export default RecipeList;