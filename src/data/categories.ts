
import { Category } from "./types";

export const categories: Category[] = [
  {
    id: 1,
    name: "Закуски",
    description: "Лёгкие блюда для начала трапезы",
    imageUrl: "/images/categories/appetizers.jpg",
  },
  {
    id: 2,
    name: "Супы",
    description: "Горячие и холодные супы на любой вкус",
    imageUrl: "/images/categories/soups.jpg",
  },
  {
    id: 3,
    name: "Салаты",
    description: "Свежие и сытные салаты из сезонных продуктов",
    imageUrl: "/images/categories/salads.jpg",
  },
  {
    id: 4,
    name: "Основные блюда",
    description: "Сытные блюда для обеда и ужина",
    imageUrl: "/images/categories/main-courses.jpg",
  },
  {
    id: 5,
    name: "Десерты",
    description: "Сладкие блюда для завершения трапезы",
    imageUrl: "/images/categories/desserts.jpg",
  },
  {
    id: 6,
    name: "Напитки",
    description: "Освежающие и согревающие напитки",
    imageUrl: "/images/categories/drinks.jpg",
  },
];

export const getCategoryById = (id: number): Category | undefined => {
  return categories.find(category => category.id === id);
};
