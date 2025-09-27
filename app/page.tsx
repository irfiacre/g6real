"use client"
import Footer from "@/src/components/landingPage/Footer";
import NavigationSection from "@/src/components/landingPage/Navigation";
import SecondSection from "@/src/components/landingPage/SecondSection";
import TopSection from "@/src/components/landingPage/TopSection";
import { useSession } from "next-auth/react";

const LandingPage = () => {
  
  // const { data: session } = useSession();
  return (
    <div className="bg-backgroundColor">
      <NavigationSection user={{}}/>
      <TopSection user={{}} />
      {/* <SecondSection user={{}} /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
