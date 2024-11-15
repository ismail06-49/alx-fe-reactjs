import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {

    const favorites = useRecipeStore(state => state.favorites)
    const recipes = useRecipeStore(state => state.recipes)
    const uniqueFavorites = [...new Set(favorites)]
    const showFavorites = uniqueFavorites.map(id => recipes.find(recipe => recipe.id === id))
    const removeFavorite = useRecipeStore(state => state.removeFavorite)

    const handleRemoveFavorite = (id) => {
        removeFavorite(id)
    }

    return (
        <div>
        <h2>My Favorites</h2>
        {showFavorites.map(recipe => (
            <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => handleRemoveFavorite(recipe.id)}>Remove from Favorites</button>
            </div>
        ))}
        </div>
    );
};

export default FavoritesList;