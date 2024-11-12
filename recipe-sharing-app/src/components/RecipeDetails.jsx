import EditRecipeForm from './EditRecipeForm';
import { useRecipeStore } from './recipeStore';

const RecipeDetails = ({ recipeId }) => {
    const updateRecipe = useRecipeStore(state => state.updateRecipe)
    

    return (
        <div>
            <h1>{updateRecipe.title}</h1>
            <p>{updateRecipe.description}</p>
                {/* Render EditRecipeForm and DeleteRecipeButton here */}
            <EditRecipeForm data= {recipeId} />
        </div>
    );
};

export default RecipeDetails;