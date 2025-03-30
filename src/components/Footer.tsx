
import { Link } from "react-router-dom";
import { ChefHat } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-12 py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <ChefHat className="h-6 w-6 text-recipe-600" />
            <span className="text-xl font-medium">РецептоКрафт</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/categories" className="text-foreground hover:text-primary transition-colors">
              Категории
            </Link>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© 2023 РецептоКрафт. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
