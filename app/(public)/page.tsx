"use client"
import ListingsSection from "@/src/views/landingPage/ListingsSection";
import TopSection from "@/src/views/landingPage/TopSection";
import TestimonialsSection from "@/src/views/landingPage/Testimonials";

const LandingPage = () => {
  
  return (
    <div className="bg-white mt-16">
      <TopSection />
      <ListingsSection />
      <TestimonialsSection />
    </div>
  );
};

export default LandingPage;
