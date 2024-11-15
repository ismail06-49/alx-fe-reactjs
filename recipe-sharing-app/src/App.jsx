import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import './App.css'
import { useState } from 'react'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'

function App() {
  const [id, setId] = useState(0);
  const data_from_child = (data) => {
    setId(data)
  }
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>
          <RecipeList setter={data_from_child} />
          <AddRecipeForm />
        </div>} />
        <Route path='/recipedetails' element={<RecipeDetails recipeId={id} />} />
        <Route path='/favorites' element={<FavoritesList />} />
        <Route path='/recommendations' element={<RecommendationsList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
