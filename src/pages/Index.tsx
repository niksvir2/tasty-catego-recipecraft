
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import RecipeCard from "@/components/RecipeCard";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedRecipes } from "@/data/utils";
import { categories } from "@/data/categories";

const Index = () => {
  const featuredRecipes = getFeaturedRecipes();
  const featuredCategories = categories.slice(0, 3);

  return (
    <Layout>
      <HeroSection />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Популярные рецепты</h2>
            <Link to="/categories">
              <Button variant="ghost" className="gap-1">
                Все рецепты
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Категории блюд</h2>
            <Link to="/categories">
              <Button variant="ghost" className="gap-1">
                Все категории
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
