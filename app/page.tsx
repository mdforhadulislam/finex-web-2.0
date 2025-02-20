"use client";
import HomeBanarSection from "@/components/Home/HomeBanarSection";
import HomeCustomerReview from "@/components/Home/HomeCustomerReview";
import HomeHeroSection from "@/components/Home/HomeHeroSection";
// import HomeSubscriptionSection from "@/components/Home/HomeSubscriptionSection";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeBanarSection />
            
      <HomeCustomerReview />
    </>
  );
}
