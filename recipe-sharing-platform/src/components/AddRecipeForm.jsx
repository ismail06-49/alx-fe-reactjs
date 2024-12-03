import { useState } from "react";
import { Steps, Panel, ButtonGroup, Button } from 'rsuite';

export default function AddRecipeForm() {

    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([]);
    const [errors, setErrors] = useState('');
    const [validate, setValidate] = useState(true);
    const [step, setStep] = useState(0);
    const onChange = nextStep => {
        setStep(nextStep < 0 ? 0 : nextStep > 2 ? 2 : nextStep);
    };

    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);

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
            setSteps(newInstructions);
        }
        setErrors('')
        setValidate(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            setErrors('Title field is required.');
            setValidate(false);
            return;
        }

        if (ingredients.length < 2) {
            setErrors('At least two ingredients are required.');
            setValidate(false);
            return;
        }

        if (steps.length < 2) {
            setErrors('At least two instructions are required.');
            setValidate(false);
            return;
        }
        console.log(`tirle: ${title} , ingredients: ${ingredients} , instructions: ${steps}`);
        console.log(ingredients);
        
    }
    
    return (

        <form className='max-w-xl mx-auto mt-4' onSubmit={handleSubmit}>
            <Steps className="mt-auto flex" current={step}>
                <Steps.Item title="Title" description="Description" />
                <Steps.Item title="Ingredients" description="Description" />
                <Steps.Item title="Instructions" description="Description" />
            </Steps>

            {!validate && <p style={{ color: 'red' }}>{errors}</p>}

            <Panel className="my-3 font-bold" header={`Step: ${step + 1}`} >
                {step === 0 ? (
                    <div className="my-5 mx-auto">
                        <input className='shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            type="text"
                            name="title"
                            placeholder="Title"
                            onChange={handleChange}
                        />
                    </div>) : null
                }
                {step === 1 ? (
                    <div className="my-5">
                        <textarea className='shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            type="text"
                            name="ingredients"
                            placeholder="Ingredients"
                            onChange={handleChange}
                        />
                    </div>) : null
                }
                {step === 2 ? (
                    <div className="my-5">
                        <textarea className='shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            type="text"
                            name="instructions"
                            placeholder="Instructions"
                            onChange={handleChange}
                        />
                    </div>) : null
                }
            </Panel>
            <ButtonGroup>
                <Button className="btn-primary" onClick={onPrevious} disabled={step === 0}>
                Previous
                </Button>
                {step < 2 ? <Button className='btn-primary' onClick={onNext}>
                Next
                </Button> : <button className='btn-primary' type="submit">Submit</button>}
            </ButtonGroup>
        </form>
    )
}