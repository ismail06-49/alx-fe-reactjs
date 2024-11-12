import EditRecipeForm from './EditRecipeForm';
import { useRecipeStore } from './recipeStore';

const RecipeDetails = ({ recipeId }) => {
    const detailRecipe = useRecipeStore(state => state.detailRecipee)
    

    return (
        <div>
            <h1>{detailRecipe.title}</h1>
            <p>{detailRecipe.description}</p>
                {/* Render EditRecipeForm and DeleteRecipeButton here */}
            <EditRecipeForm data= {recipeId} />
        </div>
    );
};

export default RecipeDetails;