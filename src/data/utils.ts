
import { Recipe } from "./types";
import { recipes } from "./recipes";
import { categories } from "./categories";

export const getFeaturedRecipes = (): Recipe[] => {
  return recipes.filter(recipe => recipe.featured);
};

export const getRecipesByCategory = (categoryId: number): Recipe[] => {
  return recipes.filter(recipe => recipe.categoryId === categoryId);
};

export const getRecipeById = (id: number): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};

export { getCategoryById } from "./categories";
