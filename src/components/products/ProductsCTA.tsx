
import React from "react";
import { Button } from "@/components/ui/button";

const ProductsCTA = () => {
  return (
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
  );
};

export default ProductsCTA;
