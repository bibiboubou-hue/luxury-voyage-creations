
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Anchor } from "lucide-react";

const ProductsHero = () => {
  return (
    <section className="relative py-32 mb-16">
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')",
          filter: "brightness(0.2)"
        }}
      ></div>
      
      <motion.div 
        className="relative luxury-container text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="luxury-heading mb-8 text-shadow">
          Experience <span className="blue-gradient">Unparalleled</span> Craftsmanship
        </h1>
        <p className="luxury-paragraph max-w-3xl mx-auto mb-10 text-nautical-sand/90">
          Immerse yourself in a collection that represents the pinnacle of engineering precision and artistic design. 
          Each vehicle and vessel in our exclusive portfolio has been meticulously selected to meet our exacting standards.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button className="luxury-button-filled flex items-center gap-2 text-base px-8 py-6">
            <Anchor className="h-5 w-5" />
            <span>Explore Collection</span>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductsHero;
