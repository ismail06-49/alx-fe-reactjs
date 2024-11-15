import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {

    const favorites = useRecipeStore(state => state.favorites)
    const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
    const recommendations = useRecipeStore(state => state.recommendations);

    useEffect(() => {
        generateRecommendations(favorites);
    },[])
    
    return (
        <div>
            <h2>RecommendationsList</h2>
            {recommendations.map(recipe => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RecommendationsList;