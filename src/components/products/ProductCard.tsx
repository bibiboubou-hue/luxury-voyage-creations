
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ImageOff, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

type ProductType = {
  id: number;
  name: string;
  type: string;
  price: number;
  description: string;
  image: string;
};

interface ProductCardProps {
  product: ProductType;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div 
      className="luxury-card card-3d"
      initial="hidden"
      animate="visible"
      custom={index}
      variants={variants}
    >
      <div className="relative overflow-hidden h-64">
        {!imageError && product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-nautical-navy/50">
            <div className="text-center">
              <ImageOff className="h-16 w-16 mx-auto text-nautical-blue/50 mb-2" />
              <p className="text-sm text-nautical-sand">Image unavailable</p>
            </div>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-nautical-blue text-nautical-white px-3 py-1 text-xs uppercase font-medium rounded-sm">
          {product.type}
        </div>
      </div>
      <div className="p-6 card-3d-content">
        <h3 className="text-xl font-playfair font-bold mb-2">{product.name}</h3>
        <p className="text-nautical-sand text-sm mb-4">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-nautical-lightblue font-semibold">${product.price.toLocaleString()}</span>
          <div className="flex gap-2">
            <button className="p-2 bg-transparent border border-nautical-blue/30 text-nautical-lightblue rounded-md hover:bg-nautical-blue/10 transition-all">
              <ShoppingBag size={18} />
            </button>
            <Button className="luxury-button text-sm">View Details</Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
