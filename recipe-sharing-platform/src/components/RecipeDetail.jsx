import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from '../data.json';

export default function RecipeDetail() {

    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = () => {
            const foundRecipe = recipesData.find(recipe => recipe.id === parseInt(id));
            setRecipe(foundRecipe);
        };

        fetchRecipe();
    }, [id]);

    console.log(id);
    
    if (!recipe) return <div>Loading...</div>;

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
            <img className="w-full shadow-lg h-64 object-cover mb-4" src={recipe.image} alt={recipe.title} />
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside mb-4">
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-700">{ingredient}</li>
                ))}
            </ul>
            <h2 className="text-xl font-semibold mb-2">Cooking Instructions</h2>
            <ul className="list-disc list-inside mb-4">
                {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="text-gray-700">{instruction}</li>
                ))}
            </ul>
            <Link to='/' className="p-2 my-3 bg-blue-950 hover:bg-blue-700 text-white">Home</Link>
        </div>
    );
}