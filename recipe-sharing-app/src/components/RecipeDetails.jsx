import EditRecipeForm from './EditRecipeForm';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
    
    const recipes = useRecipeStore(state => state.recipes);
    const newRecipe = recipes.filter((recipe) => recipe.id === recipeId)
    
    

    return (
        <div>
            <h1>{newRecipe[0].title}</h1>
            <p>{newRecipe[0].description}</p>
            {/* Render EditRecipeForm and DeleteRecipeButton here */}
            <DeleteRecipeButton id={recipeId} />
            <EditRecipeForm id={recipeId} newRecipe={newRecipe} />
        </div>
    );
};

export default RecipeDetails;