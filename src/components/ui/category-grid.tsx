import { Link } from "react-router-dom";
import { Category } from "@/types";

interface CategoryGridProps {
  categories: Category[];
  title: string;
}

export const CategoryGrid = ({ categories, title }: CategoryGridProps) => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                {category.image && (
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-black/30 flex items-end p-6 transition-opacity duration-300 group-hover:bg-black/40">
                  <div>
                    <h3 className="text-white text-xl font-medium">{category.name}</h3>
                    {category.description && (
                      <p className="text-white/80 text-sm mt-1">
                        {category.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};