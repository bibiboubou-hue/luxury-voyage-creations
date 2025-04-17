
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CalendarClock } from "lucide-react";

const ProductsCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-nautical-navy to-nautical-darknavy">
      <motion.div 
        className="luxury-container text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="luxury-subheading mb-6">
          <span className="blue-gradient">Personalized Consultation</span>
        </h2>
        <p className="luxury-paragraph max-w-2xl mx-auto mb-10 text-nautical-sand/90">
          Our product specialists are available to provide personalized guidance
          and answer any questions about our exclusive collection.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="luxury-button-filled flex items-center gap-2 text-base px-8 py-6">
            <CalendarClock className="h-5 w-5" />
            <span>Schedule Consultation</span>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductsCTA;
