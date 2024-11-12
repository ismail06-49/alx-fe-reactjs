import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <RecipeList />
      <AddRecipeForm />
      <Routes>
        <Route path='/recipedetails' element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
