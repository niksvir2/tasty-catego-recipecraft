
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import RecipeCard from "@/components/RecipeCard";
import { getRecipesByCategory, getCategoryById } from "@/data/utils";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CategoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const categoryId = parseInt(id || "0", 10);
  
  const category = getCategoryById(categoryId);
  const recipes = getRecipesByCategory(categoryId);

  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Категория не найдена</h1>
          <Link to="/categories">
            <Button>Вернуться к категориям</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Link to="/categories" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Назад к категориям
          </Link>
          
          <h1 className="text-3xl font-bold mb-3">{category.name}</h1>
          <p className="text-muted-foreground mb-8">{category.description}</p>
          
          {recipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">В этой категории пока нет рецептов</p>
              <Link to="/categories">
                <Button>Посмотреть другие категории</Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CategoryDetail;
