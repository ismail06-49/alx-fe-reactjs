import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    title: Yup.string().required('title is required'),
    ingredients: Yup.string().required('ingredients is required'),
    instructions: Yup.string().required('instructions is required')
})

export default function AddRecipeForm() {

    return (
        <Formik
            initialValues={{ title: '', ingredients: '', instructions: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {
                () => (
                    <Form className='max-w-xl mx-auto mt-4'>
                        <div className="mb-5 mx-auto">
                            <Field className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="title" placeholder="Title" />
                            <ErrorMessage className='text-red-500 text-xs italic' name="title" component="div" />
                        </div>
                        <div className="mb-5">
                            <Field className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="textarea" name="ingredients" placeholder="Ingredients" />
                            <ErrorMessage className='text-red-500 text-xs italic' name="ingredients" component="div" />
                        </div>
                        <div className="mb-5">
                            <Field className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="textarea" name="instructions" placeholder="Instructions" />
                            <ErrorMessage className='text-red-500 text-xs italic' name="instructions" component="div" />
                        </div>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}