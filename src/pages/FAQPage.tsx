import { Layout } from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-serif mb-8">Frequently Asked Questions</h1>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">Are Akira products suitable for sensitive skin?</AccordionTrigger>
              <AccordionContent>
                Yes! All Akira products are formulated to be gentle enough for sensitive skin types. We avoid common irritants and allergens, and each product undergoes dermatological testing. However, we always recommend doing a patch test when trying a new product.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">Are your products vegan and cruelty-free?</AccordionTrigger>
              <AccordionContent>
                Akira is proud to be 100% cruelty-free. We never test on animals at any stage of product development. Most of our products are vegan, but some contain honey or beeswax. These are clearly labeled on our product pages.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">What skincare routine do you recommend for beginners?</AccordionTrigger>
              <AccordionContent>
                For beginners, we recommend starting with our three essential products: our Gentle Cleanser, Daily Hydration Moisturizer, and SPF 30 Sunscreen. Once you've established this basic routine, you can gradually introduce serums and treatments based on your specific skin concerns.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">How long will it take to see results?</AccordionTrigger>
              <AccordionContent>
                Most customers notice improved hydration and texture within the first week of use. For more significant concerns like acne or hyperpigmentation, consistent use over 4-6 weeks typically yields visible results. Remember, skincare is a journey, not an overnight transformation!
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg">Do you offer samples?</AccordionTrigger>
              <AccordionContent>
                Yes! We offer a Discovery Kit that includes sample sizes of our bestselling products. Additionally, orders over $75 qualify for two free samples of your choice at checkout.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg">What ingredients do you avoid?</AccordionTrigger>
              <AccordionContent>
                We formulate without parabens, sulfates, phthalates, synthetic fragrances, mineral oil, and other potentially harmful ingredients. Our full "No List" is available on our Ingredients page.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;
