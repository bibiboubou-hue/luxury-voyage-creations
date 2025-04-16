
import React, { useState, useEffect } from "react";
import { products } from "@/data/products";
import ProductsHero from "@/components/products/ProductsHero";
import ProductFilter from "@/components/products/ProductFilter";
import ProductsList from "@/components/products/ProductsList";
import ProductsCTA from "@/components/products/ProductsCTA";
import { Product } from "@/components/products/ProductsList";

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [sortOrder, setSortOrder] = useState("default");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter products based on active tab, price range, and sort order
  useEffect(() => {
    let filtered = [...products];

    // Filter by type
    if (activeTab !== "all") {
      filtered = filtered.filter(product => product.type === activeTab);
    }

    // Filter by price range
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    if (sortOrder === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "name-asc") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "name-desc") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredProducts(filtered);
  }, [activeTab, priceRange, sortOrder]);

  // Reset filters function
  const resetFilters = () => {
    setActiveTab("all");
    setPriceRange([0, 10000000]);
    setSortOrder("default");
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <ProductsHero />
      
      {/* Products Section */}
      <section className="section-padding bg-nautical-darknavy">
        <div className="luxury-container">
          {/* Filter Controls */}
          <ProductFilter 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            isFilterOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
          />
          
          {/* Product Grid */}
          <ProductsList 
            filteredProducts={filteredProducts} 
            resetFilters={resetFilters} 
          />
        </div>
      </section>
      
      {/* Call to Action */}
      <ProductsCTA />
    </div>
  );
};

export default ProductsPage;
