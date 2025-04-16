
import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import { ChevronDown, ArrowUpDown, Filter as FilterIcon } from "lucide-react";

interface ProductFilterProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  sortOrder: string;
  setSortOrder: (value: string) => void;
  isFilterOpen: boolean;
  setIsFilterOpen: (value: boolean) => void;
}

const ProductFilter = ({
  activeTab,
  setActiveTab,
  priceRange,
  setPriceRange,
  sortOrder,
  setSortOrder,
  isFilterOpen,
  setIsFilterOpen
}: ProductFilterProps) => {
  // Format price for display
  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    }
    return `$${(price / 1000).toFixed(0)}K`;
  };

  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <Tabs defaultValue={activeTab} className="w-full mb-6 md:mb-0 md:w-auto" onValueChange={setActiveTab}>
          <TabsList className="bg-nautical-navy border border-nautical-blue/20">
            <TabsTrigger value="all" className="data-[state=active]:bg-nautical-blue data-[state=active]:text-nautical-white">All</TabsTrigger>
            <TabsTrigger value="car" className="data-[state=active]:bg-nautical-blue data-[state=active]:text-nautical-white">Cars</TabsTrigger>
            <TabsTrigger value="yacht" className="data-[state=active]:bg-nautical-blue data-[state=active]:text-nautical-white">Yachts</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="luxury-button flex items-center"
          >
            <FilterIcon className="mr-2 h-4 w-4" />
            Filters
            <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </Button>
          
          <div className="relative flex items-center">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-nautical-navy border border-nautical-blue/30 text-nautical-white py-2 pl-4 pr-10 appearance-none focus:outline-none focus:border-nautical-blue/70 rounded-md"
            >
              <option value="default">Default Sorting</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
            <ArrowUpDown className="absolute right-3 h-4 w-4 pointer-events-none text-nautical-blue" />
          </div>
        </div>
      </div>
      
      {/* Price Filter */}
      {isFilterOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-nautical-navy border border-nautical-blue/20 p-6 mb-8 rounded-lg"
        >
          <h3 className="text-lg font-playfair mb-4">Price Range</h3>
          <div className="mb-6">
            <Slider
              defaultValue={[0, 10000000]}
              min={0}
              max={10000000}
              step={100000}
              value={priceRange}
              onValueChange={setPriceRange}
            />
          </div>
          <div className="flex justify-between text-sm text-nautical-sand">
            <span>{formatPrice(priceRange[0])}</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProductFilter;
