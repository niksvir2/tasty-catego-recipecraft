
import Layout from "@/components/Layout";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";

const Categories = () => {
  return (
    <Layout>
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">Категории рецептов</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Categories;
