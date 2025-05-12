import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "cleanser-001",
    name: "Purifying Facial Cleanser",
    category: "cleansers",
    price: 28.99,
    images: ["/uploads/product-1.jpg"],
    description: "A gentle, foaming cleanser that removes impurities without stripping skin's natural moisture. Perfect for daily use, this formula features hyaluronic acid and chamomile to leave skin clean, soft, and balanced.",
    features: [
      "Removes makeup and impurities",
      "pH balanced formula",
      "Suitable for all skin types",
      "Free from sulfates and parabens"
    ],
    ingredients: "Water, Glycerin, Sodium Cocoyl Isethionate, Sodium Lauroyl Methyl Isethionate, Cocamidopropyl Betaine, Sodium Chloride, Chamomilla Recutita (Matricaria) Flower Extract, Sodium Hyaluronate, Panthenol, Allantoin, Citric Acid, Sodium Benzoate, Potassium Sorbate.",
    usage: "Apply to damp face and neck, gently massage in circular motions. Rinse thoroughly with warm water. Use morning and evening."
  },
  {
    id: "serum-001",
    name: "Hydrating Face Serum",
    category: "serums",
    price: 42.99,
    images: ["/uploads/product-2.jpg"],
    description: "An intensive hydrating serum that delivers deep moisture and nourishment. Formulated with hyaluronic acid and vitamin B5 to plump skin and improve elasticity while providing lasting hydration.",
    features: [
      "Lightweight, non-sticky formula",
      "Strengthens skin barrier",
      "Reduces appearance of fine lines",
      "Suitable for daily use"
    ],
    ingredients: "Water, Propanediol, Glycerin, Sodium Hyaluronate, Panthenol, Niacinamide, Adenosine, Betaine, Allantoin, Sodium PCA, Hydroxyethylcellulose, Ethylhexylglycerin, Disodium EDTA.",
    usage: "After cleansing, apply 3-4 drops to face and neck. Gently pat into skin. Follow with moisturizer. Use morning and evening."
  },
  {
    id: "moisturizer-001",
    name: "Rejuvenating Night Cream",
    category: "moisturizers",
    price: 38.99,
    images: ["/uploads/product-3.jpg"],
    description: "A rich, replenishing night cream that works while you sleep to restore skin's natural balance. Contains peptides and ceramides to strengthen the skin barrier and improve texture and tone.",
    features: [
      "Deeply nourishing formula",
      "Improves skin elasticity",
      "Reduces signs of fatigue",
      "Fragrance-free"
    ],
    ingredients: "Water, Glycerin, Caprylic/Capric Triglyceride, Shea Butter, Cetearyl Alcohol, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Sodium Hyaluronate, Palmitoyl Tetrapeptide-7, Palmitoyl Tripeptide-1, Adenosine.",
    usage: "Apply to clean face and neck in the evening. Massage gently in upward motions until absorbed."
  },
  {
    id: "treatment-001",
    name: "Brightening Treatment Set",
    category: "treatments",
    price: 89.99,
    images: ["/uploads/product-4.jpg"],
    description: "A comprehensive three-step treatment designed to brighten dull skin and even skin tone. This set includes a cleanser, serum, and moisturizer formulated with vitamin C, niacinamide, and licorice root extract.",
    features: [
      "Reduces appearance of dark spots",
      "Improves skin radiance",
      "Evens skin tone",
      "Complete treatment system"
    ],
    ingredients: "Varies by product. All products are free from parabens, sulfates, phthalates, and artificial fragrances.",
    usage: "Step 1: Cleanse morning and evening. Step 2: Apply serum to clean skin. Step 3: Finish with moisturizer. Use consistently for best results."
  }
];

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};