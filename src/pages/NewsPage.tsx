
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

// Mock news data
const newsArticles = [
  {
    id: 1,
    title: "New Limited Edition Yacht Unveiled at Monaco Show",
    category: "yachts",
    date: "July 15, 2023",
    author: "Marina Laurent",
    excerpt: "The latest creation from our master shipbuilders has taken the Monaco Yacht Show by storm, setting new standards in luxury maritime experiences.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc.",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Exclusive Partnership with Premiere Auto Designer Announced",
    category: "cars",
    date: "June 28, 2023",
    author: "Marcus Bennett",
    excerpt: "We're thrilled to announce our exclusive collaboration with renowned automotive designer Paolo Bertelli, bringing truly unique vehicles to our discerning clientele.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Geneva Motor Show: Our Latest Concept Car Receives Industry Award",
    category: "cars",
    date: "May 12, 2023",
    author: "Sophia Laurent",
    excerpt: "Our concept vehicle has been recognized with the prestigious Innovation Award at this year's Geneva International Motor Show, celebrating our commitment to pushing boundaries.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc.",
    image: "https://images.unsplash.com/photo-1593179357196-add05bf74c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Luxury Voyage Expands to Asian Market with New Shanghai Showroom",
    category: "company",
    date: "April 4, 2023",
    author: "Liam Chen",
    excerpt: "We're excited to announce our expansion into the Asian luxury market with the opening of our flagship showroom in Shanghai's prestigious Bund district.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc.",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Sustainable Luxury: Our Commitment to Environmental Responsibility",
    category: "company",
    date: "March 18, 2023",
    author: "Olivia Greenfield",
    excerpt: "Discover how we're incorporating sustainable practices and materials in our luxury vehicles without compromising on the exceptional quality our clients expect.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc.",
    image: "https://images.unsplash.com/photo-1506617420156-8e4536971650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "The Future of Yachting: Electric Propulsion System Unveiled",
    category: "yachts",
    date: "February 25, 2023",
    author: "Thomas Waters",
    excerpt: "Our research and development team has revealed a groundbreaking electric propulsion system designed specifically for luxury yachts, promising zero emissions without sacrificing performance.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc.",
    image: "https://images.unsplash.com/photo-1551801691-f0bce83d4f80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
  },
];

// Featured article component
const FeaturedArticle = ({ article }: { article: typeof newsArticles[0] }) => {
  return (
    <motion.div 
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 bg-luxury-navy border border-luxury-gold/20 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative overflow-hidden h-full min-h-[300px]">
        <img 
          src={article.image} 
          alt={article.title} 
          className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-8 flex flex-col justify-center">
        <div className="mb-4">
          <span className="inline-block bg-luxury-gold text-luxury-black px-3 py-1 text-xs uppercase font-medium mb-2">
            {article.category}
          </span>
          <div className="flex items-center text-sm text-luxury-silver space-x-4">
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" /> {article.date}
            </span>
            <span className="flex items-center">
              <User className="h-4 w-4 mr-1" /> {article.author}
            </span>
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">{article.title}</h2>
        <p className="text-luxury-silver mb-6">{article.excerpt}</p>
        <Button className="luxury-button self-start">
          Read Article <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
};

// News card component
const NewsCard = ({ article, index }: { article: typeof newsArticles[0], index: number }) => {
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

  return (
    <motion.div 
      className="bg-luxury-navy border border-luxury-gold/20 overflow-hidden transition-all duration-300 hover:shadow-lg"
      initial="hidden"
      animate="visible"
      custom={index}
      variants={variants}
    >
      <div className="relative overflow-hidden h-60">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-luxury-gold text-luxury-black px-3 py-1 text-xs uppercase font-medium">
          {article.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-luxury-silver space-x-4 mb-3">
          <span className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" /> {article.date}
          </span>
          <span className="flex items-center">
            <User className="h-4 w-4 mr-1" /> {article.author}
          </span>
        </div>
        <h3 className="text-xl font-playfair font-bold mb-3">{article.title}</h3>
        <p className="text-luxury-silver text-sm mb-4">
          {article.excerpt}
        </p>
        <Button className="luxury-button text-sm">
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
};

const NewsPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter articles based on active tab and search query
  const filteredArticles = newsArticles.filter(article => {
    const matchesTab = activeTab === "all" || article.category === activeTab;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Get the featured article (first one after filtering)
  const featuredArticle = filteredArticles[0];
  
  // Get the rest of the articles
  const restOfArticles = filteredArticles.slice(1);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-24 mb-12">
        <div 
          className="absolute inset-0 bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551801691-f0bce83d4f80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)"
          }}
        ></div>
        
        <div className="relative luxury-container text-center">
          <h1 className="luxury-heading mb-6 text-shadow">
            Latest <span className="gold-gradient">News</span>
          </h1>
          <p className="luxury-paragraph max-w-2xl mx-auto mb-8 text-luxury-silver">
            Stay informed about the latest developments in the world of luxury vehicles,
            industry trends, and company announcements.
          </p>
        </div>
      </section>
      
      {/* News Content */}
      <section className="section-padding bg-luxury-black">
        <div className="luxury-container">
          {/* Filter and Search */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveTab}>
                <TabsList className="bg-luxury-navy border border-luxury-gold/20">
                  <TabsTrigger value="all" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-luxury-black">All</TabsTrigger>
                  <TabsTrigger value="cars" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-luxury-black">Cars</TabsTrigger>
                  <TabsTrigger value="yachts" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-luxury-black">Yachts</TabsTrigger>
                  <TabsTrigger value="company" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-luxury-black">Company</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <div className="relative w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="luxury-input pr-10 w-full md:w-64"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-luxury-silver" />
              </div>
            </div>
          </div>
          
          {filteredArticles.length > 0 ? (
            <>
              {/* Featured Article */}
              {featuredArticle && (
                <div className="mb-12">
                  <FeaturedArticle article={featuredArticle} />
                </div>
              )}
              
              {/* Rest of Articles */}
              {restOfArticles.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {restOfArticles.map((article, index) => (
                    <NewsCard key={article.id} article={article} index={index} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-playfair mb-4">No Articles Found</h3>
              <p className="text-luxury-silver mb-6">
                No articles match your current search criteria. Try adjusting your filters.
              </p>
              <Button 
                onClick={() => {
                  setActiveTab("all");
                  setSearchQuery("");
                }}
                className="luxury-button"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="section-padding bg-luxury-navy">
        <div className="luxury-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="luxury-subheading mb-6 gold-gradient">
              Subscribe to Our Newsletter
            </h2>
            <p className="luxury-paragraph mb-8 text-luxury-silver">
              Stay updated with our latest news, product launches, and exclusive events.
              Subscribe to our newsletter for regular updates.
            </p>
            <form className="flex flex-col sm:flex-row max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="luxury-input flex-grow mb-4 sm:mb-0 sm:mr-2" 
                required
              />
              <Button type="submit" className="luxury-button-filled whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
