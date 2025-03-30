
import { ChefHat } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-recipe-100 to-background py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center p-2 bg-white rounded-full shadow-sm mb-8">
          <ChefHat className="h-6 w-6 text-recipe-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Ваша коллекция любимых рецептов
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Исследуйте разнообразные категории блюд и находите рецепты,
          которые сделают вашу кухню особенной
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
