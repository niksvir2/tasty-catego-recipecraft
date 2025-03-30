
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { getRecipeById, getCategoryById } from "@/data/utils";
import { Clock, Users, ChevronLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const recipeId = parseInt(id || "0", 10);
  
  const recipe = getRecipeById(recipeId);
  const category = recipe ? getCategoryById(recipe.categoryId) : undefined;

  if (!recipe || !category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Рецепт не найден</h1>
          <Link to="/" className="text-primary hover:underline">
            Вернуться на главную
          </Link>
        </div>
      </Layout>
    );
  }

  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <Layout>
      <article className="py-8">
        <div className="container mx-auto px-4">
          <Link to={`/category/${category.id}`} className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Назад к {category.name.toLowerCase()}
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="order-2 lg:order-1">
              <Badge variant="outline" className="mb-4">
                {category.name}
              </Badge>
              <h1 className="text-3xl font-bold mb-3">{recipe.title}</h1>
              <p className="text-muted-foreground mb-6">{recipe.description}</p>
              
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-recipe-600" />
                  <div>
                    <p className="text-sm font-medium">Время приготовления</p>
                    <p className="text-muted-foreground">{totalTime} минут</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-recipe-600" />
                  <div>
                    <p className="text-sm font-medium">Порций</p>
                    <p className="text-muted-foreground">{recipe.servings}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Ингредиенты</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-recipe-500 mt-2" />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Приготовление</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-recipe-100 text-recipe-600 flex items-center justify-center font-medium">
                      {index + 1}
                    </div>
                    <div>{instruction}</div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default RecipeDetail;
