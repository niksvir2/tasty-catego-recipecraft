
export interface Recipe {
  id: number;
  title: string;
  description: string;
  categoryId: number;
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
  featured?: boolean;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}
