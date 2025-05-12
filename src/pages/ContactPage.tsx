import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send data to a backend
    toast.success("Message sent! We'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <Layout>
      <div className="py-12 bg-akira-light">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-serif mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out with any questions, feedback, or concerns.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif mb-6">Get in Touch</h2>
              <p className="mb-6 text-gray-600">
                Have a question about our products? Want to collaborate? Or just want to say hello? Fill out the form and our team will get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Customer Support</h3>
                  <p className="text-gray-600">
                    Email: support@akira-beauty.com<br />
                    Hours: Monday-Friday, 9am-5pm PST
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Press Inquiries</h3>
                  <p className="text-gray-600">
                    Email: press@akira-beauty.com
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Office Location</h3>
                  <p className="text-gray-600">
                    123 Beauty Lane<br />
                    San Francisco, CA 94110
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message..."
                    rows={5}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-akira hover:bg-akira-dark text-foreground"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-akira-light">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-serif mb-6">Follow Us</h2>
          <p className="mb-8">
            Join our community to get the latest updates, skincare tips, and exclusive offers.
          </p>
          
          <div className="flex justify-center space-x-8">
            <a href="#" className="hover:text-akira-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-akira-gold transition-colors">TikTok</a>
            <a href="#" className="hover:text-akira-gold transition-colors">YouTube</a>
            <a href="#" className="hover:text-akira-gold transition-colors">Pinterest</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;