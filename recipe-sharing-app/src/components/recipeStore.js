import { create } from 'zustand'

export const useRecipeStore = create(set => ({
    recipes: [{
            id: 1,
            title: 'aaRecipe 1',
            description: 'this is recipe1',
        },
        {
            id: 2,
            title: 'bbRecipe 2',
            description: 'this is recipe2',
        },
        {
            id: 3,
            title: 'ccRecipe 3',
            description: 'this is recipe3',
        }
    ],
    searchTerm: '',
    filteredRecipes: [],

    setSearchTerm: (term) => set({ searchTerm: term }),

    filterRecipes: () =>
        set(state => ({
            filteredRecipes: state.recipes.filter(recipe =>
                recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
        })),

    addRecipe: (newRecipe) =>
        set(state => ({
            recipes: [...state.recipes, newRecipe]
        })),

    deleteRecipe: (recipeId) =>
        set(state => ({
            recipes: state.recipes.filter((recipe) => recipe.id !== recipeId)
        })),
    
    updateRecipe: (recipeId, updatedRecipe) =>
        set(state => ({
            recipes: state.recipes.map(recipe => 
                recipe.id === recipeId ? { ...recipe, ...updatedRecipe } : recipe)
        })),

    setRecipes: (recipes) => set({ recipes }),

    favorites: [],

    addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),

    removeFavorite: (recipeId) => set(state => ({
        favorites: state.favorites.filter(id => id !== recipeId)
    })),

    recommendations: [],

    generateRecommendations: () => set(state => {
        const recommended = state.recipes.filter(recipe =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended };
    }),
}))