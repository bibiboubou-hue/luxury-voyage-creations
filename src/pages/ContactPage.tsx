
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interest: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting Luxury Voyage. Our team will respond to your inquiry shortly.",
        duration: 5000,
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        interest: "general",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-luxury-gold" />,
      title: "Visit Us",
      details: ["123 Luxury Avenue", "Monaco, MC 98000"],
    },
    {
      icon: <Mail className="h-6 w-6 text-luxury-gold" />,
      title: "Email Us",
      details: ["info@luxuryvoyage.com", "support@luxuryvoyage.com"],
    },
    {
      icon: <Phone className="h-6 w-6 text-luxury-gold" />,
      title: "Call Us",
      details: ["+377 99 99 99 99", "+377 99 88 88 88"],
    },
    {
      icon: <Clock className="h-6 w-6 text-luxury-gold" />,
      title: "Opening Hours",
      details: ["Monday - Friday: 9AM - 8PM", "Saturday: 10AM - 6PM"],
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-24 mb-12">
        <div 
          className="absolute inset-0 bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1555353540-64580b51c258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)"
          }}
        ></div>
        
        <div className="relative luxury-container text-center">
          <h1 className="luxury-heading mb-6 text-shadow">
            Contact <span className="gold-gradient">Us</span>
          </h1>
          <p className="luxury-paragraph max-w-2xl mx-auto mb-8 text-luxury-silver">
            We're here to assist you with any inquiries about our luxury vehicles or to schedule a private viewing.
            Our dedicated team is committed to providing exceptional service.
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-luxury-black">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div 
                key={item.title}
                className="bg-luxury-navy p-6 border border-luxury-gold/20 hover:border-luxury-gold/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className="ml-3 text-lg font-playfair font-bold">{item.title}</h3>
                </div>
                <div className="space-y-1">
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-luxury-silver">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="section-padding bg-luxury-navy">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="luxury-subheading mb-6 gold-gradient">Get in Touch</h2>
              <p className="luxury-paragraph mb-8 text-luxury-silver">
                Whether you're interested in our luxury cars, yachts, or have any other inquiries,
                we'd love to hear from you. Fill out the form and our team will get back to you shortly.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-luxury-silver">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="luxury-input"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-luxury-silver">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="luxury-input"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm text-luxury-silver">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="luxury-input"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm text-luxury-silver">Area of Interest *</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="luxury-input appearance-none"
                      required
                    >
                      <option value="general">General Inquiry</option>
                      <option value="cars">Luxury Cars</option>
                      <option value="yachts">Luxury Yachts</option>
                      <option value="viewing">Schedule a Viewing</option>
                      <option value="partnership">Partnership Opportunities</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-luxury-silver">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="luxury-input"
                    placeholder="Enter message subject"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-luxury-silver">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="luxury-input h-40 resize-none"
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="luxury-button-filled w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-luxury-gold"></div>
              {/* Map or image placeholder */}
              <div className="w-full h-full min-h-[400px] bg-luxury-black border border-luxury-gold/30">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11552.905773082292!2d7.419650016363934!3d43.73849870454749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc26f7b3f8531%3A0x74f7784c58f12bc4!2sMonte%20Carlo%2C%20Monaco!5e0!3m2!1sen!2sus!4v1681211954305!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-luxury-gold"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Global Locations */}
      <section className="section-padding bg-luxury-black">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="luxury-subheading mb-4 gold-gradient">
              Our Global Locations
            </h2>
            <p className="luxury-paragraph max-w-2xl mx-auto text-luxury-silver">
              Visit one of our exclusive showrooms around the world to experience our collection firsthand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                city: "Monaco",
                address: "123 Luxury Avenue, Monaco, MC 98000",
                phone: "+377 99 99 99 99",
                image: "https://images.unsplash.com/photo-1545287072-c77d0a1dad8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
              },
              {
                city: "Dubai",
                address: "456 Elegance Boulevard, Dubai, UAE",
                phone: "+971 4 123 4567",
                image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
              },
              {
                city: "Beverly Hills",
                address: "789 Prestige Drive, Beverly Hills, CA 90210",
                phone: "+1 310 987 6543",
                image: "https://images.unsplash.com/photo-1569588890088-a9e7e36d1c52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
              },
            ].map((location, index) => (
              <motion.div 
                key={location.city}
                className="bg-luxury-navy border border-luxury-gold/20 overflow-hidden hover:border-luxury-gold/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48">
                  <img 
                    src={location.image} 
                    alt={location.city} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-playfair font-bold">{location.city}</h3>
                </div>
                <div className="p-6">
                  <p className="text-luxury-silver mb-2">{location.address}</p>
                  <p className="text-luxury-silver">{location.phone}</p>
                  <Button className="luxury-button mt-4 text-sm">
                    Get Directions
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
