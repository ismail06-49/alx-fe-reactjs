import { create } from 'zustand'

export const useRecipeStore = create(set => ({
    recipes: [{
        id: 1,
        title: 'Recipe 1',
        description: 'This is recipe 1'
    },
    {
        id: 2,
        title: 'Recipe 2',
        description: 'This is recipe 2'
    }],
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
    deleteRecipe: (recipeId) =>
        set(state => ({
            recipes: state.recipes.filter((recipe) => recipe.id !== recipeId)
        })),
    updateRecipe: (recipeId) =>
        set(state => ({
            editRecip: state.recipes.filter((recipe) => recipe.id == recipeId)
        })),
}))