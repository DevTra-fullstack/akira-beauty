import { Layout } from "@/components/layout/Layout";

const ShippingPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-serif mb-8">Shipping Information</h1>
        
        <div className="prose max-w-none">
          <h2>Shipping Policy</h2>
          <p>We offer various shipping options to ensure your Akira products reach you in perfect condition.</p>
          
          <h3>Domestic Shipping</h3>
          <ul>
            <li>Standard Shipping (3-5 business days): Free on orders over $50, or $5.99</li>
            <li>Express Shipping (1-2 business days): $12.99</li>
            <li>Same Day Delivery (select areas only): $19.99</li>
          </ul>
          
          <h3>International Shipping</h3>
          <p>We ship to most international destinations. Shipping rates and delivery times vary by location. All applicable customs fees, taxes, and duties are the responsibility of the customer.</p>
          
          <h3>Tracking Orders</h3>
          <p>Once your order ships, you'll receive a confirmation email with your tracking information. You can track your package at any time by logging into your account.</p>
          
          <h3>Shipping Restrictions</h3>
          <p>Some products may have restrictions for international shipping due to regulations on ingredients in different countries. Please contact our customer service team if you have questions about shipping to your location.</p>
        </div>
      </div>
    </Layout>
  );
};

export default ShippingPage;