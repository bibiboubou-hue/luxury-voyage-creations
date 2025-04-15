
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import LoginModal from "./LoginModal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Check if we've scrolled down to add background blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Products", path: "/products" },
    { title: "News", path: "/news" },
    { title: "Team", path: "/team" },
    { title: "Video", path: "/video" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          isScrolled ? "nav-blur bg-luxury-black/70 border-b border-luxury-gold/20" : "bg-transparent"
        )}
      >
        <div className="luxury-container">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-playfair font-bold gold-gradient">LUXURY</span>
              <span className="text-sm font-light text-luxury-silver uppercase tracking-widest">VOYAGE</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "transition-colors duration-300 link-underline text-sm uppercase tracking-wider",
                    location.pathname === link.path
                      ? "text-luxury-gold"
                      : "text-luxury-white hover:text-luxury-gold"
                  )}
                >
                  {link.title}
                </Link>
              ))}
            </nav>

            {/* Desktop Right Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => setLoginOpen(true)}
                className="text-luxury-silver hover:text-luxury-gold transition-colors duration-300"
              >
                <User size={20} />
              </button>
              <button 
                onClick={() => setCartOpen(true)}
                className="text-luxury-silver hover:text-luxury-gold transition-colors duration-300"
              >
                <ShoppingCart size={20} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-luxury-white hover:text-luxury-gold transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden fixed inset-0 bg-luxury-navy z-40 transform transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <Link 
                to="/" 
                className="text-2xl font-playfair font-bold gold-gradient"
                onClick={() => setIsOpen(false)}
              >
                LUXURY VOYAGE
              </Link>
              <button
                className="text-luxury-white hover:text-luxury-gold transition-colors"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg uppercase tracking-wider transition-colors duration-300 py-2 border-b border-luxury-gold/20",
                    location.pathname === link.path
                      ? "text-luxury-gold"
                      : "text-luxury-white hover:text-luxury-gold"
                  )}
                >
                  {link.title}
                </Link>
              ))}
            </nav>

            <div className="flex justify-around mt-auto mb-12">
              <button 
                onClick={() => {
                  setLoginOpen(true);
                  setIsOpen(false);
                }}
                className="flex items-center justify-center gap-2 text-luxury-silver hover:text-luxury-gold transition-colors duration-300"
              >
                <User size={20} />
                <span>Account</span>
              </button>
              <button 
                onClick={() => {
                  setCartOpen(true);
                  setIsOpen(false);
                }}
                className="flex items-center justify-center gap-2 text-luxury-silver hover:text-luxury-gold transition-colors duration-300"
              >
                <ShoppingCart size={20} />
                <span>Cart</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Login Modal */}
      <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />

      {/* Cart Dialog (simplified for now) */}
      <Dialog open={cartOpen} onOpenChange={setCartOpen}>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-luxury-navy border border-luxury-gold/30 p-8 rounded shadow-2xl w-full max-w-md animate-fade-in">
            <h2 className="text-2xl font-playfair mb-6 text-luxury-gold">Your Cart</h2>
            <div className="text-center py-8">
              <p className="text-luxury-silver mb-6">Your cart is currently empty.</p>
              <Button 
                className="luxury-button" 
                onClick={() => setCartOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Navigation;
