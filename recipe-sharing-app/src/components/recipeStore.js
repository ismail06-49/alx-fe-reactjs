import { create } from 'zustand'

export const useRecipeStore = create(set => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
    deleteRecipe: (recipeId) =>
        set(state => ({
            recipes: state.recipes.filter((recipe) => recipe.id !== recipeId)
        })),
    updateRecipe:'',
    setRecipes: (recipes) => set({ recipes })
}))
