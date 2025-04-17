
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ImageOff, ShoppingBag, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

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
  const [isHovered, setIsHovered] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const addToCart = () => {
    toast.success(`${product.name} added to cart`, {
      description: "View your cart for more details",
      duration: 3000,
    });
  };

  return (
    <motion.div 
      className="luxury-card overflow-hidden group"
      initial="hidden"
      animate="visible"
      custom={index}
      variants={variants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      <div className="relative overflow-hidden h-64">
        {!imageError && product.image ? (
          <motion.img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
            onError={handleImageError}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-nautical-navy/50">
            <div className="text-center">
              <ImageOff className="h-16 w-16 mx-auto text-nautical-blue/50 mb-2" />
              <p className="text-sm text-nautical-sand">Image unavailable</p>
            </div>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-nautical-blue/80 backdrop-blur-sm text-nautical-white px-3 py-1 text-xs uppercase font-medium rounded-sm">
          {product.type}
        </div>
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-nautical-darknavy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-playfair font-bold mb-2">{product.name}</h3>
        <p className="text-nautical-sand text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-nautical-lightblue font-semibold text-lg">${product.price.toLocaleString()}</span>
          <div className="flex gap-2">
            <motion.button 
              className="p-2 bg-transparent border border-nautical-blue/30 text-nautical-lightblue rounded-md hover:bg-nautical-blue/10 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={addToCart}
            >
              <ShoppingBag size={18} />
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="luxury-button text-sm flex items-center gap-1">
                <Eye size={16} />
                <span>Details</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
