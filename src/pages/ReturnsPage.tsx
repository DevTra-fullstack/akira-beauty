import { Layout } from "@/components/layout/Layout";

const ReturnsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-serif mb-8">Returns & Exchanges</h1>
        
        <div className="prose max-w-none">
          <h2>Our Return Policy</h2>
          <p>We want you to love your Akira products. If you're not completely satisfied, we're happy to accept returns under the following conditions:</p>
          
          <h3>Return Eligibility</h3>
          <ul>
            <li>Returns are accepted within 30 days of purchase</li>
            <li>Items must be unused and in their original packaging</li>
            <li>Sale items are final sale and cannot be returned</li>
          </ul>
          
          <h3>How to Return</h3>
          <ol>
            <li>Contact our customer service team at returns@akira.com</li>
            <li>Fill out the return form included with your order</li>
            <li>Package your return securely with the original packaging</li>
            <li>Ship to the address provided in the return confirmation email</li>
          </ol>
          
          <h3>Refund Process</h3>
          <p>Once we receive your return, we'll inspect the item and process your refund within 5-7 business days. The refund will be issued to the original form of payment.</p>
          
          <h3>Exchanges</h3>
          <p>If you'd like to exchange an item, please return the original purchase and place a new order for the desired product. This ensures the fastest processing time.</p>
        </div>
      </div>
    </Layout>
  );
};

export default ReturnsPage;