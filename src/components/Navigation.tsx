
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginModal from "./LoginModal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
          isScrolled ? "nav-blur bg-nautical-darknavy/70 border-b border-nautical-blue/20" : "bg-transparent"
        )}
      >
        <div className="luxury-container">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-playfair font-bold blue-gradient">NAUTICAL</span>
              <span className="text-sm font-light text-nautical-lightblue uppercase tracking-widest">VOYAGE</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "transition-colors duration-300 link-underline text-sm uppercase tracking-wider",
                    location.pathname === link.path
                      ? "text-nautical-lightblue"
                      : "text-nautical-white hover:text-nautical-lightblue"
                  )}
                >
                  {link.title}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => setLoginOpen(true)}
                className="text-nautical-lightblue hover:text-nautical-white transition-colors duration-300"
              >
                <User size={20} />
              </button>
            </div>

            <button
              className="md:hidden text-nautical-white hover:text-nautical-lightblue transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "md:hidden fixed inset-0 bg-nautical-navy z-40 transform transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <Link 
                to="/" 
                className="text-2xl font-playfair font-bold blue-gradient"
                onClick={() => setIsOpen(false)}
              >
                NAUTICAL VOYAGE
              </Link>
              <button
                className="text-nautical-white hover:text-nautical-lightblue transition-colors"
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
                    "text-lg uppercase tracking-wider transition-colors duration-300 py-2 border-b border-nautical-blue/20",
                    location.pathname === link.path
                      ? "text-nautical-lightblue"
                      : "text-nautical-white hover:text-nautical-lightblue"
                  )}
                >
                  {link.title}
                </Link>
              ))}
            </nav>

            <div className="flex justify-center mt-auto mb-12">
              <button 
                onClick={() => {
                  setLoginOpen(true);
                  setIsOpen(false);
                }}
                className="flex items-center justify-center gap-2 text-nautical-lightblue hover:text-nautical-white transition-colors duration-300"
              >
                <User size={20} />
                <span>Account</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
};

export default Navigation;
