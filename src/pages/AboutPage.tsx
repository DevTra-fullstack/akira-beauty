import { Layout } from "@/components/layout/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <div className="py-12 bg-akira-light">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-serif mb-4">Our Story</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate about creating clean, effective skincare for young skin.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6">Founded on Purpose</h2>
              <p className="mb-4">
                Akira was born from a personal journey. Our founder, Hana, struggled with skin issues throughout her teens and early twenties, trying countless products that promised results but delivered disappointment.
              </p>
              <p className="mb-4">
                With a background in biochemistry and a passion for natural ingredients, Hana set out to create a skincare line specifically formulated for young, changing skin – products that would be effective, non-irritating, and sustainably produced.
              </p>
              <p>
                In 2020, after three years of research, development, and testing, Akira was launched with a simple mission: to provide honest skincare that works, using clean ingredients that respect both your body and the planet.
              </p>
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/efd767ec-2ab9-4cd2-a253-345b4de8fc5e.png" 
                alt="Akira skincare products" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-akira-light">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Clean Science</h3>
              <p className="text-gray-600">
                We believe in the power of science-backed ingredients. Our formulations combine the best natural actives with safe, proven synthetic ingredients to create products that truly deliver results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Ethical Sourcing</h3>
              <p className="text-gray-600">
                From our botanical extracts to our packaging materials, we prioritize ethical sourcing and fair trade practices. We work with suppliers who share our commitment to sustainability and social responsibility.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Transparency</h3>
              <p className="text-gray-600">
                We're committed to full transparency about what goes into our products. No hidden ingredients, no exaggerated claims – just honest skincare that you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-serif mb-6">Looking Forward</h2>
          <p className="mb-6">
            As we continue to grow, our commitment to quality, sustainability, and effectiveness remains unwavering. We're constantly researching new ingredients and technologies to bring you the very best in skincare.
          </p>
          <p>
            Thank you for being part of our journey. We're excited to be part of yours.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;