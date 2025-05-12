import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "cleansers",
    name: "Cleansers",
    description: "Gentle, effective formulas that cleanse without stripping the skin.",
    image: "/uploads/product-1.jpg"
  },
  {
    id: "serums",
    name: "Serums",
    description: "Targeted treatments for specific skin concerns.",
    image: "/uploads/product-2.jpg"
  },
  {
    id: "moisturizers",
    name: "Moisturizers",
    description: "Hydrating formulas to keep your skin balanced and nourished.",
    image: "/uploads/product-3.jpg"
  },
  {
    id: "treatments",
    name: "Treatments",
    description: "Specialized care for transformative results.",
    image: "/uploads/product-4.jpg"
  }
];

export const getCategoryById = (id: string) => {
  return categories.find(category => category.id === id);
};