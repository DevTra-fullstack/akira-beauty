import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export const Hero = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
}: HeroProps) => {
  return (
    <section
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : `url('/uploads/product-4.jpg')`,
        backgroundSize: "flex",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"
      />
      <div className="container mx-auto z-10 px-4">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-4 animate-fade">
            {title}
          </h1>
          <p className="text-lg mb-8 animate-fade opacity-90">
            {subtitle}
          </p>
          <Button
            asChild
            className="bg-akira hover:bg-akira-dark text-foreground animate-fade"
            size="lg"
          >
            <Link to={ctaLink}>{ctaText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};