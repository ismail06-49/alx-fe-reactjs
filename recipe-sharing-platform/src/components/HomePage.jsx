import { useEffect, useState } from "react";
import recipesData from '../data.json'
import { Link } from 'react-router-dom';

export default function HomePage() {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {

        const fetchRecipes = () => {
            const data = recipesData;
            setRecipes(data);
        };

        fetchRecipes();
    }, [])

    console.log(recipes);
    

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {recipes.map((recipe) => (
                    <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 bg-white transition-transform duration-300">
                        <img className="w-full h-48 object-cover" src={recipe.image} alt={recipe.title} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{recipe.title}</div>
                            <p className="text-gray-700 text-base">
                                {recipe.summary}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}