
import React from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

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
        <div className="text-center py-20">
          <h3 className="text-xl font-playfair mb-4">No Products Found</h3>
          <p className="text-nautical-sand mb-6">
            No products match your current filter criteria. Try adjusting your filters.
          </p>
          <Button 
            onClick={resetFilters}
            className="luxury-button"
          >
            Reset Filters
          </Button>
        </div>
      )}
    </>
  );
};

export default ProductsList;
