
import React from "react";
import { Button } from "@/components/ui/button";
import { Anchor } from "lucide-react";

const ProductsHero = () => {
  return (
    <section className="relative py-24 mb-12">
      <div 
        className="absolute inset-0 bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)"
        }}
      ></div>
      
      <div className="relative luxury-container text-center">
        <h1 className="luxury-heading mb-6 text-shadow">
          Experience <span className="blue-gradient">Unparalleled</span> Craftsmanship
        </h1>
        <p className="luxury-paragraph max-w-3xl mx-auto mb-8 text-nautical-sand">
          Immerse yourself in a collection that represents the pinnacle of engineering precision and artistic design. 
          Each vehicle and vessel in our exclusive portfolio has been meticulously selected to meet our exacting standards 
          of quality and performance.
        </p>
        <Button className="luxury-button-filled flex items-center gap-2">
          <Anchor className="h-4 w-4" />
          <span>Explore Collection</span>
        </Button>
      </div>
    </section>
  );
};

export default ProductsHero;
