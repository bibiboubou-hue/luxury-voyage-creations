
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
      if (textRef.current) {
        const scrollY = window.scrollY;
        textRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background image with parallax effect */}
        <div 
          ref={parallaxRef} 
          className="absolute inset-0 bg-black"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6)",
            height: "120%",
            top: "-10%"
          }}
        ></div>
        
        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <div ref={textRef} className="max-w-5xl">
            <h1 className="luxury-heading mb-6 text-shadow animate-fade-in">
              <span className="gold-gradient">Extraordinary</span> Luxury<br />Experience
            </h1>
            <p className="luxury-paragraph max-w-2xl mx-auto mb-8 text-luxury-silver animate-fade-in" style={{ animationDelay: "300ms" }}>
              Discover our exclusive collection of the most prestigious yachts and cars. 
              Expertly crafted for those who demand nothing but the best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "600ms" }}>
              <Link to="/products">
                <Button className="luxury-button-filled">
                  Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="luxury-button">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-luxury-gold" />
        </div>
      </section>
      
      {/* About Section */}
      <section className="section-padding bg-luxury-navy">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="luxury-subheading mb-6 gold-gradient">Our Legacy of Excellence</h2>
              <p className="luxury-paragraph mb-4 text-luxury-silver">
                Since our founding, Luxury Voyage has been synonymous with unparalleled craftsmanship and innovation. 
                We curate only the most extraordinary vehicles for an exclusive clientele.
              </p>
              <p className="luxury-paragraph mb-6 text-luxury-silver">
                Every car and yacht in our collection represents the pinnacle of engineering, design, and luxury.
                We don't just sell vehicles; we offer transcendent experiences.
              </p>
              <Link to="/team">
                <Button className="luxury-button">
                  Meet Our Team <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-luxury-gold"></div>
              <img 
                src="https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Luxury car showroom" 
                className="w-full h-full object-cover hover-3d"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-luxury-gold"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="section-padding bg-luxury-black">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="luxury-subheading mb-4 gold-gradient">Featured Collection</h2>
            <p className="luxury-paragraph max-w-2xl mx-auto text-luxury-silver">
              Explore our most exceptional offerings, each representing the pinnacle of luxury and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Car */}
            <div className="luxury-card transform transition-all duration-500 hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Luxury Car" 
                  className="w-full h-60 object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-luxury-gold text-luxury-black px-3 py-1 text-xs uppercase font-medium">
                  Car
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold mb-2">Aston Martin Vantage</h3>
                <p className="text-luxury-silver text-sm mb-4">
                  The epitome of British luxury sports cars, combining elegance with raw power.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-luxury-gold font-semibold">$180,000</span>
                  <Link to="/products" className="text-luxury-white hover:text-luxury-gold transition-colors">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Featured Yacht */}
            <div className="luxury-card transform transition-all duration-500 hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Luxury Yacht" 
                  className="w-full h-60 object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-luxury-gold text-luxury-black px-3 py-1 text-xs uppercase font-medium">
                  Yacht
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold mb-2">Azimut Grande 35</h3>
                <p className="text-luxury-silver text-sm mb-4">
                  A masterpiece of design and engineering, offering unparalleled comfort at sea.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-luxury-gold font-semibold">$5,800,000</span>
                  <Link to="/products" className="text-luxury-white hover:text-luxury-gold transition-colors">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Featured Car */}
            <div className="luxury-card transform transition-all duration-500 hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1617814076668-4af858bae1b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Luxury Car" 
                  className="w-full h-60 object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-luxury-gold text-luxury-black px-3 py-1 text-xs uppercase font-medium">
                  Car
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold mb-2">Ferrari Roma</h3>
                <p className="text-luxury-silver text-sm mb-4">
                  Italian excellence in automotive design, delivering performance with timeless elegance.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-luxury-gold font-semibold">$230,000</span>
                  <Link to="/products" className="text-luxury-white hover:text-luxury-gold transition-colors">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button className="luxury-button">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Latest News Section */}
      <section className="section-padding bg-luxury-navy">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="luxury-subheading mb-4 gold-gradient">Latest News</h2>
            <p className="luxury-paragraph max-w-2xl mx-auto text-luxury-silver">
              Stay informed about the latest developments in the world of luxury vehicles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="luxury-card hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="text-sm text-luxury-silver mb-3">July 15, 2023</div>
                <h3 className="text-xl font-playfair font-bold mb-2">
                  New Limited Edition Yacht Unveiled at Monaco Show
                </h3>
                <p className="text-luxury-silver text-sm mb-4">
                  The latest creation from our master shipbuilders has taken the Monaco Yacht Show by storm,
                  setting new standards in luxury maritime experiences.
                </p>
                <Link to="/news" className="text-luxury-gold hover:underline inline-flex items-center">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="luxury-card hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="text-sm text-luxury-silver mb-3">June 28, 2023</div>
                <h3 className="text-xl font-playfair font-bold mb-2">
                  Exclusive Partnership with Premiere Auto Designer Announced
                </h3>
                <p className="text-luxury-silver text-sm mb-4">
                  We're thrilled to announce our exclusive collaboration with renowned automotive designer 
                  Paolo Bertelli, bringing truly unique vehicles to our discerning clientele.
                </p>
                <Link to="/news" className="text-luxury-gold hover:underline inline-flex items-center">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/news">
              <Button className="luxury-button">
                View All News <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="relative py-24">
        <div 
          className="absolute inset-0 bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1632245889029-e406faaa34cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)"
          }}
        ></div>
        
        <div className="relative luxury-container text-center">
          <h2 className="luxury-heading mb-6 text-shadow">
            Experience <span className="gold-gradient">Unrivaled Luxury</span>
          </h2>
          <p className="luxury-paragraph max-w-2xl mx-auto mb-8 text-luxury-silver">
            Our exclusive collection of luxury vehicles awaits your discovery.
            Schedule a private viewing or consultation with our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="luxury-button-filled">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/products">
              <Button className="luxury-button">
                Browse Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-luxury-black py-16 border-t border-luxury-gold/20">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-6">
                <span className="text-2xl font-playfair font-bold gold-gradient">LUXURY</span>
                <span className="block text-sm font-light text-luxury-silver uppercase tracking-widest">VOYAGE</span>
              </div>
              <p className="text-luxury-silver text-sm mb-4">
                Purveyor of the world's finest luxury vehicles,
                crafted for those who accept nothing less than perfection.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-playfair font-bold mb-4 text-luxury-white">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Products', 'News', 'Team', 'Video', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="text-luxury-silver hover:text-luxury-gold transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-playfair font-bold mb-4 text-luxury-white">Contact</h3>
              <ul className="space-y-2 text-sm text-luxury-silver">
                <li>123 Luxury Avenue</li>
                <li>Monaco, MC 98000</li>
                <li>info@luxuryvoyage.com</li>
                <li>+377 99 99 99 99</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-playfair font-bold mb-4 text-luxury-white">Subscribe</h3>
              <p className="text-luxury-silver text-sm mb-4">
                Join our exclusive list to receive updates on new arrivals and special events.
              </p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="luxury-input rounded-none text-sm py-2" 
                />
                <button 
                  type="submit"
                  className="bg-luxury-gold text-luxury-black px-4"
                >
                  →
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-luxury-gold/10 text-center text-luxury-silver text-sm">
            <p>© {new Date().getFullYear()} Luxury Voyage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
