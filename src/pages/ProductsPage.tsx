
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import { ChevronDown, ArrowUpDown, Filter, ImageOff, Anchor, ShoppingBag } from "lucide-react";

// Mock product data
const products = [
  {
    id: 1,
    name: "Aston Martin Vantage",
    type: "car",
    price: 180000,
    description: "The epitome of British luxury sports cars, combining elegance with raw power.",
    image: "https://images.unsplash.com/photo-1592853598064-a32b3d4b61a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Ferrari Roma",
    type: "car",
    price: 230000,
    description: "Italian excellence in automotive design, delivering performance with timeless elegance.",
    image: "https://images.unsplash.com/photo-1592840062661-a5a7f78e2056?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Lamborghini Huracan",
    type: "car",
    price: 290000,
    description: "Aggressive styling meets uncompromising performance in this Italian masterpiece.",
    image: "https://images.unsplash.com/photo-1570733577524-3a047079e80d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Rolls-Royce Phantom",
    type: "car",
    price: 450000,
    description: "The pinnacle of automotive luxury and comfort, handcrafted to perfection.",
    image: "https://images.unsplash.com/photo-1631194758628-71ec7c35137e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Mercedes-Benz S-Class",
    type: "car",
    price: 120000,
    description: "German engineering at its finest, offering unparalleled comfort and technology.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Azimut Grande 35",
    type: "yacht",
    price: 5800000,
    description: "A masterpiece of design and engineering, offering unparalleled comfort at sea.",
    image: "https://images.unsplash.com/photo-1559034750-cdab70a66b8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Ferretti Yachts 920",
    type: "yacht",
    price: 7200000,
    description: "Italian craftsmanship meets modern design in this luxurious floating masterpiece.",
    image: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Princess Y85",
    type: "yacht",
    price: 6500000,
    description: "British luxury yacht building at its finest, combining performance with elegance.",
    image: "https://images.unsplash.com/photo-1599772310271-5965654bb276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Sunseeker Predator 74",
    type: "yacht",
    price: 4200000,
    description: "A balance of performance and luxury in a sleek, sporty package.",
    image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Riva 90 Argo",
    type: "yacht",
    price: 8100000,
    description: "Timeless Italian design combined with cutting-edge technology and materials.",
    image: "https://images.unsplash.com/photo-1591017403321-dc264d324652?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
];

// Product card component
const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => {
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

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [sortOrder, setSortOrder] = useState("default");
  const [filteredProducts, setFilteredProducts] = useState(products);
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

  // Format price for display
  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    }
    return `$${(price / 1000).toFixed(0)}K`;
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section with Updated Writing Style */}
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
      
      {/* Products Section */}
      <section className="section-padding bg-nautical-darknavy">
        <div className="luxury-container">
          {/* Filter Controls */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <Tabs defaultValue="all" className="w-full mb-6 md:mb-0 md:w-auto" onValueChange={setActiveTab}>
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
                  <Filter className="mr-2 h-4 w-4" />
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
          
          {/* Product Grid */}
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
                onClick={() => {
                  setActiveTab("all");
                  setPriceRange([0, 10000000]);
                  setSortOrder("default");
                }}
                className="luxury-button"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section-padding bg-nautical-navy">
        <div className="luxury-container text-center">
          <h2 className="luxury-subheading mb-6">
            <span className="blue-gradient">Personalized Consultation</span>
          </h2>
          <p className="luxury-paragraph max-w-2xl mx-auto mb-8 text-nautical-sand">
            Our product specialists are available to provide personalized guidance
            and answer any questions about our exclusive collection.
          </p>
          <Button className="luxury-button-filled">Schedule Consultation</Button>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
