import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/ui/hero";
import { CategoryGrid } from "@/components/ui/category-grid";
import { ProductList } from "@/components/products/ProductList";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

const Index = () => {
  // Get featured products (just using the first 4 for demo purposes)
  const featuredProducts = products.slice(0, 4);

  return (
    <Layout>
      <Hero
        title="Beauty Made Simple"
        subtitle="Discover our premium range of genuine cosmetic products designed specifically for young skin. Effective formulations for a radiant complexion."
        ctaText="Shop Now"
        ctaLink="/products"
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-serif mb-4">Pure. Natural. Effective.</h2>
          <p className="text-gray-600">
            Akira was born from a passion for clean, high-performing skincare. Our products are formulated with the highest quality ingredients, designed to address the unique needs of young skin while promoting long-term skin health.
          </p>
        </div>
      </section>

      <CategoryGrid
        categories={categories}
        title="Shop by Category"
      />

      <ProductList
        title="Featured Products"
        products={featuredProducts}
      />

      <section className="section-padding bg-akira-light">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-4">Our Promise</h2>
            <p className="mb-8">All Akira products are developed with these core values</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3">Clean Formulas</h3>
                <p className="text-sm text-gray-600">
                  We never use harmful ingredients. All our products are free from sulfates, parabens, phthalates, and artificial fragrances.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3">Cruelty-Free</h3>
                <p className="text-sm text-gray-600">
                  We never test on animals. All our products and ingredients are cruelty-free and many are vegan-friendly.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3">Sustainable Packaging</h3>
                <p className="text-sm text-gray-600">
                  Our packaging is designed to minimize environmental impact, using recyclable materials whenever possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;