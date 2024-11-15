import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import FavoritesList from './FavoritesList';

const RecipeList = ({ setter }) => {
    
    const navigate = useNavigate()
    const recipes = useRecipeStore(state => state.recipes);
    const getId = (id) => (
        setter(id),
        navigate('/recipedetails')
    )
    
    const searchTerm = useRecipeStore(state => state.searchTerm);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);  
    const addFavorite = useRecipeStore(state => state.addFavorite);

    const handlFavorite = (id) => {
        addFavorite(id)
    }
    
    const filter = () => {
        filterRecipes();
    }
    useEffect(() => {
        filter()
    },[searchTerm]);
    
    let showRecipes = searchTerm.length == 0 ? recipes : filteredRecipes ;

    return (
        <div>
            <Link>
                <SearchBar />
            </Link>
            <Link to='/favorites' >My Favorites</Link>
            <Link to='/recommendations' >Recommendations</Link>
            {showRecipes.map(recipe => (
            <div key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <button  onClick={()=>getId(recipe.id)}>Edit</button>
                <button onClick={() => handlFavorite(recipe.id)}>Add to Favorites</button>
            </div>
            ))}
        </div>
    );
};

export default RecipeList;