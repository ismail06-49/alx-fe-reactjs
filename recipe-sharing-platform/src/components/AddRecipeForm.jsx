import { useState } from "react"

export default function AddRecipeForm() {

    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);
    const [errors, setErrors] = useState('');

    const handleChange = (e) => {
        const { name } = e.target;
        const value = e.target.value;
        if (name === 'title') {
            setTitle(value)
        } else if (name === 'ingredients') {
            const newIngredients = value.split(',').map(item => item.trim()).filter(item => item);
            setIngredients(newIngredients);
        } else if (name === 'instructions') {
            const newInstructions = value.split(',').map(item => item.trim()).filter(item => item);
            setInstructions(newInstructions);
        }
        setErrors('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            setErrors('Title field is required.');
            return;
        }

        if (ingredients.length < 2) {
            setErrors('At least two ingredients are required.');
            return;
        }

        if (instructions.length < 2) {
            setErrors('At least two instructions are required.');
            return;
        }
        console.log(`tirle: ${title} , ingredients: ${ingredients} , instructions: ${instructions}`);
        console.log(ingredients);
        
    }
    
    return (

        <form className='max-w-xl mx-auto mt-4' onSubmit={handleSubmit}>
            {errors && <p style={{ color: 'red' }}>{errors}</p>}
            <div className="mb-5 mx-auto">
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-5">
                <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type="text"
                    name="ingredients"
                    placeholder="Ingredients"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-5">
                <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type="text"
                    name="instructions"
                    placeholder="Instructions"
                    onChange={handleChange}
                />
            </div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Submit</button>
        </form>
    )
}