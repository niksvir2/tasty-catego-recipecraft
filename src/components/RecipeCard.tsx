
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Recipe } from "@/data/types";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const totalTime = recipe.prepTime + recipe.cookTime;
  
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <Card className="recipe-card overflow-hidden h-full">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-lg">{recipe.title}</h3>
          <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{recipe.description}</p>
        </CardContent>
        <CardFooter className="px-4 py-3 border-t flex justify-between">
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <Clock className="h-3.5 w-3.5" />
            <span>{totalTime} мин</span>
          </div>
          <div className="text-sm text-muted-foreground">
            {recipe.servings} порц.
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default RecipeCard;
