
import React from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

// Type definition for Product
export type Product = {
  id: number;
  name: string;
  type: string;
  price: number;
  description: string;
  image: string;
};

interface ProductsListProps {
  filteredProducts: Product[];
  resetFilters: () => void;
}

const ProductsList = ({ filteredProducts, resetFilters }: ProductsListProps) => {
  return (
    <>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      ) : (
        <motion.div 
          className="text-center py-24 px-8 bg-nautical-navy/30 backdrop-blur-sm rounded-lg border border-nautical-blue/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-playfair mb-4">No Products Found</h3>
          <p className="text-nautical-sand mb-8 max-w-md mx-auto">
            No products match your current filter criteria. Try adjusting your filters or reset them to view all products.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={resetFilters}
              className="luxury-button flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Reset Filters</span>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ProductsList;
