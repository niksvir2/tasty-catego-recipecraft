
import { Category } from "./types";

export const categories: Category[] = [
  {
    id: 1,
    name: "Закуски",
    description: "Лёгкие блюда для начала трапезы",
    imageUrl: "/lovable-uploads/f14f51b0-46cd-4be4-bcd3-081fcc44e9f8.png", // блины с икрой
  },
  {
    id: 2,
    name: "Супы",
    description: "Горячие и холодные супы на любой вкус",
    imageUrl: "/lovable-uploads/1917356c-9a37-479a-b340-0dac2427c5fb.png", // борщ
  },
  {
    id: 3,
    name: "Салаты",
    description: "Свежие и сытные салаты из сезонных продуктов",
    imageUrl: "/lovable-uploads/6a54f5ca-04ce-4f01-82ca-4af2bfb46a30.png", // селедка под шубой
  },
  {
    id: 4,
    name: "Основные блюда",
    description: "Сытные блюда для обеда и ужина",
    imageUrl: "/lovable-uploads/f9d77348-63bf-48a7-850b-83cba3fab592.png", // пельмени
  },
  {
    id: 5,
    name: "Десерты",
    description: "Сладкие блюда для завершения трапезы",
    imageUrl: "/lovable-uploads/daf734c9-b667-4efb-b408-b8d5717140c0.png", // шарлотка
  },
  {
    id: 6,
    name: "Напитки",
    description: "Освежающие и согревающие напитки",
    imageUrl: "/lovable-uploads/371e89f6-44d2-4f5c-9bfd-05cace8f7bef.png", // морс
  },
];

export const getCategoryById = (id: number): Category | undefined => {
  return categories.find(category => category.id === id);
};
