
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginModal = ({ open, onOpenChange }: LoginModalProps) => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate login/register success
    toast({
      title: isLoginForm ? "Login Successful" : "Registration Successful",
      description: isLoginForm 
        ? "Welcome back to Nautical Voyage."
        : "Welcome to Nautical Voyage. Your account has been created.",
      duration: 3000,
    });
    
    onOpenChange(false);
    
    // Reset form
    setEmail("");
    setPassword("");
    setName("");
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
    // Reset form when switching
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-nautical-navy border border-nautical-blue/30 p-0 sm:max-w-md">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-center text-2xl font-playfair text-nautical-lightblue">
            {isLoginForm ? "Welcome Back" : "Create an Account"}
          </DialogTitle>
        </DialogHeader>
        
        <div className="px-6 pb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLoginForm && (
              <div className="space-y-2">
                <label className="text-sm text-nautical-sand" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="luxury-input"
                  placeholder="Enter your full name"
                  required={!isLoginForm}
                />
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-sm text-nautical-sand" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="luxury-input"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-nautical-sand" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="luxury-input"
                placeholder="Enter your password"
                required
              />
            </div>
            
            {isLoginForm && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-nautical-sand hover:text-nautical-lightblue transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            )}
            
            <div className="pt-4">
              <Button type="submit" className="w-full luxury-button-filled">
                {isLoginForm ? "Sign In" : "Create Account"}
              </Button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-nautical-sand text-sm">
              {isLoginForm ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={toggleForm}
                className="ml-1 text-nautical-lightblue hover:underline"
              >
                {isLoginForm ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
